// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import { sign } from 'jsonwebtoken'
import authConfig from '../../utils/config/auth'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		if (!req.body.email || !req.body.password)
			return res.status(402).json({ error: 'please send all the infos' })
		else {
			if (
				req.body.email === process.env.EMAIL &&
				req.body.password === process.env.PASSWORD
			) {
				const token = sign({}, authConfig.jwt.secret, {
					subject: req.body.email,
					expiresIn: authConfig.jwt.expiresIn
				})
				const data = {
					token,
					email: req.body.email
				}
				return res.status(200).json(data)
			} else {
				return res.status(402).json({
					error: 'password/email wrong, please try again!'
				})
			}
		}
	}
}
