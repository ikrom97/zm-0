import prisma from '../../../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const data = await prisma.user.findMany();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
