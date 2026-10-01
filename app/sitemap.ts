import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

const routes = [
  { path: "", priority: 1 },
  { path: "/about/ceo", priority: 0.8 },
  { path: "/careers", priority: 0.6 },
  { path: "/privacy", priority: 0.3 },
  { path: "/delete-account", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.siteUrl) return [];
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route.path}`,
    lastModified,
    priority: route.priority,
  }));
}
