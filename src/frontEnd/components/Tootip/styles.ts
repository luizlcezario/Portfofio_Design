import styled, { css } from 'styled-components'

interface Props {
	isalert?: boolean
}

export const Container = styled.div<Props>`
	position: relative;

		width: 160px;

		background: #c53030;

		padding: 8px;

		color: #fff;

		border-radius: 4px;

		font-size: 14px;

		font-weight: 500;

		opacity: 0;

		transition: opacity 0.4s;

		position: absolute;

		bottom: calc(100% + 12px);

		left: 50%;

		transform: translateX(-50%);

		visibility: hidden;

		&::before {
			content: '';

			border-style: solid;

			border-color: #c53030 transparent;

			border-width: 6px 6px 0 6px;

			top: 100%;

			position: absolute;

			left: 50%;

			transform: translateX(-50%);
		}
	}

	&:hover span {
		opacity: 1;

		visibility: visible;
	}

	${props =>
		props.isalert &&
		css`
			span {
				width: 200px;

				background: #474eff;

				&::before {
					border-color: #474eff transparent;
				}
			}
		`}
`
