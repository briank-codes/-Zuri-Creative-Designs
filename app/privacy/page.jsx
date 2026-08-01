export const metadata = {
  title: "Privacy Policy | Zuri Creative Designs",
  description: "How Zuri Creative Designs collects, uses, and protects information submitted through this website.",
};

export default function Privacy() {
  return (
    <main>
      <section className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '820px' }}>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
          Privacy Policy
        </h1>
        <p style={{ color: 'var(--color-muted)', marginBottom: '2.5rem' }}>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div style={{ color: 'var(--color-text)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Zuri Creative Designs (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy explains what
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>Information we collect</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            When you submit our contact form, we collect the name, email address, and project details you
            provide. We do not collect any information beyond what you choose to share with us.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>How we use it</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We use the information you submit solely to respond to your enquiry, discuss your project, and
            provide a quote or proposal. We do not sell, rent, or share your information with third parties
            for marketing purposes.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>Communication</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We may contact you via email or WhatsApp using the details you provide, to follow up on your
            project enquiry.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>Your rights</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            You can ask us to delete any information you&apos;ve submitted at any time by emailing{' '}
            <a href="mailto:zuricreativedesigns@gmail.com" style={{ color: 'var(--color-accent)' }}>
              zuricreativedesigns@gmail.com
            </a>.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>Changes to this policy</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We may update this policy from time to time. Changes will be posted on this page with an
            updated date.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>Contact us</h2>
          <p>
            Questions about this policy? Reach us at{' '}
            <a href="mailto:zuricreativedesigns@gmail.com" style={{ color: 'var(--color-accent)' }}>
              zuricreativedesigns@gmail.com
            </a>{' '}
            or via{' '}
            <a href="https://wa.me/254797538155" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
              WhatsApp
            </a>.
          </p>
        </div>
      </section>
    </main>
  )
}
