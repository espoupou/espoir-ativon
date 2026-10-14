"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const frenchLabel = language === "fr" ? "Français sélectionné" : "Switch to French";
  const englishLabel = language === "fr" ? "Passer en anglais" : "English selected";

  return (
    <div role="group" aria-label={language === "fr" ? "Langue du site" : "Website language"} className="flex items-center space-x-1 border border-border rounded-md p-1 bg-background-secondary">
      <button
        type="button"
        onClick={() => setLanguage("fr")}
        className={`min-h-9 min-w-9 px-2 py-1 text-xs font-semibold rounded-sm transition-colors ${
          language === "fr"
            ? "bg-accent-green text-white dark:text-[#052415]"
            : "text-foreground-secondary hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
        aria-label={frenchLabel}
        lang="fr"
        aria-pressed={language === "fr"}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`min-h-9 min-w-9 px-2 py-1 text-xs font-semibold rounded-sm transition-colors ${
          language === "en"
            ? "bg-accent-green text-white dark:text-[#052415]"
            : "text-foreground-secondary hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
        aria-label={englishLabel}
        lang="en"
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
