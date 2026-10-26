"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, Mail } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_GMAIL_URL,
  CONTACT_MAILTO_URL,
} from "@/lib/contact";

type ContactActionsProps = {
  copyEmail: string;
  copiedEmail: string;
  copyError: string;
  downloadCV: string;
  cvHref: string;
  emailLabel: string;
  openGmail: string;
  sendEmail: string;
};

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  textArea.remove();

  if (!copied) {
    throw new Error("Copy command failed");
  }
}

export default function ContactActions({
  copyEmail,
  copiedEmail,
  copyError,
  downloadCV,
  cvHref,
  emailLabel,
  openGmail,
  sendEmail,
}: ContactActionsProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  const handleCopy = async () => {
    try {
      await copyText(CONTACT_EMAIL);
      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), 2500);
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-cards p-4 shadow-sm">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground-secondary">
          {emailLabel}
        </p>
        <div className="flex items-center gap-3">
          <Mail className="shrink-0 text-accent-green" size={20} aria-hidden="true" />
          <a
            href={CONTACT_MAILTO_URL}
            className="min-w-0 flex-1 break-all text-left font-medium text-foreground transition-colors hover:text-accent-green"
          >
            {CONTACT_EMAIL}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground-secondary transition-colors hover:border-accent-green/50 hover:text-accent-green"
            aria-label={copyStatus === "copied" ? copiedEmail : copyEmail}
            title={copyStatus === "copied" ? copiedEmail : copyEmail}
          >
            {copyStatus === "copied" ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
          </button>
        </div>
        <p className="mt-2 min-h-5 text-left text-sm text-foreground-secondary" role="status" aria-live="polite">
          {copyStatus === "copied" ? copiedEmail : copyStatus === "error" ? copyError : ""}
        </p>
      </div>

      <a
        href={CONTACT_MAILTO_URL}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent-green px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-emerald-600"
      >
        <Mail size={18} aria-hidden="true" />
        {sendEmail}
      </a>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <a
          href={CONTACT_GMAIL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 font-medium text-foreground shadow-sm transition-colors hover:border-accent-green/40 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          {openGmail}
          <ExternalLink size={16} aria-hidden="true" />
        </a>
        <a
          href={cvHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-border bg-background px-5 py-3 font-medium text-foreground shadow-sm transition-colors hover:border-accent-blue/40 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          {downloadCV}
        </a>
      </div>
    </div>
  );
}
