import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import primehubImg from '../../public/portfolio/primehub.jpeg';
import manyattaImg from '../../public/portfolio/manyatta-grill.jpeg';
import wildfireImg from '../../public/portfolio/wildfire.jpeg';
import smartShambaImg from '../../public/portfolio/smart-shamba.jpeg';
import pesayanguImg from '../../public/portfolio/pesayangu-app.jpeg';

export const metadata = {
  title: "Our Work",
  description:
    "Explore recent web design and software projects delivered by Zuri Creative Designs for clients in Kenya and abroad.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work | Zuri Creative Designs",
    description:
      "A showcase of websites and software built by Zuri Creative Designs.",
    url: "https://zuricreativedesigns.com/work",
    type: "website",
  },
};

export default function Work() {
  return (
    <main>
      {/* WORK HERO */}
      <section className="container about-hero">
        <p className="about-eyebrow">Our Work</p>
        <h1 className="about-heading">
          Projects, built for various businesses.
        </h1>
      </section>

   {/* PORTFOLIO GRID */}
      <section className="container portfolio-section">
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <Image src={primehubImg} alt="PrimeHub Properties" className="portfolio-image" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <div className="portfolio-content">
              <span className="portfolio-tag">Real Estate</span>
              <h2>PrimeHub Properties</h2>
              <p>A real estate marketplace with stunning  properties visuals, and a mortgage calculator.</p>
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

          <div className="portfolio-card">
            <Image src={smartShambaImg} alt="Smart Shamba AI" className="portfolio-image" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <div className="portfolio-content">
              <span className="portfolio-tag">AgriTech</span>
              <h2>Smart Shamba AI</h2>
              <p>An AI-powered farming assistant with crop advice, disease detection, weather insights, and market prices.</p>
              <span className="portfolio-link portfolio-link-disabled" aria-disabled="true">
                Coming Soon
              </span>
            </div>
          </div>

          <div className="portfolio-card">
            <Image src={pesayanguImg} alt="PesaYangu" className="portfolio-image" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <div className="portfolio-content">
              <span className="portfolio-tag">FinTech</span>
              <h2>PesaYangu</h2>
              <p>A personal finance app to help users track spending, set budgets, and build better money habits.</p>
              <span className="portfolio-link portfolio-link-disabled" aria-disabled="true">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container services-cta">
        <h2>Want a project like these?</h2>
        <p>Let&apos;s talk about what you&apos;re building.</p>
        <Link href="/#contact" className="cta-button">Start a Project</Link>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>

    </main>
  )
}
