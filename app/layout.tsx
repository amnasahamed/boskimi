import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from "@/components/providers"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { createMetadata } from "@/lib/metadata"
import { siteConfig } from "@/lib/site"
import './globals.css'

// Body font - Highly readable, modern sans-serif
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

// Heading font - Editorial, sophisticated serif
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: 'swap',
  variable: '--font-instrument-serif',
})

// Mono font - Clean, technical
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fcfcfc' },
    { media: '(prefers-color-scheme: dark)', color: '#fcfcfc' },
  ],
}

export const metadata: Metadata = {
  ...createMetadata({
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    path: "/",
    image: "og-default.png",
  }),
  generator: "Next.js",
  applicationName: siteConfig.name,
  keywords: [
    "AI solutions",
    "AI agents",
    "workflow automation",
    "WhatsApp automation",
    "business automation",
    "Base of Stars",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.com" />
      </head>
      <body className="font-sans antialiased lg:cursor-none">
        <CustomCursor />
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
