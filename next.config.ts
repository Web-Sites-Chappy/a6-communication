import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        // Pas de "immutable" : les fichiers de /public/photos ne sont pas versionnés
        // (même nom réutilisé quand une photo est remplacée), donc un cache "immutable"
        // sur 1 an empêchait toute mise à jour de se propager — d'où d'anciennes photos
        // qui réapparaissaient selon l'appareil/le cache déjà rempli.
        source: "/photos/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600, must-revalidate" }],
      },
      {
        source: "/video/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=3600, must-revalidate" }],
      },
    ];
  },
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
