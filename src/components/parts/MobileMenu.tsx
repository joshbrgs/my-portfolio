import React from 'react';
import { Link as LinkS } from 'react-scroll';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faProjectDiagram,
  faEnvelope,
  faUser,
  faComment
} from '@fortawesome/free-solid-svg-icons';

const MobileMenu: React.FC = () => {
  return (
    <div className="mobile-container">
      <div className="box proj">
        <FontAwesomeIcon icon={faProjectDiagram} size="1x" />
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
        <FontAwesomeIcon icon={faEnvelope} size="1x" />
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
        <FontAwesomeIcon icon={faUser} size="1x" />
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
        <FontAwesomeIcon icon={faComment} size="1x" />
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
