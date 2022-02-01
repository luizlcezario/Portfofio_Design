import styled, { css } from 'styled-components'

import { animated } from 'react-spring'

interface Prop {
	type?: 'sucess' | 'error' | 'info'

	description?: boolean
}

export const Container = styled.div`
	z-index: 4;

	position: absolute;

	right: 0;

	top: 0;

	overflow: hidden;
`

// eslint-disable-next-line prettier/prettier

export const Toast = styled(animated.div)<Prop>`
	width: 360px;

	position: relative;

	padding: 16px 30px 16px 16px;

	border-radius: 10px;

	display: flex;

	margin: 20px;

	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

	background: #ebf9ff;

	color: #3172b7;

	> svg {
		position: relative;

		top: -20px;

		margin: 10px 12px 0px 0px;
	}

	> div {
		flex: 1;

		p {
			margin-top: 4px;

			font-size: 14px;

			opacity: 0.8;

			line-height: 20px;
		}
	}

	& + div {
		margin-top: 10px;
	}

	> button {
		position: absolute;

		right: 16px;

		top: 19px;

		opacity: 0.6;

		border: 0;

		background: transparent;

		color: inherit;
	}

	${props =>
		props.type === 'sucess' &&
		css`
			background: #e6fffa;

			color: #2e656a;
		`}

	${props =>
		props.type === 'error' &&
		css`
			background: #fddede;

			color: #c53030;
		`}

    ${props =>
		props.description === false &&
		css`
			align-items: center;

			> svg {
				vertical-align: middle;

				top: -6px;
			}
		`}
`
