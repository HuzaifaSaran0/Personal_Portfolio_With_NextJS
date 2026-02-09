// prisma/seed.js
const { PrismaClient } = require('./generated/client.ts');
const { PrismaPg } = require('@prisma/adapter-pg'); // Use PG adapter instead
const { Pool } = require('pg'); // Use standard 'pg'
const bcrypt = require('bcryptjs');
const path = require('path');

// Load .env
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

async function main() {
  const connectionString = process.env.DATABASE_URL;
  console.log('🚀 Using Standard PG Driver for Seed...');

  // Standard PG Pool - much more reliable for local scripts
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  const email = 'admin@example.com'; 
  const password = 'your-secure-password'; 
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const admin = await prisma.adminUser.upsert({
      where: { email },
      update: {},
      create: {
        email,
        password: hashedPassword,
        name: 'Admin User',
      },
    });

    console.log('✅ SEED SUCCESSFUL! Admin created:', admin.email);
  } catch (err) {
    console.error('❌ Database Operation Failed:', err);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main().catch(console.error);