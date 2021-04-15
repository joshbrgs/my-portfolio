import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const SocialIcons: React.FC = () => {
  return (
    <div className="socialIcons">
      <a
        href="https://github.com/jlifts"
        target="blank"
        className="github social"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/burgess-josh/"
        target="blank"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://twitter.com/bluejay_mr"
        target="blank"
        className="twitter social"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      {/* Add Dribble */}
    </div>
  );
};

export default SocialIcons;
