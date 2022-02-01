import multer from 'multer'
import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import uploadConfig from '../../../backend/config/upload'
import ensureAuth from '../../../backend/middlewares/ensureAth'
const upload = multer(uploadConfig)

const ImgsRoutes = nc<NextApiRequest, NextApiResponse>()
	.use((req, res, next) => ensureAuth(req, res, next))
	.use(upload.single('img'))
	.post((req: NextApiRequest, res: NextApiResponse) => {})

export default ImgsRoutes
