/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.alihoushangi.ir",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 100000,
  outDir: "./public",
  additionalPaths: async (config) => [
    await config.transform(config, "/custom-page"),
  ],
  exclude: ["/admin/*", "/login"],
};
