"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";
import { useTranslation } from "@/i18n";
import { useLanguage } from "@/i18n/LanguageContext";

const siteName = "Kokou Espoir ATIVON";

function updateMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function updateCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }
  element.href = href;
}

export default function LanguageMetadata() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    const projectSlug = pathname.match(/^\/projects\/([^/]+)$/)?.[1];
    const experienceSlug = pathname.match(/^\/experiences\/([^/]+)$/)?.[1];
    const project = projectSlug ? projects.find((item) => item.slug === projectSlug) : undefined;
    const experience = experienceSlug ? experiences.find((item) => item.slug === experienceSlug) : undefined;

    let pageTitle = language === "fr"
      ? "Génie industriel et digitalisation"
      : "Industrial engineering and digitalization";
    let description = language === "fr"
      ? "Étudiant ingénieur en génie industriel avec un parcours en informatique, à la recherche d’un stage à partir de janvier 2027 en amélioration continue, production, qualité, données industrielles ou digitalisation."
      : "Industrial engineering student with a software background, looking for an internship starting in January 2027 in continuous improvement, production, quality, industrial data or digitalization.";

    if (pathname === "/projects") {
      pageTitle = t.projects.title;
      description = t.projects.subtitle;
    } else if (pathname === "/experiences") {
      pageTitle = t.experiences.title;
      description = t.experiences.subtitle;
    } else if (project) {
      pageTitle = project.content.title[language];
      description = project.content.summary[language];
    } else if (experience) {
      pageTitle = experience.content.role[language];
      description = experience.content.context[language];
    } else if (pathname !== "/") {
      pageTitle = t.states.notFoundTitle;
      description = t.states.notFoundDescription;
    }

    const title = pathname === "/" ? `${siteName} — ${pageTitle}` : `${pageTitle} | ${siteName}`;
    document.title = title;
    updateMeta('meta[name="description"]', "name", "description", description);
    updateMeta('meta[property="og:title"]', "property", "og:title", title);
    updateMeta('meta[property="og:description"]', "property", "og:description", description);
    updateMeta('meta[property="og:locale"]', "property", "og:locale", language === "fr" ? "fr_FR" : "en_GB");
    const canonicalUrl = `${window.location.origin}${pathname}`;
    updateMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    updateMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    updateMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    updateCanonical(canonicalUrl);
  }, [language, pathname, t]);

  return null;
}
