import React from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import SocialIcons from '../components/parts/SocialIcons';
import Image from 'next/image';
import styles from '../styles/Hero.module.scss';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Particles from 'react-particles-js';

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
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1183.721462448409
                }
              },
              color: {
                value: '#e1e1e1'
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000'
                },
                polygon: {
                  nb_sides: 4
                },
                image: {
                  src: 'img/github.svg',
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.44093831673801875,
                random: false,
                anim: {
                  enable: false,
                  speed: 0.05,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 0,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  size_min: 0.1,
                  sync: true
                }
              },
              line_linked: {
                enable: true,
                distance: 192.40944730386272,
                color: '#d4d4d4',
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 1.25,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                },
                onclick: {
                  enable: true,
                  mode: 'bubble'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 419.58041958041963,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 2,
                  duration: 2,
                  opacity: 8
                },
                repulse: {
                  distance: 80,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
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
          className={styles.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Image src="/Icon.svg" height={330} width={300} />
        </motion.div>
        <div className={styles.type}>
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
        </div>
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
