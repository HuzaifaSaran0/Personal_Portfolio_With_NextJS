// GET    /api/experiences/:id — get single experience
// PUT    /api/experiences/:id — update experience (admin only)
// DELETE /api/experiences/:id — delete experience (admin only)

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { updateExperienceSchema } from '@/lib/validations';
import { errorResponse } from '@/lib/apiError';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  try {
    if (!prisma) {
      return NextResponse.json({ message: 'Database not configured' }, { status: 503 });
    }

    const { id } = await params;
    const experience = await prisma.experience.findUnique({ where: { id } });

    if (!experience) {
      return NextResponse.json({ message: 'Experience not found' }, { status: 404 });
    }

    return NextResponse.json({ experience });
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
    const result = updateExperienceSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ message: 'Validation failed', errors: result.error.flatten() }, { status: 400 });
    }

    const experience = await prisma.experience.update({
      where: { id },
      data: result.data,
    });

    return NextResponse.json({ experience });
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json({ message: 'Experience not found' }, { status: 404 });
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
    await prisma.experience.delete({ where: { id } });
    return NextResponse.json({ message: 'Experience deleted' });
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json({ message: 'Experience not found' }, { status: 404 });
    }
    return errorResponse(error);
  }
}
