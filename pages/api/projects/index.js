// GET  /api/projects — list published projects (public)
// POST /api/projects — create project (admin only)

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      // TODO: fetch published projects from database
      return res.status(200).json({ projects: [] });

    case 'POST':
      // TODO: authenticate admin, validate body, create project
      return res.status(501).json({ message: 'Not implemented' });

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
