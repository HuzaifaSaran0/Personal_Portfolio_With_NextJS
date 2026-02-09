// GET    /api/skills/:id — get single skill
// PUT    /api/skills/:id — update skill (admin only)
// DELETE /api/skills/:id — delete skill (admin only)

export default async function handler(req, res) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      // TODO: fetch skill by id
      return res.status(200).json({ skill: null, id });

    case 'PUT':
      // TODO: authenticate admin, validate body, update skill
      return res.status(501).json({ message: 'Not implemented' });

    case 'DELETE':
      // TODO: authenticate admin, delete skill
      return res.status(501).json({ message: 'Not implemented' });

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
