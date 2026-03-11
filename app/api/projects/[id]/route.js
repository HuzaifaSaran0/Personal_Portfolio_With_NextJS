// GET    /api/projects/:id — get single project (public)
// PUT    /api/projects/:id — update project (admin only)
// DELETE /api/projects/:id — delete project (admin only)

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';
import { updateProjectSchema } from '@/lib/validations';
import { errorResponse } from '@/lib/apiError';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  try {
    if (!prisma) {
      return NextResponse.json({ message: 'Database not configured' }, { status: 503 });
    }

    const { id } = await params;
    const project = await prisma.project.findUnique({
      where: { id },
      include: { skills: { include: { skill: true } } },
    });

    if (!project) {
      return NextResponse.json({ message: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ project });
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
    const result = updateProjectSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ message: 'Validation failed', errors: result.error.flatten() }, { status: 400 });
    }

    const project = await prisma.project.update({
      where: { id },
      data: result.data,
    });

    return NextResponse.json({ project });
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json({ message: 'Project not found' }, { status: 404 });
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
    await prisma.project.delete({ where: { id } });
    return NextResponse.json({ message: 'Project deleted' });
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json({ message: 'Project not found' }, { status: 404 });
    }
    return errorResponse(error);
  }
}
