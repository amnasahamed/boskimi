import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from "@/components/providers"
import { CustomCursor } from "@/components/ui/custom-cursor"
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
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export const metadata: Metadata = {
  title: 'Base of Stars | AI Solutions for Business Growth',
  description: 'We use AI to solve real business problems. From intelligent automation to custom AI agents, we help businesses work smarter, scale faster, and delight customers.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
      <body className="font-sans antialiased cursor-none lg:cursor-none">
        <CustomCursor />
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
