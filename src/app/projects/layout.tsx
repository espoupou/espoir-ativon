import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projets industriels, données et logiciels",
  description:
    "Études de cas de Kokou Espoir ATIVON en production, amélioration continue, données industrielles, simulation et développement logiciel.",
  path: "/projects",
});

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
