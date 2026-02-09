import { getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]';

export async function getSession(req, res) {
  return getServerSession(req, res, authOptions);
}

export async function requireAuth(req, res) {
  const session = await getSession(req, res);
  if (!session) {
    res.status(401).json({ message: 'Unauthorized' });
    return null;
  }
  return session;
}
