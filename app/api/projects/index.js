// GET  /api/projects — list published projects (public)
// POST /api/projects — create project (admin only)

import prisma from '../../../lib/prisma';
import { getSession, requireAuth } from '../../../lib/auth';
import { createProjectSchema } from '../../../lib/validations';
import { ApiError, errorResponse } from '../../../lib/apiError';

export const dynamic = 'force-dynamic';

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        const where = {};

        if (req.query.draft === 'true') {
          const session = await getSession(req, res);
          if (!session) {
            return res.status(401).json({ message: 'Unauthorized' });
          }
          // Admin sees all projects including drafts
        } else {
          where.published = true;
        }

        const projects = await prisma.project.findMany({
          where,
          orderBy: { sortOrder: 'asc' },
          include: { skills: { include: { skill: true } } },
        });

        return res.status(200).json({ projects });
      }

      case 'POST': {
        const session = await requireAuth(req, res);
        if (!session) return;

        const result = createProjectSchema.safeParse(req.body);
        if (!result.success) {
          return res.status(400).json({ message: 'Validation failed', errors: result.error.flatten() });
        }

        const project = await prisma.project.create({ data: result.data });
        return res.status(201).json({ project });
      }

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    return errorResponse(res, error);
  }
}
