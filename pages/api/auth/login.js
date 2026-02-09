// POST /api/auth/login — authenticate admin user

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  // TODO: validate credentials against AdminUser table, return session/token
  return res.status(501).json({ message: 'Not implemented' });
}
