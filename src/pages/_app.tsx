import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../frontEnd/styles/global'
import theme from '../frontEnd/styles/theme'
import 'tailwindcss/tailwind.css'
import { AuthProvider } from '../frontEnd/hooks/AuthContext'
import { ToastProvider } from '../frontEnd/hooks/ToastContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Iago Design</title>
			</Head>
			<AuthProvider>
				<ToastProvider>
					<Component {...pageProps} />
				</ToastProvider>
			</AuthProvider>
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default MyApp
