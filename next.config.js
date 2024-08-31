const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin('./lib/i18n/i18n.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = withNextIntl(nextConfig);
