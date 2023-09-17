/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["unsplash.com"],
  },
  // assetPrefix:
  //   "https://awsomecoderscdn.sgp1.cdn.digitaloceanspaces.com/astrology-staging",
};

module.exports = nextConfig;
