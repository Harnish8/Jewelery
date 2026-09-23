/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // output: "export",
  trailingSlash: true,
  images: {
    // unoptimized: true,
    qualities: [100, 75],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.grjewellers.co.in",
          },
        ],
        destination: "https://grjewellers.co.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;