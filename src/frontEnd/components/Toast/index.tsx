import { useTransition } from 'react-spring'

import { ToastMessage } from '../../hooks/ToastContext'

import { Container } from './styles'

import ToastContent from './Toast'

interface ToastProps {
	messages: ToastMessage[]
}

const ContainerToast: React.FC<ToastProps> = ({ messages }) => {
	const messagesWithTrasintions = useTransition(messages, {
		from: { right: '-120%', opacity: 0 },
		enter: { right: '0%', opacity: 1 },
		leave: { right: '-120%', opacity: 0 }
	})
	return (
		<Container>
			{messagesWithTrasintions((props, item) => {
				return (
					<ToastContent key={item.id} message={item} style={props} />
				)
			})}
		</Container>
	)
}

export default ContainerToast
