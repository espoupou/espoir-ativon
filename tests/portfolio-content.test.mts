import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { certifications } from "../src/data/certifications.ts";
import { projects } from "../src/data/projects.ts";
import { researchWorks } from "../src/data/research.ts";

test("vehicle project and research manuscript have bilingual public content", () => {
  const vehicle = projects.find((project) => project.slug === "vehicule-tricycle");
  assert.ok(vehicle);
  assert.equal(vehicle.type, "industrial");
  assert.ok(vehicle.content.summary.fr);
  assert.ok(vehicle.content.summary.en);
  assert.equal(vehicle.caseStudy.steps.length, 3);

  const manuscript = researchWorks.find((work) => work.slug === "perovskite-solar-cells");
  assert.ok(manuscript);
  assert.match(manuscript.status.fr, /non publié/i);
  assert.match(manuscript.status.en, /unpublished/i);
  assert.ok(manuscript.scope.fr);
  assert.ok(manuscript.scope.en);
});

test("certifications include the strongest verified areas without duplicate ids", () => {
  assert.ok(certifications.length >= 5);
  assert.equal(new Set(certifications.map((item) => item.id)).size, certifications.length);
  assert.ok(certifications.some((item) => item.id === "lean-six-sigma-black-belt"));
  assert.ok(certifications.some((item) => item.id === "alx-backend"));
  assert.ok(certifications.some((item) => item.id === "icpc-togo"));
});

test("source files do not contain em dashes", () => {
  const sourceRoot = join(process.cwd(), "src");
  const files: string[] = [];

  const collect = (directory: string) => {
    for (const entry of readdirSync(directory)) {
      const path = join(directory, entry);
      if (statSync(path).isDirectory()) collect(path);
      else if (/\.(ts|tsx|css)$/.test(entry)) files.push(path);
    }
  };

  collect(sourceRoot);
  for (const file of files) {
    assert.equal(readFileSync(file, "utf8").includes("—"), false, file);
  }
});
