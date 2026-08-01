import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppFloat from "./components/WhatsAppFloat";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuri Creative Designs | Web & Software Development",
    description:
      "We build modern websites and software that help businesses grow — for clients in Kenya and worldwide.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png", // uncomment once this exists in /public
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
