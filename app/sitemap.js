export default function sitemap() {
  const baseUrl = "https://zuricreativedesigns.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/work",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
