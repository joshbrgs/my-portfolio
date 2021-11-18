import Document, { Head, Html, Main, NextScript } from 'next/document';
import HeadScripts from '../lib/HeadScripts';

class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<HeadScripts />
				</Head>
				<body>
					{/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
