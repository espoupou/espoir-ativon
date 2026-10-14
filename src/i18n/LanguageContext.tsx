"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";

export type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const storageKey = "portfolio-language";
const languageEvent = "portfolio-language-change";
let sessionLanguage: Language = "fr";

function getLanguage(): Language {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "fr" || saved === "en") return saved;
  } catch {
    // Language selection remains usable when browser storage is unavailable.
  }
  return sessionLanguage;
}

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) onChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(languageEvent, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(languageEvent, onChange);
  };
}

function setLanguage(language: Language) {
  sessionLanguage = language;
  try {
    localStorage.setItem(storageKey, language);
  } catch {
    // A blocked preference write must not prevent changing the page language.
  }
  document.documentElement.lang = language;
  window.dispatchEvent(new Event(languageEvent));
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const language = useSyncExternalStore(subscribe, getLanguage, () => "fr" as Language);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
