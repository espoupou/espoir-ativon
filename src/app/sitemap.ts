import type { MetadataRoute } from "next";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/experiences`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const experiencePages: MetadataRoute.Sitemap = experiences.map((experience) => ({
    url: `${SITE_URL}/experiences/${experience.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...experiencePages];
}
