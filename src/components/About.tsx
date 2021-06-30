import SocialIcons from './parts/SocialIcons';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About(): React.ReactElement {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const anim = useAnimation();
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: { type: 'spring', duration: 1, delay: 0.5 }
      });
    } else {
      animation.start({
        opacity: 0,
        x: -50
      });
    }
  }, [inView]);

  useEffect(() => {
    if (inView) {
      anim.start({
        opacity: 1,
        x: 0,
        transition: { type: 'spring', duration: 1, delay: 0.8 }
      });
    } else {
      anim.start({
        opacity: 0,
        x: 50
      });
    }
  }, [inView]);

  return (
    <section className="about">
      <div className="bio-container">
        <motion.span className="bubbles" animate={animation} ref={ref}>
          <img src="/assets/Grid.svg" height={270} width={250} alt="flare" />
        </motion.span>
        <h2 className="about-title">About</h2>
        <h2 className="watermark_2">About</h2>
        <div className="underline" ref={ref}></div>
        <motion.p
        // animate={animation}
        // // initial={{ x: 50, opacity: 0 }}
        // // transition={{ duration: 1, delay: 15 }}
        // ref={ref}
        >
          Most of my experience is in Front End Developement, but I love the
          whole process of building apps, Back Ends, and programs. I graduated
          from <b>Pittsburgh University</b>, in Pittsburgh Pennsylvania, with a
          BS in Digital Marketing. It was during my undergraduate where I was
          introduced to the basics of scripting languages, and once I graduated
          I was down the rabbit hole of learning{' '}
          <span
            className="hover-reveal"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            code
            <img
              className={hovered ? 'hover reveal' : 'hover'}
              role="presentation"
              height={100}
              width={100}
              src="/assets/shaqshake.gif"
            />
          </span>
          .
        </motion.p>
        <motion.p
        // animate={anim}
        // // initial={{ x: -50, opacity: 0 }}
        // // transition={{ duration: 1, delay: 17 }}
        // ref={ref}
        >
          The libraries and frameworks I tend to use are <b>React</b> and{' '}
          <b>NextJS</b>, <b>Jest</b>, <b>NodeJS</b>, <b>NestJS</b>, and{' '}
          <b>React Native</b>. I have used <b>GraphQL</b> and <b>SQL</b> with{' '}
          <b>MongoDB</b> and <b>FireBase</b>. I use WordPress and Shopify as an
          Eccomerce CMS, and their SDK for personalized experiences. I also
          wireframe and design with <b>AdobeXD</b> and <b>Illustrator</b>. The
          languages I work with are <b>Typescript</b>, <b>JavaScript</b>,{' '}
          <b>Python</b>, <b>Sass</b>, <b>CSS</b>, and <b>HTML</b>. I am
          currently learing <b>Solidity</b>, <b>Golang</b>, <b>FaunaDB</b>, and{' '}
          <b>Kotlin</b>.
        </motion.p>
        <motion.p
        // animate={animation}
        // // initial={{ x: 50, opacity: 0 }}
        // // transition={{ duration: 1, delay: 19 }}
        // ref={ref}
        >
          I love learning new tech, and trying new things. The reason I find
          this industry so interesting is because of the endless possibilities
          and creativity. One growing interest of mine is in the{' '}
          <b>Cryptocurrency</b> space and <b>Blockchain</b> Tech. I am a
          proponent of <b>DeFi</b>.
        </motion.p>
        <span className="social-container">
          <SocialIcons />
        </span>
      </div>
      <div className="skill">
        <img
          src="/assets/Josh Burgess Logo.svg"
          height={400}
          width={400}
          alt="Logo"
        />
      </div>
    </section>
  );
}

export default About;
