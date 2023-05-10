import prisma from '../../../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const locale = await prisma.locale.findFirst({
        where: {
          locale: req.query.locale,
        },
      });

      const quotes = await prisma.quote.findMany({
        take: 10,
        where: {
          localeId: locale.id,
          quote: {
            contains: req.query.keyword,
          },
        },
      });

      return res.status(200).json(quotes);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};
