export default function Head() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-V15E8R1JY4"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V15E8R1JY4');
          `,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Zuri Creative Designs",
                  "url": "https://zuricreativedesigns.com",
                  "logo": "https://zuricreativedesigns.com/favicon.ico",
                  "image": "https://zuricreativedesigns.com/og-image.jpg",
                  "description": "Custom web design, app development, branding, and SEO services for businesses in Kenya and worldwide."
                },
                {
                  "@type": "LocalBusiness",
                  "name": "Zuri Creative Designs",
                  "description": "A Kenyan web and software design business delivering websites, apps, branding and SEO services.",
                  "url": "https://zuricreativedesigns.com",
                  "telephone": "+254797538155",
                  "email": "zuricreativedesigns@gmail.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Nyahururu",
                    "addressRegion": "Nakuru",
                    "addressCountry": "KE"
                  },
                  "image": "https://zuricreativedesigns.com/og-image.jpg"
                }
              ]
            }
          `,
        }}
      />
    </>
  );
}
