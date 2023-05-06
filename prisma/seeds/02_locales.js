const locales = [
  {
    title: 'Русский',
    locale: 'ru',
  }, {
    title: 'English',
    locale: 'en',
  },
];


const seedLocales = async (prisma) => {
  for (let locale of locales) {
    await prisma.locale.create({ data: locale });
  }
};

module.exports = seedLocales;
