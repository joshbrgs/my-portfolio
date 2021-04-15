/* eslint-disable @typescript-eslint/no-namespace */
import React, { useEffect } from 'react';
import Form from './parts/Form';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
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
        <Image src="/assets/contact-title.svg" height={670} width={700} />
        {/* <ContactTitle /> */}
      </div>
      <div className="contact-container">
        <motion.span ref={ref} animate={animation}>
          <Form />
        </motion.span>
      </div>
    </section>
  );
}

export default Contact;
