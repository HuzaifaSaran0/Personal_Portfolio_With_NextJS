// middleware.js
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // Only run middleware on admin routes (not public pages or API routes)
  matcher: ['/admin/:path*'],
};