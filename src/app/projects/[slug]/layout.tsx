import type { ReactNode } from "react";
import { getProjectMetadata, ProjectSeoLayout } from "@/lib/seo";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return getProjectMetadata(slug);
}

export default async function ProjectLayout({ children, params }: Props) {
  const { slug } = await params;
  return <ProjectSeoLayout slug={slug}>{children}</ProjectSeoLayout>;
}
