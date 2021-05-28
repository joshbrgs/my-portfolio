import '../styles/globals.scss';
import '../styles/theme.scss';
import { motion } from 'framer-motion';
import Meta from '../lib/meta';

type App = {
  Component;
  pageProps;
  router;
};

const MyApp: React.FunctionComponent<App> = ({
  Component,
  pageProps,
  router
}) => {
  return (
    <motion.div
      key={router.route}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 20 }}
      transition={{ transition: 'ease-in-out' }}
    >
      <Meta />
      <Component {...pageProps} />
    </motion.div>
  );
};

export default MyApp;
