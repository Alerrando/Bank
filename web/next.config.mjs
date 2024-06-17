/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        customKey: process.env.MODed || "development",
    }
};

export default nextConfig;
