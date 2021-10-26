import { motion } from 'framer-motion';
import React, { useState } from 'react';

const SocialIcons: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const [hovereds, setHovereds] = useState(false);
  const toggleHovers = () => setHovereds(!hovereds);
  const [hovereded, setHovereded] = useState(false);
  const toggleHovered = () => setHovereded(!hovereded);
  return (
    <div className="socialIcons">
      <motion.a
        href="https://github.com/jlifts"
        target="blank"
        className={hovered ? 'github social' : 'social'}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <img src="/assets/github.svg" alt="github" />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/burgess-josh/"
        target="blank"
        className={hovereds ? 'linkedin social' : 'social'}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={toggleHovers}
        onMouseLeave={toggleHovers}
      >
        <img src="/assets/linkedin.svg" alt="linkedin" />
      </motion.a>
      <motion.a
        href="https://twitter.com/bluejay_mr"
        target="blank"
        className={hovereded ? 'twitter social' : 'social'}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={toggleHovered}
        onMouseLeave={toggleHovered}
      >
        <img src="/assets/twitter.svg" alt="twitter" />
      </motion.a>
      {/* Add Dribble */}
    </div>
  );
};

export default SocialIcons;
