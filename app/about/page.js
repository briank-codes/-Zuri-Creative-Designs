import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';
import FounderModal from '../components/FounderModal';
import Footer from '../components/Footer';
import brianPhoto from '../../public/about/brian.jpg';

export default function About() {
  return (
    <main>
      <section className="container about2-section">
        <div className="about2-grid">

          <div className="about2-photo-col">
            <div className="about2-photo-block">
              <Image
                src={brianPhoto}
                alt="Brian Korir, Founder of Zuri Creative Designs"
                className="about2-photo"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                priority
              />
            </div>
            <span className="about2-location-chip">📍 Nyahururu, Kenya</span>
          </div>

          <div className="about2-content-col">
            <span className="about2-eyebrow">About Zuri Creative Designs</span>
            <h1 className="about2-heading">We Create Websites That Help Businesses Grow</h1>

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

            <h2 className="about2-subheading">Why Choose Us?</h2>
            <ul className="about2-list">
              <li>Custom Website Development</li>
              <li>Responsive Design for All Devices</li>
              <li>Modern UI/UX Design</li>
              <li>Fast &amp; Secure Websites</li>
              <li>Ongoing Support &amp; Maintenance</li>
            </ul>

            <p className="about2-quote">&quot;Your vision. Our creativity. Digital excellence.&quot;</p>

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
