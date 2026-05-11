"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 border border-border rounded-md p-1 bg-background-secondary">
      <button
        onClick={() => setLanguage("fr")}
        className={`px-2 py-1 text-xs font-semibold rounded-sm transition-colors ${
          language === "fr"
            ? "bg-accent-green text-white"
            : "text-foreground-secondary hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
        aria-label="Passer en français"
      >
        FR
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 text-xs font-semibold rounded-sm transition-colors ${
          language === "en"
            ? "bg-accent-green text-white"
            : "text-foreground-secondary hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
