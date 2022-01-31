import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

const tmpFolder = path.resolve(__dirname, '..', '..', 'public', 'images')

const storageTypes = {
	directory: tmpFolder,

	local: multer.diskStorage({
		destination: tmpFolder,

		filename(request, file, callback) {
			const fileHash = crypto.randomBytes(10).toString('hex')

			const fileNames = `${fileHash}-${file.originalname}`

			return callback(null, fileNames)
		}
	})
}

export default {
	tmpFolder,

	storage: storageTypes.local
}
