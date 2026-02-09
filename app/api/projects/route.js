// GET  /api/projects — list published projects (public)
// POST /api/projects — create project (admin only)

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession, requireAuth } from '@/lib/auth';
import { createProjectSchema } from '@/lib/validations';
import { errorResponse } from '@/lib/apiError';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    if (!prisma) {
      return NextResponse.json({ projects: [] });
    }

    const { searchParams } = request.nextUrl;
    const where = {};

    if (searchParams.get('draft') === 'true') {
      const session = await getSession();
      if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
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

    return NextResponse.json({ projects });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request) {
  try {
    if (!prisma) {
      return NextResponse.json({ message: 'Database not configured' }, { status: 503 });
    }

    const session = await requireAuth();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const result = createProjectSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ message: 'Validation failed', errors: result.error.flatten() }, { status: 400 });
    }

    const project = await prisma.project.create({ data: result.data });
    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    return errorResponse(error);
  }
}
