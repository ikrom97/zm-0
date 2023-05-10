import prisma from '../../../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const locale = await prisma.locale.findFirst({
        where: {
          locale: req.query.locale,
        },
      });
      const posts = await prisma.post.findMany({
        where: {
          localeId: locale.id,
        },
      });

      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};
