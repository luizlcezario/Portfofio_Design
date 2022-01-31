import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import ensureAuth from '../../../utils/middlewares/ensureAth'

const ProjectsRoutes = nextConnect<NextApiRequest, NextApiResponse>({
	onError: (err, req, res: NextApiResponse) => {
		return res.status(500).end(err)
	}
})
	.use((req, res, next) => ensureAuth(req, res, next))
	.post(async (req: NextApiRequest, res: NextApiResponse) => {
		const prisma = new PrismaClient()
		try {
			const { name, description } = req.body
			const project = await prisma.project.create({
				data: {
					name,
					description
				}
			})
			return res.status(201).json(project)
		} catch (err) {
			throw res.status(400).end('this project already exists!')
		} finally {
			await prisma.$disconnect()
		}
	})

export default ProjectsRoutes
