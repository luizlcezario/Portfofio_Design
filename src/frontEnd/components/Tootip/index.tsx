import { Container } from './styles'

interface TooltipProps {
	title: string

	isalert?: boolean
}

const Tooltip: React.FC<TooltipProps> = ({
	isalert = false,

	title,

	children
}) => {
	return (
		<Container isalert={isalert}>
			{children}

			<span>{title}</span>
		</Container>
	)
}

export default Tooltip
