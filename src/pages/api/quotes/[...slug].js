import prisma from '../../../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const quote = await prisma.quote.findFirst({
        where: {
          slug: req.query.slug[0],
        },
        include: {
          tags: {
            include: {
              tag: true,
            }
          },
        }
      });

      return res.status(200).json(quote);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};
