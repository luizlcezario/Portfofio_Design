/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

import theme from './theme'

export type Theme = typeof theme

declare module 'style-component' {
	export interface DefaultTheme extends Theme {}
}
