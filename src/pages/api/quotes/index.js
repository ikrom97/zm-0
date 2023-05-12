import prisma from '../../../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      if (req.query.locale) {
        const locale = await prisma.locale.findFirst({
          where: {
            locale: req.query.locale,
          },
        });
        const quotes = await prisma.quote.findMany({
          where: {
            localeId: locale.id,
          },
          orderBy: {
            title: 'asc',
          },
        });

        return res.status(200).json(quotes);
      }

      const quotes = await prisma.quote.findMany({
        orderBy: {
          quote: 'asc',
        },
      });

      return res.status(200).json(quotes);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};
