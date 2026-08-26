import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../components/Footer';
import ServiceCard from './ServiceCard';
import webDevImg from '../../public/services/web-development.jpg';
import mobileDevImg from '../../public/services/application-development.jpg';
import brandingImg from '../../public/services/branding.jpg';
import seoImg from '../../public/services/seo.jpg';
import ecommerceImg from '../../public/services/e-commerce.jpg';
import uiuxImg from '../../public/services/ui-ux-design.jpg';

export const metadata = {
  title: "Our Services",
  description:
    "Full-stack web development, mobile app development, branding, SEO, and WiFi billing systems — tailored solutions from Zuri Creative Designs.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Zuri Creative Designs",
    description:
      "Web development, mobile apps, branding, SEO, and WiFi billing systems for growing businesses.",
    url: "https://zuricreativedesigns.com/services",
    type: "website",
  },
};

export default function Services() {
  return (
    <main>
      {/* SERVICES HERO */}
      <ScrollReveal>
        <section className="container about-hero">
          <p className="about-eyebrow">What We Offer</p>
          <h1 className="about-heading">
            Full-stack digital services, built around what your business actually needs.
          </h1>
        </section>
      </ScrollReveal>

      {/* SERVICE DETAIL BLOCKS */}
      <section className="container services-detail">
        <ScrollReveal>
          <ServiceCard
            title="Web Development"
            image={webDevImg}
            intro="I build fast, custom websites and web apps from scratch—no clunky templates that slow down your business. Whether you need a crisp landing page or a full web platform with logins and payments, it’s built to run smoothly."
            highlight="Fast custom sites that capture leads and trigger instant alerts."
            what="I build fast, custom websites and web apps from scratch—no clunky templates that slow down your business. Whether you need a crisp landing page or a full web platform with logins and payments, it’s built to run smoothly."
            howClients={[
              'When a website loads instantly and looks sharp, people stick around.',
              'I place clear, easy contact buttons and modern quote forms right where visitors look first.',
              'This turns casual visitors into real inquiries before they leave.',
            ]}
            howFollowUp={[
              'Every inquiry automatically lands in a dashboard or drops directly to your email and phone as an instant alert.',
              'When a customer pays via M-Pesa or card, the system sends an instant SMS confirmation.',
              'A follow-up message with next steps keeps the lead warm.',
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceCard
            title="Mobile Apps"
            image={mobileDevImg}
            intro="I build mobile apps that run smoothly on both Android and iPhones using a single codebase. This keeps your development costs lower without compromising on quality or performance."
            highlight="Android/iOS apps with push notifications to bring users back."
            what="I build mobile apps that run smoothly on both Android and iPhones using a single codebase. This keeps your development costs lower without compromising on quality or performance."
            howClients={[
              'Having an app in the Google Play Store and Apple App Store puts your business right in front of users who prefer doing everything on their phones.',
              'Fast sign-ups via Google or phone numbers make getting started effortless.',
            ]}
            howFollowUp={[
              'Apps give you a direct line to your customer’s pocket.',
              'You can send push notifications about special offers, restocks, or updates right to their home screens.',
              'In-app messaging lets you answer questions instantly and close sales.',
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceCard
            title="Branding & Visual Identity"
            image={brandingImg}
            intro="I design unique logos, select color schemes, and create complete visual styles that make your business look polished—whether on a phone screen, a social media poster, or a street signboard."
            highlight="Standout visual identity that builds trust and boosts recognition."
            what="I design unique logos, select color schemes, and create complete visual styles that make your business look polished—whether on a phone screen, a social media poster, or a street signboard."
            howClients={[
              'People buy from businesses they trust.',
              'Professional, consistent branding makes a business look established and reliable from day one.',
              'It gives potential clients the confidence to choose you over competitors.',
            ]}
            howFollowUp={[
              'I give you ready-to-use templates for email updates, WhatsApp catalogs, and digital invoices.',
              'Every time you check in with a past customer or send a receipt, your business looks unified.',
              'That keeps your brand memorable and professional.',
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceCard
            title="Search Engine Optimization (SEO)"
            image={seoImg}
            intro="I optimize your website’s backend and content so Google actually finds it and ranks it at the top when people search for what you offer."
            highlight="Top Google rankings for local buyers with smart visitor retargeting."
            what="I optimize your website’s backend and content so Google actually finds it and ranks it at the top when people search for what you offer."
            howClients={[
              'Instead of chasing customers with ads, SEO brings ready-to-buy clients directly to you.',
              'When people search for local services in your area, your website shows up right when they need you most.',
            ]}
            howFollowUp={[
              'We set up smart tracking so if someone visits your site but doesn’t buy right away, you can show them follow-up ads on social media.',
              'We can capture their email or phone number with a free download or quick quote.',
              'That triggers automatic follow-up messages that build trust over time.',
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceCard
            title="E-Commerce Platforms"
            image={ecommerceImg}
            intro="I set up clean online stores that make buying easy, complete with M-Pesa checkout, order tracking, and simple inventory management."
            highlight="Easy M-Pesa stores with automated WhatsApp abandoned cart recovery."
            what="I set up clean online stores that make buying easy, complete with M-Pesa checkout, order tracking, and simple inventory management."
            howClients={[
              'The easier it is to buy, the more people buy.',
              'I create quick, mobile-friendly shopping flows and direct buy links you can share on WhatsApp, Instagram, or TikTok.',
            ]}
            howFollowUp={[
              'If someone leaves items in their cart without paying, the system can send a quick WhatsApp or SMS reminder with a link to complete the order.',
              'After a purchase, automated tracking messages keep them informed.',
              'Scheduled post-delivery texts ask for reviews or suggest related products.',
            ]}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ServiceCard
            title="UI/UX Design"
            image={uiuxImg}
            intro="I design app and website layouts around how actual human beings think and click. It’s not just about making things look pretty—it’s about making them clear and simple to use."
            highlight="Intuitive layouts that double conversions and keep clients engaged."
            what="I design app and website layouts around how actual human beings think and click. It’s not just about making things look pretty—it’s about making them clear and simple to use."
            howClients={[
              'When a site is easy to navigate and simple to understand, visitors don’t get frustrated and leave.',
              'Clear layouts guide users straight to the Buy Now or Contact Us buttons without confusion.',
            ]}
            howFollowUp={[
              'I build intuitive feedback prompts and account hubs directly into the design.',
              'Customers can easily check order status, review their history, or reach out to support.',
              'That gives them a reason to keep coming back.',
            ]}
          />
        </ScrollReveal>
      </section>

      {/* PROCESS */}
      <ScrollReveal>
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
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="container services-cta">
          <h2>Not sure which service you need?</h2>
          <p>Tell us about your project and we&apos;ll recommend the right approach.</p>
          <Link href="/#contact" className="cta-button">Get in touch</Link>
        </section>
      </ScrollReveal>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>

    </main>
  )
}
