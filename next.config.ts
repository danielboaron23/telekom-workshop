import type { NextConfig } from "next";

/* GITHUB_PAGES=1 → static export served from https://<user>.github.io/telekom-workshop/ */
const isPages = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = {
  devIndicators: false,
  ...(isPages && {
    output: "export" as const,
    basePath: "/telekom-workshop",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
