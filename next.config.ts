import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  agentRules: false,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  async redirects() {
    // Redirect `source` matching is case-sensitive, so the common
    // capitalisations of the founder alias are listed explicitly.
    return [
      ...["AdrianG", "adriang", "adrianG", "ADRIANG"].map((slug) => ({
        source: `/about/${slug}`,
        destination: "/about/ceo",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
