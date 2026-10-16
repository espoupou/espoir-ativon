import type { ReactNode } from "react";
import { getExperienceMetadata } from "@/lib/seo";

export const metadata = getExperienceMetadata("stage-qualite-um5");

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
