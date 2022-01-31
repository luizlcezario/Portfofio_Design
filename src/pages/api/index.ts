import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getAll(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const prisma = new PrismaClient()
		try {
			const projects = await prisma.project.findMany()

			res.status(200).json(projects)
		} catch {
			return new Response('error to try take the projects', {
				status: 500
			})
		} finally {
			await prisma.$disconnect()
		}
	}
}
