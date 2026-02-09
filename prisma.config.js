// prisma.config.js
require('dotenv').config();
const { defineConfig } = require('@prisma/config');

module.exports = defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
  migrations: {
    // Change 'node' to 'npx tsx'
    seed: 'npx tsx prisma/seed.js',
  },
});