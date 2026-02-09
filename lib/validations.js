import { z } from 'zod';

// ─── Project Schemas ────────────────────────────────────────────────

export const createProjectSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(1),
  longDescription: z.string().optional(),
  imageUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  sortOrder: z.number().int().default(0),
  published: z.boolean().default(false),
});

export const updateProjectSchema = createProjectSchema.partial();

// ─── Skill Schemas ──────────────────────────────────────────────────

export const createSkillSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  icon: z.string().optional(),
  level: z.number().int().min(0).max(100).default(0),
  sortOrder: z.number().int().default(0),
});

export const updateSkillSchema = createSkillSchema.partial();

// ─── Experience Schemas ─────────────────────────────────────────────

export const createExperienceSchema = z.object({
  company: z.string().min(1),
  role: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().optional(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional(),
  current: z.boolean().default(false),
  sortOrder: z.number().int().default(0),
});

export const updateExperienceSchema = createExperienceSchema.partial();
