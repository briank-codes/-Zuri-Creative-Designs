import { Code2, Smartphone, PenTool, Tag, ShoppingCart, TrendingUp, Target, Users, Clock, Lightbulb, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './components/ScrollReveal';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import zuriPhoto from '../public/zuri.jpeg';
import designsPhoto from '../public/designs.jpeg';

export default function Home() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="container" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="hero-grid">
          <div>
            <p className="hero-eyebrow">We design. We build. We grow brands.</p>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)' }}>
              Ideas that inspire.<br />Designs that deliver.
            </h1>

            <div className="section-divider" />

            <p className="hero-subtext">
              We build powerful websites and apps that help brands grow, engage and scale.
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
              { icon: Code2, title: 'Web Development', desc: 'Fast, responsive and modern websites that drive results.' },
              { icon: Smartphone, title: 'App Development', desc: 'Custom mobile apps for iOS & Android that scale.' },
              { icon: PenTool, title: 'UI/UX Design', desc: 'Beautiful and intuitive designs that create amazing experiences.' },
              { icon: Tag, title: 'Branding', desc: 'Strong brand identity that connects and leaves a lasting mark.' },
              { icon: ShoppingCart, title: 'E-commerce', desc: 'Online stores that convert visitors into loyal customers.' },
              { icon: TrendingUp, title: 'SEO & Marketing', desc: 'Smart strategies to increase visibility and drive real growth.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="service-card">
                <div className="service-icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div style={{ marginTop: '1rem', fontWeight: 700 }}>→</div>
              </div>
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
