import Document, { Html, Main, NextScript } from 'next/document';
import DocHead from '../lib/Head';

class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<DocHead />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
