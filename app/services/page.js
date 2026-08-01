import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import webDevImg from '../../public/services/web-development.png';
import mobileDevImg from '../../public/services/mobile-development.png';
import brandingImg from '../../public/services/branding.png';
import seoImg from '../../public/services/seo.png';
import ecommerceImg from '../../public/services/e-commerce.png';
import uiuxImg from '../../public/services/ui-ux-design.png';

export const metadata = {
  title: "Services | Zuri Creative Designs",
  description: "Web development, mobile apps, branding, SEO, and e-commerce solutions for businesses in Kenya and worldwide.",
};

export default function Services() {
  return (
    <main>
      {/* SERVICES HERO */}
      <section className="container about-hero">
        <p className="about-eyebrow">What We Offer</p>
        <h1 className="about-heading">
          Full-stack digital services, built around what your business actually needs.
        </h1>
      </section>

      {/* SERVICE DETAIL BLOCKS */}
      <section className="container services-detail">
        <div className="service-detail-block">
          <div className="service-detail-image-wrap">
            <Image src={webDevImg} alt="Web Development" className="service-detail-image" sizes="(max-width: 700px) 100vw, 320px" />
          </div>
          <div className="service-detail-text">
            <span className="portfolio-tag">01</span>
            <h2>Web Development</h2>
            <p>
              Fast, modern websites and web apps built with Next.js — from simple landing pages to full platforms with logins, dashboards, and payments.
            </p>
            <ul>
              <li>Custom-coded, not template-based</li>
              <li>M-Pesa and payment integration</li>
              <li>Deployed on fast, reliable hosting</li>
            </ul>
          </div>
        </div>

        <div className="service-detail-block">
          <div className="service-detail-image-wrap">
            <Image src={mobileDevImg} alt="Mobile Apps" className="service-detail-image" sizes="(max-width: 700px) 100vw, 320px" />
          </div>
          <div className="service-detail-text">
            <span className="portfolio-tag">02</span>
            <h2>Mobile Apps</h2>
            <p>
              Cross-platform mobile apps that work smoothly on both Android and iOS, built from a single codebase to keep costs down without cutting quality.
            </p>
            <ul>
              <li>Android and iOS from one build</li>
              <li>Offline-friendly where it matters</li>
              <li>Connected to your existing backend</li>
            </ul>
          </div>
        </div>

        <div className="service-detail-block">
          <div className="service-detail-image-wrap">
            <Image src={brandingImg} alt="Branding" className="service-detail-image" sizes="(max-width: 700px) 100vw, 320px" />
          </div>
          <div className="service-detail-text">
            <span className="portfolio-tag">03</span>
            <h2>Branding</h2>
            <p>
              Logos, color systems, and visual identity that make your business memorable — designed to work as well on a phone screen as on a signboard.
            </p>
            <ul>
              <li>Logo design and variations</li>
              <li>Color palette and typography system</li>
              <li>Brand guidelines document</li>
            </ul>
          </div>
        </div>

        <div className="service-detail-block">
          <div className="service-detail-image-wrap">
            <Image src={seoImg} alt="SEO" className="service-detail-image" sizes="(max-width: 700px) 100vw, 320px" />
          </div>
          <div className="service-detail-text">
            <span className="portfolio-tag">04</span>
            <h2>SEO</h2>
            <p>
              Get found on Google — technical SEO foundations plus content strategy that brings the right visitors to your site, not just any traffic.
            </p>
            <ul>
              <li>On-page and technical SEO setup</li>
              <li>Local SEO for Kenyan searches</li>
              <li>Ongoing content recommendations</li>
            </ul>
          </div>
        </div>

        <div className="service-detail-block">
          <div className="service-detail-image-wrap">
            <Image src={ecommerceImg} alt="E-Commerce" className="service-detail-image" sizes="(max-width: 700px) 100vw, 320px" />
          </div>
          <div className="service-detail-text">
            <span className="portfolio-tag">05</span>
            <h2>E-Commerce</h2>
            <p>
              Online stores built to actually convert — with M-Pesa checkout, WhatsApp order notifications, and a simple system to manage products.
            </p>
            <ul>
              <li>M-Pesa and card checkout</li>
              <li>Inventory and order management</li>
              <li>Mobile-first shopping experience</li>
            </ul>
          </div>
        </div>

        <div className="service-detail-block">
          <div className="service-detail-image-wrap">
            <Image src={uiuxImg} alt="UI/UX Design" className="service-detail-image" sizes="(max-width: 700px) 100vw, 320px" />
          </div>
          <div className="service-detail-text">
            <span className="portfolio-tag">06</span>
            <h2>UI/UX Design</h2>
            <p>
              Clean, intuitive interfaces designed around how your users actually think and behave — not just what looks good in a mockup.
            </p>
            <ul>
              <li>Wireframes and prototypes</li>
              <li>User flow and usability focus</li>
              <li>Design systems for consistency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container process-section">
        <div className="process-header">
          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)' }}>My Process</h2>
          <p className="process-intro">
            From our first conversation to the final launch, I follow a clear and collaborative process to ensure your website is delivered on time, reflects your brand, and achieves your business goals.
          </p>
        </div>

        <div className="process-list">
          <div className="process-step">
            <div className="process-number">01</div>
            <div>
              <h3>Discovery Call</h3>
              <p>We start with a Google Meet to discuss your business, goals, target audience, and website requirements.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="process-number">02</div>
            <div>
              <h3>Planning</h3>
              <p>You&apos;ll complete a short questionnaire, and I&apos;ll create a project plan, timeline, and proposal tailored to your needs.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="process-number">03</div>
            <div>
              <h3>Design</h3>
              <p>I design a modern, user-friendly interface that reflects your brand and goals.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="process-number">04</div>
            <div>
              <h3>Development</h3>
              <p>I build a fast, responsive, and SEO-friendly website using modern web technologies.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="process-number">05</div>
            <div>
              <h3>Review &amp; Revisions</h3>
              <p>You&apos;ll review the website and request revisions to ensure it meets your expectations.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="process-number">06</div>
            <div>
              <h3>Launch</h3>
              <p>Once approved, I deploy your website and connect your domain.</p>
            </div>
          </div>

          <div className="process-step">
            <div className="process-number">07</div>
            <div>
              <h3>Support</h3>
              <p>I provide post-launch support and guidance to keep your website running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container services-cta">
        <h2>Not sure which service you need?</h2>
        <p>Tell us about your project and we&apos;ll recommend the right approach.</p>
        <Link href="/#contact" className="cta-button">Get in touch</Link>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>

    </main>
  )
}
