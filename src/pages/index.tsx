import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

//Components
import Nav from '../components/parts/Nav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import MobileMenu from '../components/parts/MobileMenu';
import MainLoading from '../components/Animations/MainLoading';

//Landing Page
const Home: React.FC = () => {
  const [loading, setLoading] = useState(false); //Set to true for loading animation

  return (
    <AnimatePresence>
      {loading ? (
        <MainLoading setLoading={setLoading} />
      ) : (
        <>
          <Hero />
          <Nav />
          <Projects />
          <Contact />
          <About />
          <Footer />
          <MobileMenu />
        </>
      )}
    </AnimatePresence>
  );
};

export default Home;
