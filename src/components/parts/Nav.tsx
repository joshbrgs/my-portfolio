import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Nav = (): React.ReactElement => {
  const { ref, inView } = useInView({ threshold: 1 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: { type: 'spring', duration: 12 }
      });
    } else {
      animation.start({
        opacity: 0
      });
    }
  }, [inView]);

  return (
    <motion.div className="nav" animate={animation} ref={ref}>
      <Link to="hero" smooth={true} duration={500} spy={true} exact="true">
        <h1>Josh Burgess</h1>
      </Link>
      <div className="menu">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
        >
          <a>Projects</a>
        </Link>
        <span> - </span>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-70}
        >
          <a>Contact Me</a>
        </Link>
        <span> - </span>
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-70}
        >
          <a>About</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Nav;
