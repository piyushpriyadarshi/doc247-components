/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["unsplash.com"],
  },
  // assetPrefix:
  //   "https://awsomecoderscdn.sgp1.cdn.digitaloceanspaces.com/astrology-staging",
};
// nextConfig.plugins.push(
//   new webpack.ProgressPlugin((percentage, message, ...args) => {
//     // e.g. Output each progress message directly to the console:
//     console.info(percentage, message, ...args);
//   })
// );
module.exports = nextConfig;
