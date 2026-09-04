import { Fraunces, Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppFloat from "./components/WhatsAppFloat";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://zuricreativedesigns.com"),
  title: {
    default: "Zuri Creative Designs | Web & Software Development",
    template: "%s | Zuri Creative Designs",
  },
  description:
    "We build modern websites and software that help businesses grow — for clients in Kenya and worldwide.",
  keywords: [
    "web design Kenya",
    "Nyahururu web developer",
    "web design agency",
    "software development Kenya",
    "WiFi billing system",
  ],
  openGraph: {
    title: "Zuri Creative Designs | Web & Software Development",
    description:
      "We build modern websites and software that help businesses grow — for clients in Kenya and worldwide.",
    url: "https://zuricreativedesigns.com",
    siteName: "Zuri Creative Designs",
    images: [
      {
        url: "/og-image.jpg", // add a 1200x630 image at public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Zuri Creative Designs",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuri Creative Designs | Web & Software Development",
    description:
      "We build modern websites and software that help businesses grow — for clients in Kenya and worldwide.",
    images: ["/og-image.jpg"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${fraunces.variable} ${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V15E8R1JY4"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V15E8R1JY4');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Zuri Creative Designs",
                  url: "https://zuricreativedesigns.com",
                  logo: "https://zuricreativedesigns.com/favicon.ico",
                  image: "https://zuricreativedesigns.com/og-image.jpg",
                  description:
                    "Custom web design, app development, branding, and SEO services for businesses in Kenya and worldwide.",
                },
                {
                  "@type": "LocalBusiness",
                  name: "Zuri Creative Designs",
                  description:
                    "A Kenyan web and software design business delivering websites, apps, branding and SEO services.",
                  url: "https://zuricreativedesigns.com",
                  telephone: "+254797538155",
                  email: "hello@zuricreativedesigns.com",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Nyahururu",
                    addressRegion: "Laikipia",
                    addressCountry: "KE",
                  },
                  image: "https://zuricreativedesigns.com/og-image.jpg",
                },
              ],
            }),
          }}
        />
        <Navbar />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
