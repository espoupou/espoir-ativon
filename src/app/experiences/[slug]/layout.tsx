import type { ReactNode } from "react";
import { getExperienceMetadata } from "@/lib/seo";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return getExperienceMetadata(slug);
}

export default function ExperienceLayout({ children }: Props) {
  return children;
}
