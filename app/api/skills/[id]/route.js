// GET    /api/skills/:id — get single skill
// PUT    /api/skills/:id — update skill (admin only)
// DELETE /api/skills/:id — delete skill (admin only)

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { updateSkillSchema } from '@/lib/validations';
import { errorResponse } from '@/lib/apiError';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  try {
    if (!prisma) {
      return NextResponse.json({ message: 'Database not configured' }, { status: 503 });
    }

    const { id } = await params;
    const skill = await prisma.skill.findUnique({ where: { id } });

    if (!skill) {
      return NextResponse.json({ message: 'Skill not found' }, { status: 404 });
    }

    return NextResponse.json({ skill });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function PUT(request, { params }) {
  try {
    if (!prisma) {
      return NextResponse.json({ message: 'Database not configured' }, { status: 503 });
    }

    const session = await requireAuth();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const result = updateSkillSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ message: 'Validation failed', errors: result.error.flatten() }, { status: 400 });
    }

    const skill = await prisma.skill.update({
      where: { id },
      data: result.data,
    });

    return NextResponse.json({ skill });
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json({ message: 'Skill not found' }, { status: 404 });
    }
    return errorResponse(error);
  }
}

export async function DELETE(request, { params }) {
  try {
    if (!prisma) {
      return NextResponse.json({ message: 'Database not configured' }, { status: 503 });
    }

    const session = await requireAuth();
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    await prisma.skill.delete({ where: { id } });
    return NextResponse.json({ message: 'Skill deleted' });
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json({ message: 'Skill not found' }, { status: 404 });
    }
    return errorResponse(error);
  }
}
