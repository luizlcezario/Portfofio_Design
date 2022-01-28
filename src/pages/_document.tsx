import Document, {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Head,
	Main,
	NextScript
} from 'next/document'

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()

		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props =>
						sheet.collectStyles(<App {...props} />)
				})

			const initialProps = await Document.getInitialProps(ctx)

			return {
				...initialProps,

				styles: (
					<>
						{initialProps.styles}

						{sheet.getStyleElement()}
					</>
				)
			}
		} finally {
			sheet.seal()
		}
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<title>Codes Luiz Cezario</title>
					<meta
						name="description"
						content="This a simple portifolio for my projects in the github."
					/>
					<link rel="icon" href="/favicon.ico" />
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
