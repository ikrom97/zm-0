const bcrypt = require('bcrypt');

const users = [
  {
    name: 'Name',
    surname: 'Surname',
    login: 'user@zm.com',
    password: bcrypt.hashSync('uH!@g4yK', 10),
  },
];

const seedUsers = async (prisma) => {
  for (let user of users) {
    await prisma.user.create({ data: user });
  }
};

module.exports = seedUsers;
