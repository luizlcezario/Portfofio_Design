import { verify } from 'jsonwebtoken'
import authConfig from '../config/auth'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'

export default function ensureAuth(
	req: NextApiRequest,
	res: NextApiResponse,
	next: NextHandler
) {
	const authHeader = req.headers.authorization
	if (!authHeader) {
		return res
			.status(400)
			.json({ error: 'You don`t have permission to acess!' })
	}
	const [, token] = authHeader.split(' ')

	try {
		verify(token, authConfig.jwt.secret)
		next()
	} catch {
		return res
			.status(400)
			.json({ error: 'You don`t have permission to acess!' })
	}
}
