// middleware.js
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

const { auth } = NextAuth(authConfig);

export default auth;

export const config = {
  // Only run middleware on admin routes (not public pages or API routes)
  matcher: ['/admin/:path*'],
};