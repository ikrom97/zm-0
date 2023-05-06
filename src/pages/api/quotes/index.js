import prisma from '../../../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      let skip = 0;
      let take = 10;
      const page = +req.query.page;
      const locale = await prisma.locale.findFirst({
        where: {
          locale: req.query.locale,
        }
      });
      if (page && page > 1) {
        skip = (page - 1) * take;
      }
      const data = await prisma.quote.findMany({
        skip,
        take,
        where: {
          localeId: locale.id,
        },
      });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};
