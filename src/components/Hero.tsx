import React from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import SocialIcons from '../components/parts/SocialIcons';
import Image from 'next/image';
import styles from '../styles/Hero.module.scss';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Particles from 'react-particles-js';
import ParticlesConfig from '../config/ParticlesConfig';

const Hero: React.FC = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <section className="hero">
      <div className={styles.background}>
        <Particles
          height="90vh"
          width="90vw"
          zIndex="-99"
          params={ParticlesConfig}
        />
      </div>
      <div className={styles.header}>
        <Link to="/" onClick={toggleHome}>
          <h1 className={styles.title}>Josh Burgess</h1>
        </Link>
        <span className={styles.socials}>
          <SocialIcons />
        </span>
      </div>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Image
            className={styles.image}
            src="/Icon.svg"
            height={330}
            width={300}
          />
        </motion.div>
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString('Web Developer')
              .pauseFor(2500)
              .deleteAll()
              .typeString('UI/UX Designer')
              .pauseFor(2500)
              .deleteAll()
              // .typeString('Mobile Developer')
              // .pauseFor(2500)
              // .deleteAll()
              // .typeString('Blockchain Developer')
              // .pauseFor(2500)
              // .deleteAll()
              .start();
          }}
        />
        <div className={styles.nav}>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            <a className={styles.link}>Projects</a>
          </Link>
          <span className={styles.div}> - </span>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            <a className={styles.link}>Contact Me</a>
          </Link>
          <span className={styles.div}> - </span>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            <a className={styles.link}>About</a>
          </Link>
        </div>
      </div>
      {/* <div>
          <aclassName='arrow blogme'>Look at My Blog!</a>
          <a className='arrow'></a>
        </div> */}
      <div className={styles.scrolldwn}>
        <div className={styles.bubble}>
          <span className={styles.circle}></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
