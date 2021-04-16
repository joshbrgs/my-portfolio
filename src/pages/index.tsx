import React from 'react';

//Components
import Nav from '../components/parts/Nav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import MobileMenu from '../components/parts/MobileMenu';

//Landing Page
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Nav />
      <Projects />
      <Contact />
      <About />
      <Footer />
      <MobileMenu />
    </>
  );
};

export default Home;
