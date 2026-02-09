// GET  /api/skills — list all skills (public)
// POST /api/skills — create skill (admin only)

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession, requireAuth } from '@/lib/auth';
import { createSkillSchema } from '@/lib/validations';
import { errorResponse } from '@/lib/apiError';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    if (!prisma) {
      return NextResponse.json({ skills: [] });
    }

    const { searchParams } = request.nextUrl;

    if (searchParams.get('draft') === 'true') {
      const session = await getSession();
      if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }
    }

    const skills = await prisma.skill.findMany({
      orderBy: { sortOrder: 'asc' },
    });

    return NextResponse.json({ skills });
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
    const result = createSkillSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ message: 'Validation failed', errors: result.error.flatten() }, { status: 400 });
    }

    const skill = await prisma.skill.create({ data: result.data });
    return NextResponse.json({ skill }, { status: 201 });
  } catch (error) {
    return errorResponse(error);
  }
}
