// GET    /api/skills/:id — get single skill
// PUT    /api/skills/:id — update skill (admin only)
// DELETE /api/skills/:id — delete skill (admin only)

import prisma from '../../../lib/prisma';
import { requireAuth } from '../../../lib/auth';
import { updateSkillSchema } from '../../../lib/validations';
import { errorResponse } from '../../../lib/apiError';

export const dynamic = 'force-dynamic';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET': {
        const skill = await prisma.skill.findUnique({ where: { id } });

        if (!skill) {
          return res.status(404).json({ message: 'Skill not found' });
        }

        return res.status(200).json({ skill });
      }

      case 'PUT': {
        const session = await requireAuth(req, res);
        if (!session) return;

        const result = updateSkillSchema.safeParse(req.body);
        if (!result.success) {
          return res.status(400).json({ message: 'Validation failed', errors: result.error.flatten() });
        }

        const skill = await prisma.skill.update({
          where: { id },
          data: result.data,
        });

        return res.status(200).json({ skill });
      }

      case 'DELETE': {
        const session = await requireAuth(req, res);
        if (!session) return;

        await prisma.skill.delete({ where: { id } });
        return res.status(200).json({ message: 'Skill deleted' });
      }

      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Skill not found' });
    }
    return errorResponse(res, error);
  }
}
