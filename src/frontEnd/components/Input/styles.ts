import styled, { css } from 'styled-components'

import Tooltip from '../Tootip'

interface Focused {
	isFocused: boolean

	isFilled: boolean

	isErrored: boolean

	isModal: boolean
}

export const Container = styled.div<Focused>`
	background: #ededed;

	color: #232129;

	border-radius: 10px 10px 0px 0px;

	border: 1px solid #adadad;

	padding: 16px;

	display: flex;

	min-width: 300px;

	align-items: center;

	margin: 0px auto;

	+ div {
		border-radius: 0px 0px 10px 10px;
	}

	${props =>
		props.isModal &&
		css`
			flex: 1 1;
			flex: 1 1 400px;
			margin: 5px !important;
			border-radius: 10px;
			border-color: #c4c4c4;
			@media (max-width: 440px) {
				min-width: 90vw;
			}
			+ div {
				margin-left: 10px;
				border-radius: 10px;
			}
		`}

	${props =>
		props.isErrored &&
		css`
			border-color: #c53030;
		`}

  ${props =>
		props.isFocused &&
		css`
			color: #474eff;
			border-color: #474eff;
		`}

  ${props =>
		props.isFilled &&
		css`
			color: #474eff;
		`}
	> input {
		flex: 1;
		background: transparent;
		border: 0 !important;
		color: #232129;
		&::placeholder {
			color: #232129;
		}
	}
`

export const Error = styled(Tooltip)`
	height: 20px;
	display: block;
	max-width: 50px;
	span {
		background: #c53030;

		color: #fff;

		&::before {
			border-color: #c53030 transparent;
		}
	}
`
