import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Kerry - Stage en amélioration continue et excellence opérationnelle",
  description:
    "Stage d’ingénieur chez Kerry à Blendecques : amélioration continue, Lean, audits LPA, analyse SMED, standardisation du travail et formation des équipes.",
  path: "/experiences/kerry",
  type: "article",
});

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
