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
    <div className="flex flex-col items-center gap-3">
      <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
        <a
          href={CONTACT_MAILTO_URL}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-green px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-emerald-600 sm:w-auto"
        >
          <Mail size={18} aria-hidden="true" />
          {sendEmail}
        </a>
        <a
          href={CONTACT_GMAIL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 font-medium text-foreground shadow-sm transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 sm:w-auto"
        >
          {openGmail}
          <ExternalLink size={16} aria-hidden="true" />
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 font-medium text-foreground shadow-sm transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 sm:w-auto"
        >
          {copyStatus === "copied" ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
          {copyStatus === "copied" ? copiedEmail : copyEmail}
        </button>
      </div>
      <p className="text-sm text-foreground-secondary">{CONTACT_EMAIL}</p>
      <p className="min-h-5 text-sm text-foreground-secondary" role="status" aria-live="polite">
        {copyStatus === "copied" ? copiedEmail : copyStatus === "error" ? copyError : ""}
      </p>
    </div>
  );
}
