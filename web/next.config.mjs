/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: process.env.MODE || "development",
  },
};

export default nextConfig;
