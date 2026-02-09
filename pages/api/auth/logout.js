// POST /api/auth/logout — clear admin session

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  // TODO: clear session/token
  return res.status(501).json({ message: 'Not implemented' });
}
