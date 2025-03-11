/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    // You can add Sass-specific options here
  },
  images: {
    domains: [],
    // Set the maximum allowed image dimensions
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Set the image quality (0-100)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  // Add custom headers for security
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  // Configure redirects if needed
  async redirects() {
    return [
      // Example redirect - adjust as needed for your site
      {
        source: '/weddings',
        destination: '/pricing',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;