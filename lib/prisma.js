// lib/prisma.js
import 'server-only';
import { PrismaClient } from '../prisma/generated/client.ts';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const prismaClientSingleton = () => {
  // Only attempt to create the pool if we have a URL
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) return null;

  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
};

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;