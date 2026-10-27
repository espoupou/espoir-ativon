"use client";

import { useState, type CSSProperties } from "react";
import { Award, Pause, Play, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";

export default function SkillGrid() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [paused, setPaused] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const groups = t.skills.categories.map((category) => ({
    ...category,
    skills: category.items.replace(/\.$/, "").split(", "),
  }));
  const industrialRowEnd = 4;
  const rows = [groups.slice(0, industrialRowEnd), groups.slice(industrialRowEnd)]
    .map((row) => [...new Set(row.flatMap((group) => group.skills))]);

  return (
    <div className="min-w-0 space-y-7">
      <div className="flex flex-col gap-5 rounded-2xl border border-accent-green/25 bg-accent-green/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-green/20 bg-cards">
            <Award className="text-accent-green" size={26} aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-green">{t.skills.certificationLabel}</p>
            <h3 className="mt-1 font-heading text-xl font-bold sm:text-2xl">Lean Six Sigma Black Belt</h3>
            <p className="mt-1 text-sm font-medium text-foreground">{t.skills.certificationIssuer} - {t.skills.certificationYear}</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground-secondary">{t.skills.certificationDescription}</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
          <a href="https://digitalcredentials.aigproexcellence.com/en/profile/kokouespoirativon3451049/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-green underline-offset-4 hover:underline">
            {t.skills.verifyCredential}<ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <Link href="/experiences/kerry" className="inline-flex items-center gap-2 text-sm text-foreground-secondary underline-offset-4 hover:text-accent-green hover:underline">
            {t.skills.fieldExperience}<ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-2xl text-sm leading-relaxed text-foreground-secondary">{t.skills.intro}</p>
        <button type="button" aria-pressed={paused} aria-controls="skill-rows" onClick={() => setPaused(!paused)}
          className="skills-motion-control inline-flex items-center gap-2 rounded-full border border-border bg-cards px-4 py-2 text-sm hover:border-accent-green focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-green">
          {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          {paused ? t.skills.resume : t.skills.pause}
        </button>
      </div>
      <div id="skill-rows" className="skills-marquee space-y-3" data-paused={paused || expanded}>
        {rows.map((skills, row) => (
          <div className="skills-window rounded-xl" key={row} tabIndex={0} role="region" aria-label={t.skills.rowLabels[row]}>
            <div className="skills-track" style={{ "--skills-duration": `${skills.length * 4}s` } as CSSProperties}>
              {[0, 1].map((copy) => (
                <ul key={copy} aria-hidden={copy === 1 ? true : undefined} className={`skills-group ${copy === 1 ? "skills-copy" : ""}`}>
                  {skills.map((skill) => (
                    <li key={skill} className="flex shrink-0 items-center gap-3 whitespace-nowrap rounded-xl border border-border bg-cards px-5 py-4 text-sm font-medium sm:px-6 sm:text-base">
                      <span className={`h-1.5 w-1.5 rounded-full ${row === 0 ? "bg-accent-green" : "bg-accent-blue"}`} aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
      <details onToggle={(event) => setExpanded(event.currentTarget.open)} className="rounded-xl border border-border bg-cards p-5">
        <summary className="cursor-pointer text-sm font-medium text-foreground marker:text-accent-green">{t.skills.viewAll}</summary>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.name}>
              <h3 className="mb-3 font-heading text-sm font-semibold text-accent-green">{group.name}</h3>
              <ul className="space-y-1.5 text-sm text-foreground-secondary">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}
