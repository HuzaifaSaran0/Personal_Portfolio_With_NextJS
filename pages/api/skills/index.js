// GET  /api/skills — list all skills (public)
// POST /api/skills — create skill (admin only)

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      // TODO: fetch skills from database
      return res.status(200).json({ skills: [] });

    case 'POST':
      // TODO: authenticate admin, validate body, create skill
      return res.status(501).json({ message: 'Not implemented' });

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
