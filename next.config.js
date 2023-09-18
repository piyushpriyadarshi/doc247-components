/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["unsplash.com"],
  },
  assetPrefix: "https://planetschool.b-cdn.net",
};

module.exports = nextConfig;
