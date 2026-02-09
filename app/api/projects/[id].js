// GET    /api/projects/:id — get single project (public)
// PUT    /api/projects/:id — update project (admin only)
// DELETE /api/projects/:id — delete project (admin only)

import prisma from '../../../lib/prisma';
import { requireAuth } from '../../../lib/auth';
import { updateProjectSchema } from '../../../lib/validations';
import { ApiError, errorResponse } from '../../../lib/apiError';

export const dynamic = 'force-dynamic';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET': {
        const project = await prisma.project.findUnique({
          where: { id },
          include: { skills: { include: { skill: true } } },
        });

        if (!project) {
          return res.status(404).json({ message: 'Project not found' });
        }

        return res.status(200).json({ project });
      }

      case 'PUT': {
        const session = await requireAuth(req, res);
        if (!session) return;

        const result = updateProjectSchema.safeParse(req.body);
        if (!result.success) {
          return res.status(400).json({ message: 'Validation failed', errors: result.error.flatten() });
        }

        const project = await prisma.project.update({
          where: { id },
          data: result.data,
        });

        return res.status(200).json({ project });
      }

      case 'DELETE': {
        const session = await requireAuth(req, res);
        if (!session) return;

        await prisma.project.delete({ where: { id } });
        return res.status(200).json({ message: 'Project deleted' });
      }

      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Project not found' });
    }
    return errorResponse(res, error);
  }
}
