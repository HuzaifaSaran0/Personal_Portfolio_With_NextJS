// GET    /api/experiences/:id — get single experience
// PUT    /api/experiences/:id — update experience (admin only)
// DELETE /api/experiences/:id — delete experience (admin only)

import prisma from '../../../lib/prisma';
import { requireAuth } from '../../../lib/auth';
import { updateExperienceSchema } from '../../../lib/validations';
import { errorResponse } from '../../../lib/apiError';

export const dynamic = 'force-dynamic';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET': {
        const experience = await prisma.experience.findUnique({ where: { id } });

        if (!experience) {
          return res.status(404).json({ message: 'Experience not found' });
        }

        return res.status(200).json({ experience });
      }

      case 'PUT': {
        const session = await requireAuth(req, res);
        if (!session) return;

        const result = updateExperienceSchema.safeParse(req.body);
        if (!result.success) {
          return res.status(400).json({ message: 'Validation failed', errors: result.error.flatten() });
        }

        const experience = await prisma.experience.update({
          where: { id },
          data: result.data,
        });

        return res.status(200).json({ experience });
      }

      case 'DELETE': {
        const session = await requireAuth(req, res);
        if (!session) return;

        await prisma.experience.delete({ where: { id } });
        return res.status(200).json({ message: 'Experience deleted' });
      }

      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Experience not found' });
    }
    return errorResponse(res, error);
  }
}
