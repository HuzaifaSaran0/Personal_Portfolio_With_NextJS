// GET  /api/experiences — list all experiences (public)
// POST /api/experiences — create experience (admin only)

import prisma from '../../../lib/prisma';
import { getSession, requireAuth } from '../../../lib/auth';
import { createExperienceSchema } from '../../../lib/validations';
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

        const experiences = await prisma.experience.findMany({
          orderBy: { sortOrder: 'asc' },
        });

        return res.status(200).json({ experiences });
      }

      case 'POST': {
        const session = await requireAuth(req, res);
        if (!session) return;

        const result = createExperienceSchema.safeParse(req.body);
        if (!result.success) {
          return res.status(400).json({ message: 'Validation failed', errors: result.error.flatten() });
        }

        const experience = await prisma.experience.create({ data: result.data });
        return res.status(201).json({ experience });
      }

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    return errorResponse(res, error);
  }
}
