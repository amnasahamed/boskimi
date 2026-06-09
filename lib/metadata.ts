import type { Metadata } from "next"
import { siteConfig } from "./site"

type CreateMetadataOptions = {
  title: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
}

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = "og-default.png",
  noIndex = false,
}: CreateMetadataOptions): Metadata {
  const normalizedPath = path.startsWith("/") ? path : path ? `/${path}` : ""
  const url = `${siteConfig.url}${normalizedPath}`
  const imagePath = `/meta/${image}`
  const imageUrl = `${siteConfig.url}${imagePath}`
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  }
}
