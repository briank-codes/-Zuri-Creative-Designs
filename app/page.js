import { Code2, Smartphone, PenTool, Tag, ShoppingCart, TrendingUp, Target, Users, Clock, Lightbulb, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './components/ScrollReveal';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import zuriPhoto from '../public/zuri.jpeg';
import designsPhoto from '../public/designs.jpeg';
import primehubImg from '../public/portfolio/primehub.jpeg';
import manyattaImg from '../public/portfolio/manyatta-grill.jpeg';
import wildfireImg from '../public/portfolio/wildfire.jpeg';
import webDevImg from '../public/services/web-development.jpg';
import appDevImg from '../public/services/application-development.jpg';
import uiuxImg from '../public/services/ui-ux-design.jpg';
import brandingImg from '../public/services/branding.jpg';
import ecommerceImg from '../public/services/e-commerce.jpg';
import seoImg from '../public/services/seo.jpg';

export const metadata = {
  title: "Zuri Creative Designs | Web & Software Development in Kenya",
  description:
    "Zuri Creative Designs builds modern, high-performing websites and software for businesses in Kenya and worldwide. Full-stack development, mobile apps, branding, SEO, and WiFi billing systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zuri Creative Designs | Web & Software Development in Kenya",
    description:
      "Modern websites and software that help businesses grow — for clients in Kenya and worldwide.",
    url: "https://zuricreativedesigns.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="container home-hero" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="hero-grid">
          <div>
            <p className="hero-eyebrow">We design. We build. We grow brands.</p>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)' }}>
              Fast websites & apps.<br />No bloat, no templates, no excuses.
            </h1>

            <div className="section-divider" />

            <p className="hero-subtext">
              Built with whatever gets the job done right clean code, quick load times, designed to convert visitors, not just look nice.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/#services" className="btn-primary">
                Our Services <span>→</span>
              </Link>
              <Link href="/work" className="btn-outline">
                View Our Work <span>→</span>
              </Link>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <Image
              src={zuriPhoto}
              alt="Zuri Creative Designs — laptop, mug and workspace"
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* ── SERVICES WE OFFER ────────────────────────────────────────────── */}
      <ScrollReveal>
        <section id="services" className="container services-section">
          <div className="services-header" style={{ textAlign: 'center', maxWidth: '100%' }}>
            <p className="hero-eyebrow" style={{ marginBottom: '0.4rem' }}>What we do</p>
            <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.2rem)' }}>Services We Offer</h2>
            <div className="section-divider" style={{ margin: '0.8rem auto 0' }} />
          </div>

          <div className="services-grid" style={{ marginTop: '3rem' }}>
            {[
              { image: webDevImg, title: 'Web Development', desc: 'Fast, responsive and modern websites that drive results.' },
              { image: appDevImg, title: 'App Development', desc: 'Custom mobile apps for iOS & Android that scale.' },
              { image: uiuxImg, title: 'UI/UX Design', desc: 'Beautiful and intuitive designs that create amazing experiences.' },
              { image: brandingImg, title: 'Branding', desc: 'Strong brand identity that connects and leaves a lasting mark.' },
              { image: ecommerceImg, title: 'E-commerce', desc: 'Online stores that convert visitors into loyal customers.' },
              { image: seoImg, title: 'SEO & Marketing', desc: 'Smart strategies to increase visibility and drive real growth.' },
            ].map(({ image, title, desc }, i) => (
              <ScrollReveal key={title} className="service-card-reveal" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <Link href="/services" className="service-tile service-card-bg-link" style={{ backgroundImage: `url(${image.src})` }}>
                  <div className="service-card-overlay" />
                  <div className="service-card-body service-card-body-overlay">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="container why-choose-section">
          <div className="why-choose-grid">
            <div>
              <p className="hero-eyebrow">Why choose us</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2rem)', lineHeight: 1.25 }}>
                We don&apos;t just design, we create solutions.
              </h2>
              <div className="section-divider" />

              <div className="why-choose-list">
                {[
                  { icon: Target, title: 'Results Driven', desc: 'We focus on solutions that bring measurable results.' },
                  { icon: Users, title: 'Client Focused', desc: 'Your satisfaction is our top priority, always.' },
                  { icon: Clock, title: 'On Time Delivery', desc: 'We respect deadlines and deliver quality on time.' },
                  { icon: Lightbulb, title: 'Creative & Unique', desc: 'Original ideas and designs tailored to your brand.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="why-choose-item">
                    <div className="why-choose-icon">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-choose-image">
              <Image
                src={designsPhoto}
                alt="Zuri Creative Designs — branding collage"
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── FEATURED WORK ────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="container portfolio-section">
          <div className="services-header" style={{ textAlign: 'center', maxWidth: '100%' }}>
            <p className="hero-eyebrow" style={{ marginBottom: '0.4rem' }}>Recent work</p>
            <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.2rem)' }}>Projects We&apos;ve Delivered</h2>
            <div className="section-divider" style={{ margin: '0.8rem auto 0' }} />
          </div>

          <div className="portfolio-grid" style={{ marginTop: '3rem' }}>
            <div className="portfolio-card">
              <Image src={primehubImg} alt="PrimeHub Properties" className="portfolio-image" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div className="portfolio-content">
                <span className="portfolio-tag">Real Estate</span>
                <h2>PrimeHub Properties</h2>
                <p>A real estate marketplace with stunning property visuals and a mortgage calculator.</p>
                <a href="https://prime-hub-properties.vercel.app/" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                  View Project →
                </a>
              </div>
            </div>

            <div className="portfolio-card">
              <Image src={manyattaImg} alt="Manyatta Grill" className="portfolio-image" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div className="portfolio-content">
                <span className="portfolio-tag">Restaurant</span>
                <h2>Manyatta Grill</h2>
                <p>A nyama choma restaurant site with authentication, a role-based dashboard, and an animated menu.</p>
                <a href="https://manyatta-grill.vercel.app/" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                  View Project →
                </a>
              </div>
            </div>

            <div className="portfolio-card">
              <Image src={wildfireImg} alt="Wildfire Adventures" className="portfolio-image" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              <div className="portfolio-content">
                <span className="portfolio-tag">Tourism</span>
                <h2>Wildfire Adventures</h2>
                <p>A safari and beach tourism site with multi-currency and multilingual support.</p>
                <a href="https://wildfire-adventures.vercel.app/" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                  View Project →
                </a>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/work" className="btn-outline">
              View All Work <span>→</span>
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="container cta-banner-section">
          <div
            className="cta-banner"
            style={{
              background: 'linear-gradient(135deg, #0f3d26 0%, #123f28 100%)',
              color: '#fff',
            }}
          >
            <div className="cta-banner-left">
              <div
                className="cta-banner-icon"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <Send size={18} color="#fff" />
              </div>
              <div>
                <h3 style={{ color: '#fff' }}>Ready to build something amazing?</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Let&apos;s turn your ideas into powerful digital solutions.</p>
              </div>
            </div>

            <Link
              href="/#contact"
              className="cta-banner-btn"
              style={{ background: '#fff', color: '#0f3d26' }}
            >
              Let&apos;s Discuss Your Project <span>→</span>
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* ── CONTACT FORM ─────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section id="contact" className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="services-header" style={{ textAlign: 'center', maxWidth: '100%' }}>
            <p className="hero-eyebrow" style={{ marginBottom: '0.4rem' }}>Get in touch</p>
            <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.2rem)' }}>Let&apos;s Talk About Your Project</h2>
            <div className="section-divider" style={{ margin: '0.8rem auto 0' }} />
          </div>

          <ContactForm />
        </section>
      </ScrollReveal>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>

    </main>
  );
}
