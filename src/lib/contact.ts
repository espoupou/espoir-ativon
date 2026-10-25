export const CONTACT_SECTION_ID = "contact";
export const CONTACT_HREF = `/#${CONTACT_SECTION_ID}`;
export const CONTACT_EMAIL = "espoirativon@gmail.com";

export const CONTACT_MAILTO_URL = `mailto:${CONTACT_EMAIL}`;

export const CONTACT_GMAIL_URL =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`;

export function normalizeHash(hash: string): string {
  if (!hash.startsWith("#")) return "";

  const firstFragment = hash.slice(1).split("#", 1)[0].trim();
  return firstFragment ? `#${firstFragment}` : "";
}
