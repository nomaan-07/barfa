import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yseozmctkahaaxecwmyn.supabase.co",
        pathname: "/storage/v1/object/public/barfa-products/**",
      },
    ],
  },
};

export default nextConfig;
