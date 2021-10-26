import Document, { Html, Main, NextScript } from 'next/document';
import Head from '../lib/Head';

class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
