import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Vaibhavi Pai - Technologist, Mentor, Explorer",
    template: "%s | Vaibhavi Pai",
  },
  description:
    "Technologist, mentor, and explorer navigating the intersection of AI, creativity, and human connection. Co-Founder & CTO at ClassMent, AI researcher, and passionate mentor helping the next generation of tech professionals.",
  keywords: [
    "Vaibhavi Pai",
    "AI researcher",
    "technologist",
    "mentor",
    "ClassMent",
    "artificial intelligence",
    "machine learning",
    "software engineer",
    "Microsoft",
    "Samsung R&D",
    "scuba diving",
    "board games",
    "travel",
    "food blogger",
    "Bengaluru",
    "India",
  ],
  authors: [{ name: "Vaibhavi Pai", url: "https://vaibhavipai.com" }],
  creator: "Vaibhavi Pai",
  publisher: "Vaibhavi Pai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vaibhavipai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaibhavipai.com",
    title: "Vaibhavi Pai - Technologist, Mentor, Explorer",
    description:
      "Technologist, mentor, and explorer navigating the intersection of AI, creativity, and human connection. Co-Founder & CTO at ClassMent, AI researcher, and passionate mentor.",
    siteName: "Vaibhavi Pai",
    images: [
      {
        url: "/bauhaus-woman-portrait.png",
        width: 1200,
        height: 630,
        alt: "Vaibhavi Pai - Technologist, Mentor, Explorer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhavi Pai - Technologist, Mentor, Explorer",
    description:
      "Technologist, mentor, and explorer navigating the intersection of AI, creativity, and human connection.",
    creator: "@VaibhaviPai15",
    images: ["/bauhaus-woman-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "icon",
        url: "/favicon.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#DC2626" />
        <meta name="msapplication-TileColor" content="#DC2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DV6817RXLW" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DV6817RXLW');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${spaceMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
