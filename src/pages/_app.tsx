import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import 'tailwindcss/tailwind.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Iago Design</title>
			</Head>
			<Component {...pageProps} />
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default MyApp
