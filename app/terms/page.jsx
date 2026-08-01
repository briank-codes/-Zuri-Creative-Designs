export const metadata = {
  title: "Terms of Service | Zuri Creative Designs",
  description: "The terms governing web development, mobile app, branding, and SEO projects undertaken by Zuri Creative Designs.",
};

export default function Terms() {
  return (
    <main>
      <section className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '820px' }}>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
          Terms of Service
        </h1>
        <p style={{ color: 'var(--color-muted)', marginBottom: '2.5rem' }}>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div style={{ color: 'var(--color-text)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '1.5rem' }}>
            These terms govern any project undertaken by Zuri Creative Designs (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) for a
            client (&quot;you&quot;). By engaging our services, you agree to the terms below.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>Services</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We provide web development, mobile app development, branding, SEO, and related digital
            services as agreed in a written proposal or quote for each project.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>Project process</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Each project follows a discovery call, planning, design, development, review, and launch
            process, as outlined on our website. Timelines and deliverables are confirmed in the project
            proposal before work begins.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>Payment</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Pricing and payment schedules are agreed upon per project and confirmed in writing before work
            begins. Work commences once the agreed deposit has been received.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>Revisions</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Each project includes an agreed number of revision rounds. Additional revisions beyond what
            was scoped may incur extra charges.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>Ownership</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Upon full payment, ownership of the final deliverables (website, app, or design files) transfers
            to you. We retain the right to display completed work in our portfolio unless otherwise agreed.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>Support</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Post-launch support is provided as agreed per project. Ongoing maintenance beyond the agreed
            period can be arranged separately.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>Limitation of liability</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            We aim to deliver reliable, well-tested work but are not liable for indirect losses arising from
            third-party services (hosting providers, payment gateways, domain registrars) integrated into
            your project.
          </p>

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>Contact</h2>
          <p>
            Questions about these terms? Reach us at{' '}
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
