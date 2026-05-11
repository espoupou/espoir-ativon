"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.projects, href: "/projects" },
    { name: t.nav.experiences, href: "/experiences" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl tracking-tight text-foreground hover:text-accent-green transition-colors">
          K. Espoir
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                  ? "text-accent-green"
                  : "text-foreground-secondary hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <LanguageToggle />
          <a
            href={`/cv/cv-${language}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-accent-green hover:bg-emerald-600 text-white text-sm font-medium rounded-md transition-all shadow-sm hover:shadow-md"
          >
            {t.nav.downloadCV}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background-secondary border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-5 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 ${
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                      ? "text-accent-green"
                      : "text-foreground-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
                <a
                  href={`/cv/cv-${language}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-accent-green text-white text-sm font-medium rounded-md text-center"
                >
                  {t.nav.downloadCV}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
