/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Built as plain HTML into `out/` and served by nginx (Coolify static site).
  output: "export",
  images: { unoptimized: true }
};

export default nextConfig;
