import Link from 'next/link';
import FaqAccordion from "./FaqAccordion";
import { FAQ_ITEMS } from "./faqData";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about working with Zuri Creative Designs — pricing, process, timelines, and support.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Zuri Creative Designs",
    description:
      "Common questions about our web design and development services, answered.",
    url: "https://zuricreativedesigns.com/faq",
    type: "website",
  },
};

export default function FAQ() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* FAQ HERO */}
      <section className="container about-hero">
        <p className="about-eyebrow">Got Questions?</p>
        <h1 className="about-heading">
          Frequently asked questions
        </h1>
      </section>

      {/* FAQ LIST */}
      <section className="container faq-section">
        <FaqAccordion />
      </section>

      {/* CTA */}
      <section className="container services-cta">
        <h2>Still have questions?</h2>
        <p>Reach out and we&apos;ll get back to you directly.</p>
        <Link href="/#contact" className="cta-button">Get in touch</Link>
      </section>
    </main>
  );
}
