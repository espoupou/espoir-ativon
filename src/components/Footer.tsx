"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";
import { CONTACT_HREF, CONTACT_MAILTO_URL } from "@/lib/contact";

export default function Footer() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border mt-auto pt-12 pb-8">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading font-bold text-xl text-foreground">Kokou Espoir ATIVON</h3>
            <p className="text-sm text-foreground-secondary leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-heading font-semibold text-foreground">{t.footer.navigation}</h4>
            <ul className="flex flex-col space-y-2 text-sm text-foreground-secondary">
              <li><Link href="/" className="hover:text-accent-green transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/projects" className="hover:text-accent-green transition-colors">{t.nav.projects}</Link></li>
              <li><Link href="/experiences" className="hover:text-accent-green transition-colors">{t.nav.experiences}</Link></li>
              <li><a href={CONTACT_HREF} className="hover:text-accent-green transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-heading font-semibold text-foreground">{t.footer.social}</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/kokou-espoir-ativon-3404571a6"
                target="_blank"
                rel="noopener noreferrer"
                className="size-11 inline-flex items-center justify-center rounded-md border border-border text-foreground-secondary hover:text-accent-green transition-colors"
                aria-label={language === "fr" ? "Profil LinkedIn (nouvel onglet)" : "LinkedIn profile (new tab)"}
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://github.com/espoupou"
                target="_blank"
                rel="noopener noreferrer"
                className="size-11 inline-flex items-center justify-center rounded-md border border-border text-foreground-secondary hover:text-foreground transition-colors"
                aria-label={language === "fr" ? "Profil GitHub (nouvel onglet)" : "GitHub profile (new tab)"}
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={CONTACT_MAILTO_URL}
                className="size-11 inline-flex items-center justify-center rounded-md border border-border text-foreground-secondary hover:text-accent-green transition-colors"
                aria-label={language === "fr" ? "Envoyer un e-mail avec l'application par défaut" : "Send email with the default app"}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-foreground-secondary">
          <p>© {currentYear} Kokou Espoir ATIVON. {t.footer.rights}</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#main-content" className="min-h-11 inline-flex items-center hover:text-accent-green transition-colors">{t.footer.backToTop} ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
