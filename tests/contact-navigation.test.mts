import assert from "node:assert/strict";
import test from "node:test";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_URL,
  CONTACT_HREF,
  normalizeHash,
} from "../src/lib/contact.ts";

test("contact anchor always uses one canonical fragment", () => {
  assert.equal(CONTACT_HREF, "/#contact");
  assert.equal(normalizeHash("#contact"), "#contact");
  assert.equal(normalizeHash("#contact#contact"), "#contact");
  assert.equal(normalizeHash("#contact#contact#contact#contact"), "#contact");
  assert.equal(normalizeHash(""), "");
});

test("email action opens a browser compose screen addressed correctly", () => {
  const composeUrl = new URL(CONTACT_EMAIL_URL);

  assert.equal(composeUrl.origin, "https://mail.google.com");
  assert.equal(composeUrl.pathname, "/mail/");
  assert.equal(composeUrl.searchParams.get("view"), "cm");
  assert.equal(composeUrl.searchParams.get("fs"), "1");
  assert.equal(composeUrl.searchParams.get("to"), CONTACT_EMAIL);
});
