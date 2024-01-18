// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      reactRoot: true,
      concurrentFeatures: true,
      clientComponents: ["./src/app/info/page.tsx"],
    },
  };
  
  module.exports = nextConfig;
  