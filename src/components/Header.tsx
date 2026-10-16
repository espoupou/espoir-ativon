"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    const frame = requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMobileMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const handleResize = () => {
      if (desktop.matches) setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.experiences, href: "/experiences" },
    { name: t.nav.contact, href: "/#contact" },
  ];
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const menuLabel = language === "fr"
    ? (mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu")
    : (mobileMenuOpen ? "Close menu" : "Open menu");

  return (
    <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-background focus:px-5 focus:py-3 focus:text-foreground focus:shadow-lg">
      {language === "fr" ? "Aller au contenu principal" : "Skip to main content"}
    </a>
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || mobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-border py-3 shadow-sm"
          : "bg-background/90 border-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between">
        <Link href="/" onClick={() => setMobileMenuOpen(false)} aria-label={language === "fr" ? "Kokou Espoir ATIVON - Accueil" : "Kokou Espoir ATIVON - Home"} className="font-heading font-bold text-xl tracking-tight text-foreground hover:text-accent-green transition-colors shrink-0">
          K. Espoir
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-7" aria-label={language === "fr" ? "Navigation principale" : "Main navigation"}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-accent-green"
                  : "text-foreground-secondary hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <ThemeToggle />
          <LanguageToggle />
          <a
            href={`/cv/cv-${language}.pdf`}
            download
            className="min-h-11 inline-flex items-center px-4 py-2 bg-accent-green hover:bg-emerald-700 dark:hover:bg-emerald-400 text-white dark:text-[#052415] text-sm font-semibold rounded-md transition-colors whitespace-nowrap"
          >
            {t.nav.downloadCV}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          type="button"
          className="md:hidden min-h-11 min-w-11 inline-flex items-center justify-center rounded-md text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={menuLabel}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label={language === "fr" ? "Navigation mobile" : "Mobile navigation"}
            initial={reducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.18 }}
            className="md:hidden bg-background-secondary border-t border-border mt-3 max-h-[calc(100dvh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col px-5 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`min-h-11 flex items-center text-base font-medium py-2 ${
                    isActive(link.href)
                      ? "text-accent-green"
                      : "text-foreground-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
                <a
                  href={`/cv/cv-${language}.pdf`}
                  download
                  className="min-h-11 inline-flex items-center px-4 py-2 bg-accent-green hover:bg-emerald-700 dark:hover:bg-emerald-400 text-white dark:text-[#052415] text-sm font-semibold rounded-md text-center transition-colors"
                >
                  {t.nav.downloadCV}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
