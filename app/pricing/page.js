import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';

export const metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for web development, mobile apps, and branding from Zuri Creative Designs — Kenyan Shilling packages built for businesses of every size.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Zuri Creative Designs",
    description:
      "Website, app, and branding packages with clear pricing in KES.",
    url: "https://zuricreativedesigns.com/pricing",
    type: "website",
  },
};

export default function Pricing() {
  return (
    <main>
      {/* PRICING HERO */}
      <section className="container about-hero">
        <p className="about-eyebrow">Pricing</p>
        <h1 className="about-heading">
          Straightforward pricing, no surprises.
        </h1>
      </section>

      <section className="container pricing-page" style={{ paddingBottom: '5rem' }}>

        {/* ── WEBSITE DEVELOPMENT ─────────────────────────────────────── */}
        <ScrollReveal>
          <div className="pricing-group">
            <div className="pricing-group-header">
              <h2>Website Development</h2>
              <p>From a simple business site to a fully custom portal.</p>
            </div>

            <div className="pricing-grid">
              <div className="pricing-card">
                <p className="pricing-card-title">Starter Business Site</p>
                <div className="pricing-card-price">
                  Ksh 20,000
                  <span>One-time</span>
                </div>
                <ul className="pricing-features">
                  <li>3 to 5 Pages</li>
                  <li>Mobile Responsive</li>
                  <li>Basic SEO Setup</li>
                </ul>
                <Link href="/#contact" className="pricing-card-cta">Get Started</Link>
              </div>

              <div className="pricing-card pricing-card-featured">
                <span className="pricing-badge">Most Popular</span>
                <p className="pricing-card-title">E-commerce / Shop</p>
                <div className="pricing-card-price">
                  From Ksh 60,000
                </div>
                <ul className="pricing-features">
                  <li>Unlimited Products</li>
                  <li>M-Pesa Integration</li>
                  <li>Inventory System</li>
                </ul>
                <Link href="/#contact" className="pricing-card-cta">Build My Shop</Link>
              </div>

              <div className="pricing-card">
                <p className="pricing-card-title">Custom Corporate Portal</p>
                <div className="pricing-card-price">
                  Contact for Quote
                </div>
                <ul className="pricing-features">
                  <li>Bespoke Design</li>
                  <li>Advanced Security</li>
                  <li>API Integration</li>
                </ul>
                <Link href="/#contact" className="pricing-card-cta">Schedule Call</Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── MOBILE APP DEVELOPMENT ──────────────────────────────────── */}
        <ScrollReveal>
          <div className="pricing-group">
            <div className="pricing-group-header">
              <h2>Mobile App Development</h2>
              <p>Apps vary in complexity — pricing scales with features and platforms.</p>
            </div>

            <div className="pricing-grid">
              <div className="pricing-card">
                <p className="pricing-card-title">MVP / Prototype App</p>
                <div className="pricing-card-price">
                  From Ksh 150,000
                </div>
                <ul className="pricing-features">
                  <li>Single Platform (Android)</li>
                  <li>Core Features Only</li>
                  <li>Basic UI Design</li>
                </ul>
                <Link href="/#contact" className="pricing-card-cta">Launch MVP</Link>
              </div>

              <div className="pricing-card pricing-card-featured">
                <span className="pricing-badge">Best Value</span>
                <p className="pricing-card-title">Full Cross-Platform App</p>
                <div className="pricing-card-price">
                  From Ksh 350,000
                </div>
                <ul className="pricing-features">
                  <li>Both iOS &amp; Android</li>
                  <li>Backend Server Setup</li>
                  <li>Admin Dashboard</li>
                </ul>
                <Link href="/#contact" className="pricing-card-cta">Request Blueprint</Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── BRANDING & GRAPHIC DESIGN ───────────────────────────────── */}
        <ScrollReveal>
          <div className="pricing-group" style={{ marginBottom: 0 }}>
            <div className="pricing-group-header">
              <h2>Branding &amp; Graphic Design</h2>
              <p>Clear asset deliverables so you know exactly what you&apos;re getting.</p>
            </div>

            <div className="pricing-grid">
              <div className="pricing-card">
                <p className="pricing-card-title">Identity Essentials</p>
                <div className="pricing-card-price">
                  Ksh 15,000
                </div>
                <ul className="pricing-features">
                  <li>Main Logo Design</li>
                  <li>Typography &amp; Colors</li>
                  <li>Business Card Layout</li>
                </ul>
                <Link href="/#contact" className="pricing-card-cta">Order Package</Link>
              </div>

              <div className="pricing-card pricing-card-featured">
                <span className="pricing-badge">Most Popular</span>
                <p className="pricing-card-title">Complete Brand Suite</p>
                <div className="pricing-card-price">
                  Ksh 40,000
                </div>
                <ul className="pricing-features">
                  <li>Full Brand Guidelines</li>
                  <li>Social Media Kits</li>
                  <li>Letterheads &amp; Invoices</li>
                  <li>Marketing Flyers</li>
                </ul>
                <Link href="/#contact" className="pricing-card-cta">Transform My Brand</Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <p className="pricing-note">
          All prices are in Kenyan Shillings (KES). &quot;From&quot; pricing reflects the typical starting
          scope — final cost depends on your specific features and requirements. Get in touch for a
          free, no-obligation quote.
        </p>
      </section>

      {/* CTA */}
      <section className="container services-cta">
        <h2>Not sure which package fits?</h2>
        <p>Tell us about your project and we&apos;ll recommend the right one.</p>
        <Link href="/#contact" className="cta-button">Get a Free Quote</Link>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>

    </main>
  );
}
