import withNetlify from "@netlify/next";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withNetlify()(nextConfig);
