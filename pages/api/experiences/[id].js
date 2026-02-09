// GET    /api/experiences/:id — get single experience
// PUT    /api/experiences/:id — update experience (admin only)
// DELETE /api/experiences/:id — delete experience (admin only)

export default async function handler(req, res) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      // TODO: fetch experience by id
      return res.status(200).json({ experience: null, id });

    case 'PUT':
      // TODO: authenticate admin, validate body, update experience
      return res.status(501).json({ message: 'Not implemented' });

    case 'DELETE':
      // TODO: authenticate admin, delete experience
      return res.status(501).json({ message: 'Not implemented' });

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
