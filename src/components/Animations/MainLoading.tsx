import React from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MainLoading = ({ setLoading }) => {
  //   useEffect(() => {
  //     const time = setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //     return () => clearTimeout(time);
  //   });

  const load = {
    hidden: {
      opacity: 0,
      y: 400
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.4
      }
    },
    exit: {
      opacity: 0,
      y: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.8
      }
    }
  };
  const img = {
    hidden: {
      opacity: 0,
      y: 700
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.4
      }
    },
    exit: {
      opacity: 0.3,
      y: -700,
      transition: {
        ease: 'easeInOut',
        duration: 0.8
      }
    }
  };

  return (
    <>
      <motion.div
        className="loading-container"
        variants={load}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
        layoutId="main"
      >
        <img
          src="/assets/Icon.svg"
          height={330}
          width={300}
          alt="Icon"
          className="image"
        />
      </motion.div>
      {/* <motion.div className="image1_l">
        <img src="/assets/code3.svg" height={270} width={400} alt="flare" />
      </motion.div>
      <motion.div className="image1">
        <img src="/assets/code3.svg" height={270} width={400} alt="flare" />
      </motion.div>
      <motion.div className="image1">
        <img src="/assets/code2.svg" height={270} width={370} alt="flare" />
      </motion.div>
      <motion.div className="image2">
        <img src="/assets/code.svg" height={270} width={300} alt="flare" />
      </motion.div>
      <motion.div className="image3">
        <img src="/assets/Lined.svg" height={270} width={250} alt="flare" />
      </motion.div>
      <motion.div className="image4">
        <img src="/assets/box.svg" height={270} width={250} alt="flare" />
      </motion.div> */}
    </>
  );
};

export default MainLoading;
