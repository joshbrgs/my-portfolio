import 'normalize.css/normalize.css';
import 'scss/tailwind.scss';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';

const MyApp: React.FunctionComponent<App> = ({ Component, pageProps, router }) => {
	return (
		<motion.div
			key={router.route}
			initial={{ opacity: 0, y: 0 }}
			animate={{ opacity: 1, y: 20 }}
			transition={{ transition: 'ease-in-out' }}>
			<Component {...pageProps} />
			<ToastContainer />
		</motion.div>
	);
};

export default MyApp;
