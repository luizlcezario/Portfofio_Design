/* eslint-disable @typescript-eslint/ban-types */

import { useEffect } from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'

import { ToastMessage, useToast } from '../../hooks/ToastContext'

import { Toast } from './styles'

interface Prop {
	message: ToastMessage

	style: object
}

const icons = {
	info: <FiInfo size={24} />,

	error: <FiAlertCircle size={24} />,

	sucess: <FiCheckCircle size={24} />
}

const ToastContent: React.FC<Prop> = ({ message, style }) => {
	const { removeToast } = useToast()

	useEffect(() => {
		const Timer = setTimeout(() => {
			removeToast(message.id)
		}, 3000)

		return () => {
			clearTimeout(Timer)
		}
	}, [removeToast, message.id])

	return (
		<Toast
			type={message.type}
			description={!!message.description}
			style={style}
		>
			{icons[message.type || 'info']}

			<div>
				<strong>{message.title}</strong>

				{message.description && <p>{message.description}</p>}
			</div>

			<button type="button" onClick={() => removeToast(message.id)}>
				<FiXCircle size={18} />
			</button>
		</Toast>
	)
}

export default ToastContent
