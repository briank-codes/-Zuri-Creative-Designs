import Image from 'next/image';
import { Code2, Smartphone, ShieldCheck, LifeBuoy } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FounderModal from '../components/FounderModal';
import Footer from '../components/Footer';
import brianPhoto from '../../public/about/brian.jpg';

export const metadata = {
  title: "About Us",
  description:
    "Learn about Zuri Creative Designs — a Kenya-based web design and software development agency helping local and international businesses build a strong digital presence.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Zuri Creative Designs",
    description:
      "The team and story behind Zuri Creative Designs, a web design agency based in Nyahururu, Kenya.",
    url: "https://zuricreativedesigns.com/about",
    type: "website",
  },
};

export default function About() {
  return (
    <main>
      <section className="container about2-section">
        <div className="about2-grid">

          <div className="about2-photo-col">
            <div className="about2-photo-block frame-marks">
              <Image
                src={brianPhoto}
                alt="Brian Korir, Founder of Zuri Creative Designs"
                className="about2-photo"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                priority
              />
              <span className="frame-corner frame-corner-tl" />
              <span className="frame-corner frame-corner-tr" />
              <span className="frame-corner frame-corner-bl" />
              <span className="frame-corner frame-corner-br" />
            </div>
            <span className="about2-location-chip">📍 Nyahururu, Kenya</span>
          </div>

          <div className="about2-content-col">
            <span className="about2-eyebrow">About Zuri Creative Designs</span>
            <h1 className="about2-heading">We Create Websites That Help Businesses Grow</h1>
            <p className="mono-meta" style={{ marginTop: '0.2rem' }}>
              <span className="mono-meta-dot" />
              SELF-TAUGHT DEVELOPER — SHIPPING SINCE 2026
            </p>

            <p className="about2-text">
              At Zuri Creative Designs, we build modern websites and web applications that are
              fast, responsive, and designed to help businesses establish a strong online
              presence. From startups to established brands, we create digital experiences that
              combine beautiful design with reliable functionality.
            </p>

            <p className="about2-text">
              Founded by Brian Korir, Zuri Creative Designs is committed to delivering
              high-quality solutions tailored to each client&apos;s goals. We believe every business
              deserves a professional website that builds trust, attracts customers, and
              supports long-term growth.
            </p>

            <blockquote className="about2-quote-large">
              &quot;Your vision. Our creativity. Digital excellence.&quot;
            </blockquote>

            <h2 className="about2-subheading">Why Choose Us?</h2>
            <div className="about2-feature-grid">
              <div className="about2-feature-item">
                <div className="about2-feature-icon"><Code2 size={17} /></div>
                <div>
                  <h3>Custom-Coded</h3>
                  <p>No page builders or templates — every site is built from scratch.</p>
                </div>
              </div>
              <div className="about2-feature-item">
                <div className="about2-feature-icon"><Smartphone size={17} /></div>
                <div>
                  <h3>Responsive by Default</h3>
                  <p>Designed mobile-first, tested across real devices before launch.</p>
                </div>
              </div>
              <div className="about2-feature-item">
                <div className="about2-feature-icon"><ShieldCheck size={17} /></div>
                <div>
                  <h3>Fast &amp; Secure</h3>
                  <p>Modern hosting, clean code, and security best practices baked in.</p>
                </div>
              </div>
              <div className="about2-feature-item">
                <div className="about2-feature-icon"><LifeBuoy size={17} /></div>
                <div>
                  <h3>Ongoing Support</h3>
                  <p>I stay reachable after launch — on WhatsApp, not a ticket queue.</p>
                </div>
              </div>
            </div>

            <div className="about2-building">
              <span className="about2-building-label">Currently building</span>
              <div className="about2-building-list">
                <span className="about2-building-chip">
                  <span className="about2-building-status" /> Smart Shamba AI
                </span>
                <span className="about2-building-chip">
                  <span className="about2-building-status" /> PesaYangu
                </span>
              </div>
            </div>

            <FounderModal />
          </div>

        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>

    </main>
  );
}
