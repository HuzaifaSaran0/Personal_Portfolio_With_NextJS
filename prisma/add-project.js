const { PrismaClient } = require('./generated/client.ts');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  const project = await prisma.project.create({
    data: {
      title: "My Awesome Portfolio",
      slug: "my-awesome-portfolio",
      description: "A backend-heavy portfolio built with Next.js 16, Prisma 7, and Neon.",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      published: true,
      featured: true,
    },
  });

  console.log("✅ Project created:", project.title);
  await prisma.$disconnect();
  await pool.end();
}

main().catch(console.error);