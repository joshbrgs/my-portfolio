import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Hamburger: React.FC = () => {
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
  // figure out
  //   opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  //     top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

  return (
    <motion.div className="hamburger" animate={animation} ref={ref}>
      <Link to="hero" smooth={true} duration={500} spy={true} exact="true">
        <h1>Josh Burgess</h1>
      </Link>
      <FontAwesomeIcon icon={faBars} size="1x" className="burger" />
      <div className="ham-menu">
        <FontAwesomeIcon icon={faTimes} size="1x" className="close" />
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
        >
          <a>Projects</a>
        </Link>

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
        {/* <Link to="/blog">
          <a>Blog</a>
        </Link> */}
      </div>
    </motion.div>
  );
};

export default Hamburger;
