export const siteConfig = {
  name: "Base of Stars",
  legalName: "Base of Stars Technologies LLP",
  address: [
    "No. 457/XIII, Kaliyathodikayil, Adampady",
    "Nellika Paramba, Mukkam",
    "Kozhikode, Kerala, India",
  ],
  tagline: "AI Solutions for Business Growth",
  description:
    "We use AI to solve real business problems. From intelligent automation to custom AI agents, we help businesses work smarter, scale faster, and delight customers.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://baseofstars.com",
  email: "hello@baseofstars.com",
  locale: "en_US",
  twitterHandle: "@baseofstars",
  brand: {
    orange: "#FF4B1F",
    gold: "#FFD700",
    background: "#FCFCFC",
    foreground: "#141414",
    muted: "#6B7280",
  },
} as const
