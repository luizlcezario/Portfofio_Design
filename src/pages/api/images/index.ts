import multer from 'multer'
import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import uploadConfig from '../../../utils/config/upload'
import ensureAuth from '../../../utils/middlewares/ensureAth'
const upload = multer(uploadConfig)

const ImgsRoutes = nc<NextApiRequest, NextApiResponse>()
	.use((req, res, next) => ensureAuth(req, res, next))
	.use(upload.single('img'))
	.post((req: NextApiRequest, res: NextApiResponse) => {
		console.log(req)
	})

export default ImgsRoutes
