// auth.js
import NextAuth from 'next-auth';
import { authConfig } from '../auth.config'; // Import the safe config
import Credentials from 'next-auth/providers/credentials';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        if (!prisma) return null;

        const user = await prisma.adminUser.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) return null;

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
});

// Helper: get the current session (App Router compatible)
export async function getSession() {
  return await auth();
}

// Helper: require auth or return a 401 NextResponse
export async function requireAuth() {
  const session = await auth();
  if (!session) return null;
  return session;
}