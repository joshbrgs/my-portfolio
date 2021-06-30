import React from 'react';
import { Link as LinkS } from 'react-scroll';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MobileMenu: React.FC = () => {
  return (
    <motion.div
      className="mobile-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="box proj">
        <img src="/assets/project.svg" alt="project" className="mnav" />
        <LinkS
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
        >
          <a>Projects</a>
        </LinkS>
      </div>

      <div className="box">
        <img src="/assets/envelope.svg" alt="contact" className="mnav" />
        <LinkS
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-70}
        >
          <a>Contact</a>
        </LinkS>
      </div>

      <div className="box">
        <img src="/assets/user.svg" alt="about" className="mnav" />
        <LinkS
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-70}
        >
          <a>About</a>
        </LinkS>
      </div>
      <div className="box">
        <img src="/assets/comment.svg" alt="blog" className="mnav" />
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
