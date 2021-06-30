/* eslint-disable @typescript-eslint/no-namespace */
import React, { useEffect } from 'react';
import Form from './parts/Form';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import ContactTitle from './parts/ContactTitle';

function Contact(): React.ReactElement {
  //AOS
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: { type: 'spring', duration: 0.8, delay: 0.5 }
      });
    } else {
      animation.start({
        opacity: 0,
        x: 50
      });
    }
  }, [inView]);

  return (
    <section className="contact">
      <div className="contact-title">
        <img
          className="contact-title"
          src="/assets/contact-title.svg"
          z-index="9"
          alt="Section title"
          height={420}
          width={1000}
        />
        {/* <ContactTitle /> */}
      </div>
      <h2 className="watermark_1">Let's Create Something!</h2>
      <div className="contact-container">
        <motion.span ref={ref} animate={animation}>
          <Form />
        </motion.span>
        <div className="contactSVG">
          <img
            src="/assets/Modern Technology. Isometric People. Man with Laptop..png"
            height={450}
            width={350}
            alt="flare"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
