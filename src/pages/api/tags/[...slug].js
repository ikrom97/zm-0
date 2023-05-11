import prisma from '../../../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const tag = await prisma.tag.findFirst({
        where: {
          slug: req.query.slug[0],
        },
        include: {
          quotes: {
            include: {
              quote: {
                include: {
                  tags: {
                    include: {
                      tag: true,
                    }
                  }
                }
              },
            }
          },
        }
      });

      return res.status(200).json(tag);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};
