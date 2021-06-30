import React from 'react';
import { Link as LinkS } from 'react-scroll';
import Link from 'next/link';
import styles from '../styles/Hero.module.scss';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
//Refactor Typewriter

const Hero: React.FC = () => {
  const fade = {
    hidden: {
      opacity: 0
    },
    show: { opacity: 1, transition: { delay: 0.2, duration: 0.8 } }
  };
  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="show"
      variants={fade}
    >
      <div className={styles.background} />
      <div className={styles.imageM}>
        <img src="/assets/Icon.svg" height={50} width={70} alt="Icon" />
      </div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.image}>
            <img src="/assets/Icon.svg" height={450} width={400} alt="Icon" />
          </div>
          <div className={styles.col}>
            <div className={styles.cta}>
              <h2 className={styles.headers}>Creating</h2>
              <h2 className={styles.headersB}>Better</h2>
              <h2 className={styles.headers}>Experiences</h2>
            </div>
            <div className={styles.type}>
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(' Web Developer')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(' UI/UX Designer')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(' Mobile Developer')
                    .pauseFor(2500)
                    .deleteAll()
                    // .typeString('Blockchain Developer')
                    // .pauseFor(2500)
                    // .deleteAll()
                    .start();
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.nav}>
          <LinkS
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            <a className={styles.link}>Projects</a>
          </LinkS>
          <span className={styles.div}> - </span>
          <LinkS
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            <a className={styles.link}>Contact Me</a>
          </LinkS>
          <span className={styles.div}> - </span>
          <LinkS
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            <a className={styles.link}>About</a>
          </LinkS>
          <span className={styles.div}> - </span>
          <Link href="/blog">
            <a className={styles.blog}>Blog</a>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
