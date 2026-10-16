import type { ReactNode } from "react";
import { getProjectMetadata, ProjectSeoLayout } from "@/lib/seo";

const slug = "ligne-production-devidoir";
export const metadata = getProjectMetadata(slug);

export default function Layout({ children }: { children: ReactNode }) {
  return <ProjectSeoLayout slug={slug}>{children}</ProjectSeoLayout>;
}
