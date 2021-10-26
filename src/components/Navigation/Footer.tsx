import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p>
        Check out my{' '}
        <Link href="/blog">
          <a>Blog</a>
        </Link>{' '}
        as well!
      </p>
      {/* Tip with Bat? */}
      <motion.a
        className="btn"
        href="/assets/Burgess Resume.pdf"
        download
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src="/assets/download.svg" alt="download" className="dwn" /> Resume
      </motion.a>
      <a href="mailto:burgessj247@gmail.com">burgessj247@gmail.com</a>
    </div>
  );
};

export default Footer;
