import type { ReactNode } from "react";
import { researchWorks } from "@/data/research";
import { createPageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

const work = researchWorks[0];
const path = `/research/${work.slug}`;

export const metadata = createPageMetadata({
  title: "Cellules solaires hybrides à pérovskite - Manuscrit technique",
  description: work.summary.fr,
  path,
  type: "article",
});

const researchJsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "@id": `${SITE_URL}${path}#manuscript`,
  url: `${SITE_URL}${path}`,
  headline: work.title,
  description: work.summary.fr,
  author: work.authors.map((name) => ({ "@type": "Person", name })),
  inLanguage: ["fr", "en"],
  isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  creativeWorkStatus: "Unpublished manuscript",
};

export default function ResearchLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(researchJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
