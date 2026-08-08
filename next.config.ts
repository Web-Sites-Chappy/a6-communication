import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/nos-cibles",
        destination: "/nos-clients",
        permanent: true,
      },
      {
        source: "/actualites",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/nos-services/communication-evenementielle",
        destination: "/nos-services/relations-presse",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
