// const glob = require("glob");
// const entryPath = `src/content`;
// const dropsPath = `/drops`;

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  //   exportPathMap: async function () {
  //     const routes = {
  //       "/": { page: "/" },
  //       "/drops": { page: "/drops" },
  //     };

  //     const drops = glob.sync(`${entryPath}${dropsPath}/**/*.md`);
  //     const dropsSlugs = drops.map((file) =>
  //       file.replace(`${entryPath}${dropsPath}/`, "").replace(`.md`, "")
  //     );
  //     dropsSlugs.forEach((slug) => {
  //       routes[`/drops/${slug}`] = { page: "/drops/[slug]", query: { slug } };
  //     });

  //     return routes;
  //   },
};
