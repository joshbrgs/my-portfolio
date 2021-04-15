import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p>
        Checkout my{' '}
        <Link href="https://joshb.io/404">
          <a>Blog</a>
        </Link>{' '}
        as well!
      </p>
      {/* Tip with Bat? */}
      <a className="btn" href="/assets/Burgess Resume.pdf" download>
        <FontAwesomeIcon icon={faDownload} size="1x" /> Resume
      </a>
      <a href="mailto:burgessj247@gmail.com">burgessj247@gmail.com</a>
    </div>
  );
};

export default Footer;
