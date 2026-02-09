// GET  /api/experiences — list all experiences (public)
// POST /api/experiences — create experience (admin only)

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      // TODO: fetch experiences from database
      return res.status(200).json({ experiences: [] });

    case 'POST':
      // TODO: authenticate admin, validate body, create experience
      return res.status(501).json({ message: 'Not implemented' });

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
