import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

const routes = [
  "",
  "/about",
  "/careers",
  "/portfolio",
  "/case-studies",
  "/case-studies/navakeralam",
  "/case-studies/clapslearn-ai",
  "/case-studies/badria-sweets",
  "/case-studies/clapsboard",
  "/services",
  "/services/ai-agents",
  "/services/ai-solutions",
  "/services/workflows",
  "/services/whatsapp",
  "/services/web-development",
  "/services/app-creation",
  "/services/it-consulting",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services") || path.startsWith("/case-studies") ? 0.8 : 0.7,
  }))
}
