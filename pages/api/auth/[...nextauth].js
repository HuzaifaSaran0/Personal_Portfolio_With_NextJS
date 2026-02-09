import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../lib/prisma';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Admin Login',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.adminUser.findUnique({
          where: { email: credentials.email },
        });

        if (!user) return null;

        // In production, use bcrypt.compare(credentials.password, user.password)
        const isValid = credentials.password === user.password;
        if (!isValid) return null;

        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/admin/login' },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
