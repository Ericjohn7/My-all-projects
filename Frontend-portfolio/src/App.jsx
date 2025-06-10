import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Resume />
      <Education />
      <Certifications />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}

export default App;
