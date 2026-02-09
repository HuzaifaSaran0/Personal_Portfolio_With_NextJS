// GET  /api/skills — list all skills (public)
// POST /api/skills — create skill (admin only)

import prisma from '../../../lib/prisma';
import { getSession, requireAuth } from '../../../lib/auth';
import { createSkillSchema } from '../../../lib/validations';
import { errorResponse } from '../../../lib/apiError';

export const dynamic = 'force-dynamic';

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.draft === 'true') {
          const session = await getSession(req, res);
          if (!session) {
            return res.status(401).json({ message: 'Unauthorized' });
          }
        }

        const skills = await prisma.skill.findMany({
          orderBy: { sortOrder: 'asc' },
        });

        return res.status(200).json({ skills });
      }

      case 'POST': {
        const session = await requireAuth(req, res);
        if (!session) return;

        const result = createSkillSchema.safeParse(req.body);
        if (!result.success) {
          return res.status(400).json({ message: 'Validation failed', errors: result.error.flatten() });
        }

        const skill = await prisma.skill.create({ data: result.data });
        return res.status(201).json({ skill });
      }

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    return errorResponse(res, error);
  }
}
