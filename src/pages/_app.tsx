import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import { FacebookPixel, GoogleAnalyticsTag } from '../components/tags';
import 'normalize.css/normalize.css';
import '../scss/tailwind.scss';
import 'react-toastify/dist/ReactToastify.css';

const MyApp: React.FunctionComponent<App> = ({ Component, pageProps }) => {
	return (
		<>
			<FacebookPixel>
				<GoogleAnalyticsTag>
					<ChakraProvider>
						<Component {...pageProps} />
						<ToastContainer />
					</ChakraProvider>
				</GoogleAnalyticsTag>
			</FacebookPixel>
		</>
	);
};

export default MyApp;
