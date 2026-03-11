/** @type {import('next').NextConfig} */
const nextConfig = {
  /* This is the critical fix for Prisma 7 + Next.js 16 */
  serverExternalPackages: ['@prisma/client', 'pg'],
};

export default nextConfig;