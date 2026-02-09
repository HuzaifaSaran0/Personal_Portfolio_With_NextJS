// GET    /api/projects/:id — get single project (public)
// PUT    /api/projects/:id — update project (admin only)
// DELETE /api/projects/:id — delete project (admin only)

export default async function handler(req, res) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      // TODO: fetch project by id
      return res.status(200).json({ project: null, id });

    case 'PUT':
      // TODO: authenticate admin, validate body, update project
      return res.status(501).json({ message: 'Not implemented' });

    case 'DELETE':
      // TODO: authenticate admin, delete project
      return res.status(501).json({ message: 'Not implemented' });

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
