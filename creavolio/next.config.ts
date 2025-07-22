import netlify from "@netlify/next";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  ...netlify,
};

export default nextConfig;
