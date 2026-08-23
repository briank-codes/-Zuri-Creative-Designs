export default function sitemap() {
  const baseUrl = "https://zuricreativedesigns.com";

  // Update a route's date here only when that page's content actually
  // changes — don't bump them all just because you redeployed.
  const routes = [
    { path: "", lastModified: "2026-08-11" },
    { path: "/about", lastModified: "2026-08-11" },
    { path: "/services", lastModified: "2026-08-11" },
    { path: "/pricing", lastModified: "2026-08-11" },
    { path: "/work", lastModified: "2026-08-11" },
    { path: "/contact", lastModified: "2026-08-11" },
    { path: "/faq", lastModified: "2026-08-11" },
    { path: "/privacy", lastModified: "2026-08-11" },
    { path: "/terms", lastModified: "2026-08-11" },
  ];

  return routes.map(({ path, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
