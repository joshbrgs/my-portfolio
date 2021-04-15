import React from 'react';

//Components
import Nav from '../components/parts/Nav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import Hamburger from '../components/parts/LowMenu';

//Landing Page
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Nav />
      <Hamburger />
      <Projects />
      <Contact />
      <About />
      <Footer />
    </>
  );
};

export default Home;
