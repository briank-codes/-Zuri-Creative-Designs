import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zuri Creative Designs — let's talk about your next web or software project.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Zuri Creative Designs",
    description:
      "Reach out to Zuri Creative Designs to start your next project.",
    url: "https://zuricreativedesigns.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="contact-page-header">
        <h1>Let&apos;s Build Something Together</h1>
        <p>
          Tell us about your project and we&apos;ll get back to you shortly.
        </p>
      </div>

      <ContactForm />
    </main>
  );
}
