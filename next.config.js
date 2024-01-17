/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  // ... other configurations
  async redirects() {
    return [
      {
        source: "/pdf.worker.js",
        destination: "/_next/static/pdf.worker.js",
        permanent: true,
      },
    ];
  },
};
