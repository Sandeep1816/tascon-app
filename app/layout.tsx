import type { Metadata } from "next"
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
// import StructuredData from "@/components/StructuredData"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://tasconmedia.com"),
  title: {
    default: "Tascon Media | B2B Event Solutions",
    template: "%s | Tascon Media",
  },
  description:
    "Elevate your business with Tascon Media. We connect visionaries, foster innovation, and drive industry transformation through world-class B2B events.",
  keywords: [
    "B2B Events",
    "Industry Conferences",
    "Business Networking",
    "Professional Development",
    "Event Management",
  ],
  authors: [{ name: "Tascon Media", url: "https://tasconmedia.com" }],
  creator: "Tascon Media",
  publisher: "Tascon Media",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tasconmedia.com",
    siteName: "Tascon Media",
    title: "Tascon Media | Transforming B2B Events",
    description:
      "Connecting visionaries, fostering innovation, and driving industry transformation through world-class B2B events.",
    images: [
      {
        url: "https://tasconmedia.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tascon Media - B2B Event Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tascon Media | B2B Event Solutions",
    description: "Transforming industries through innovative B2B events and networking opportunities.",
    creator: "@tasconmedia",
    images: ["https://tasconmedia.com/twitter-image.jpg"],
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
  alternates: {
    canonical: "https://tasconmedia.com",
    languages: {
      "en-US": "https://tasconmedia.com",
      "es-ES": "https://tasconmedia.com/es",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* <StructuredData /> */}
        <link rel="canonical" href="https://tasconmedia.com" />
      </head>
      <body className="flex flex-col min-h-screen antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* <Analytics /> */}
      </body>
    </html>
  )
}

