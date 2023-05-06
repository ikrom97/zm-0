const { PrismaClient } = require('@prisma/client');
const seedUsers = require('./01_users');
const seedLocales = require('./02_locales');
const seedQuotes = require('./04_quotes');
const seedTags = require('./03_tags');
const seedPosts = require('./05_posts');

const prisma = new PrismaClient();

async function main() {
  await seedUsers(prisma);
  await seedLocales(prisma);
  await seedTags(prisma);
  await seedQuotes(prisma);
  await seedPosts(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })