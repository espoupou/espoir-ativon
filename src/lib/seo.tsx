import type { Metadata } from "next";
import type { ReactNode } from "react";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";

export const SITE_NAME = "Kokou Espoir ATIVON";
export const SITE_URL = "https://espoir-ativon.vercel.app";
export const SOCIAL_IMAGE_PATH = "/opengraph-image";

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
}: PageMetadataOptions): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const brandedTitle = `${title} | ${SITE_NAME}`;

  return {
    title: { absolute: brandedTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "fr_FR",
      alternateLocale: ["en_GB"],
      siteName: SITE_NAME,
      title: brandedTitle,
      description,
      url,
      images: [
        {
          url: SOCIAL_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - Génie industriel et digitalisation`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [SOCIAL_IMAGE_PATH],
    },
  };
}

export function getProjectMetadata(slug: string): Metadata {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return createPageMetadata({
    title: project.content.title.fr,
    description: project.content.summary.fr,
    path: `/projects/${project.slug}`,
    type: "article",
  });
}

export function getExperienceMetadata(slug: string): Metadata {
  const experience = experiences.find((item) => item.slug === slug);
  if (!experience) return {};

  return createPageMetadata({
    title: `${experience.content.role.fr} - ${experience.content.organization}`,
    description: experience.content.context.fr,
    path: `/experiences/${experience.slug}`,
    type: "article",
  });
}

export const identityJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: SITE_NAME,
      url: SITE_URL,
      jobTitle: "Étudiant ingénieur en génie industriel",
      description:
        "Étudiant ingénieur en génie industriel avec un parcours en informatique, spécialisé en amélioration continue, données industrielles et digitalisation.",
      email: "mailto:espoirativon@gmail.com",
      sameAs: [
        "https://www.linkedin.com/in/kokou-espoir-ativon-3404571a6",
        "https://github.com/espoupou",
        "https://www.malt.fr/profile/kokouespoirativon",
      ],
      knowsAbout: [
        "Génie industriel",
        "Amélioration continue",
        "Lean manufacturing",
        "Données industrielles",
        "Digitalisation industrielle",
        "Python",
        "SQL",
        "Node-RED",
      ],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "ENSAM Rabat" },
        {
          "@type": "CollegeOrUniversity",
          name: "École d'Ingénieurs du Littoral Côte d'Opale",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: ["fr", "en"],
      author: { "@id": personId },
    },
  ],
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function IdentityJsonLd() {
  return <JsonLd data={identityJsonLd} />;
}

export function ProjectSeoLayout({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return children;

  const url = `${SITE_URL}/projects/${project.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    url,
    name: project.content.title.fr,
    alternateName: project.content.title.en,
    description: project.content.summary.fr,
    inLanguage: ["fr", "en"],
    author: { "@id": personId },
    isPartOf: { "@id": websiteId },
    keywords: project.content.tools.join(", "),
    ...(project.github ? { codeRepository: project.github } : {}),
  };

  return (
    <>
      <JsonLd data={data} />
      {children}
    </>
  );
}
