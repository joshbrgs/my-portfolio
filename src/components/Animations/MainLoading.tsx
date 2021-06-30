import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MainLoading = ({ setLoading }) => {
  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(time);
  });

  return (
    <AnimatePresence>
      <motion.div
        className="loading-container"
        initial={{ opacity: 0, y: 400 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.2
          }
        }}
        exit={{
          opacity: 0,
          y: -400,
          transition: {
            ease: 'easeOut',
            duration: 0.8
          }
        }}
      >
        <h3 className="load-title">Let's Get Started</h3>
      </motion.div>
    </AnimatePresence>
  );
};

export default MainLoading;
