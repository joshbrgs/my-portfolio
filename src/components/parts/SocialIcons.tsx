import React from 'react';

const SocialIcons: React.FC = () => {
  return (
    <div className="socialIcons">
      <a
        href="https://github.com/jlifts"
        target="blank"
        className="github social"
      >
        <img src="/assets/github.svg" alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/burgess-josh/"
        target="blank"
        className="linkedin social"
      >
        <img src="/assets/linkedin.svg" alt="linkedin" />
      </a>
      <a
        href="https://twitter.com/bluejay_mr"
        target="blank"
        className="twitter social"
      >
        <img src="/assets/twitter.svg" alt="twitter" />
      </a>
      {/* Add Dribble */}
    </div>
  );
};

export default SocialIcons;
