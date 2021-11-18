import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { FacebookPixel, GoogleAnalyticsTag } from '../components';
import 'normalize.css/normalize.css';
import '../styles/tailwind.scss';
import { theme } from '../styles/theme';

const MyApp: React.FunctionComponent<App> = ({ Component, pageProps }) => {
	return (
		<>
			<FacebookPixel>
				<GoogleAnalyticsTag>
					<ChakraProvider theme={theme}>
						<Component {...pageProps} />
					</ChakraProvider>
				</GoogleAnalyticsTag>
			</FacebookPixel>
		</>
	);
};

export default MyApp;
