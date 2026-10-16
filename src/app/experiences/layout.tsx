import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Expériences professionnelles",
  description:
    "Expériences de Kokou Espoir ATIVON en production industrielle, qualité, traçabilité et développement logiciel.",
  path: "/experiences",
});

export default function ExperiencesLayout({ children }: { children: ReactNode }) {
  return children;
}
