"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";

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
            <h4 className="font-heading font-semibold text-foreground">Navigation</h4>
            <ul className="flex flex-col space-y-2 text-sm text-foreground-secondary">
              <li><Link href="/" className="hover:text-accent-green transition-colors">{t.nav.home}</Link></li>
              <li><Link href="/projects" className="hover:text-accent-green transition-colors">{t.nav.projects}</Link></li>
              <li><Link href="/experiences" className="hover:text-accent-green transition-colors">{t.nav.experiences}</Link></li>
              <li><Link href="/#contact" className="hover:text-accent-green transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Social</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/kokou-espoir-ativon-3404571a6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://github.com/espoupou"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="mailto:espoir.ativon@example.com"
                className="text-foreground-secondary hover:text-accent-green transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-foreground-secondary">
          <p>© {currentYear} Kokou Espoir ATIVON. {t.footer.rights}</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <span className="font-mono text-[10px]">Built with Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
