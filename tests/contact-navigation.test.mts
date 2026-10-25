import assert from "node:assert/strict";
import test from "node:test";
import {
  CONTACT_EMAIL,
  CONTACT_GMAIL_URL,
  CONTACT_HREF,
  CONTACT_MAILTO_URL,
  normalizeHash,
} from "../src/lib/contact.ts";

test("contact anchor always uses one canonical fragment", () => {
  assert.equal(CONTACT_HREF, "/#contact");
  assert.equal(normalizeHash("#contact"), "#contact");
  assert.equal(normalizeHash("#contact#contact"), "#contact");
  assert.equal(normalizeHash("#contact#contact#contact#contact"), "#contact");
  assert.equal(normalizeHash(""), "");
});

test("email actions support the default app and optional Gmail compose", () => {
  assert.equal(CONTACT_MAILTO_URL, `mailto:${CONTACT_EMAIL}`);

  const composeUrl = new URL(CONTACT_GMAIL_URL);

  assert.equal(composeUrl.origin, "https://mail.google.com");
  assert.equal(composeUrl.pathname, "/mail/");
  assert.equal(composeUrl.searchParams.get("view"), "cm");
  assert.equal(composeUrl.searchParams.get("fs"), "1");
  assert.equal(composeUrl.searchParams.get("to"), CONTACT_EMAIL);
});
