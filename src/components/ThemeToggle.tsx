"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const subscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { language } = useLanguage();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isDark = resolvedTheme === "dark";
  const label = language === "fr"
    ? (isDark ? "Activer le thème clair" : "Activer le thème sombre")
    : (isDark ? "Switch to light theme" : "Switch to dark theme");

  if (!mounted) {
    return <span className="block size-11" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="size-11 inline-flex items-center justify-center rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
      aria-label={label}
      title={label}
    >
      {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  );
}
