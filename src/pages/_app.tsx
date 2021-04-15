import '../styles/globals.scss';
import '../styles/theme.scss';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }): any {
  return (
    <motion.div
      key={router.route}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 20 }}
      transition={{ transition: 'ease-in-out' }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
