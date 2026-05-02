import React from 'react';
import { motion } from 'framer-motion';

// components
import Nav from './components/Nav';
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <Nav/>
     <Hero/>
     <About/>
     <Projects/>
     <Experience/>
     <Certificates/>
     <Contact/>
    </>
  );
}

export default App;