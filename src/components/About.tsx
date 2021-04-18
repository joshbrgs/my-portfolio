import SocialIcons from './parts/SocialIcons';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About(): React.ReactElement {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const anim = useAnimation();

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
        <h2
          className="about-title"
          style={{ transform: `translateY(${offsetY * 0.1}px)` }}
        >
          About
        </h2>
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
          I was down the rabbit hole of learning code.
        </motion.p>
        <motion.p
        // animate={anim}
        // // initial={{ x: -50, opacity: 0 }}
        // // transition={{ duration: 1, delay: 17 }}
        // ref={ref}
        >
          The libraries and frameworks I tend to use are <b>React</b> and{' '}
          <b>NextJS</b>, <b>Jest</b>, <b>Web3</b>, <b>Truffle</b>, and{' '}
          <b>Flutter</b>. I have used <b>GraphQL</b> and <b>SQL</b>. I use
          Shopify as an Eccomerce CMS, and their SDK for personalized
          experiences. The languages I work with are <b>Typescript</b>,{' '}
          <b>JavaScript</b>, <b>Python</b>, <b>Sass</b>, <b>CSS</b>, and{' '}
          <b>HTML</b>. I am currently learing <b>Solidity</b>, <b>Dart</b>,{' '}
          <b>Golang</b>, <b>NodeJS</b>, and <b>Kotlin</b>.
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
        <span>
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
