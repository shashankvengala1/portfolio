import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Cerifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main className="container mx-auto px-6 py-10 space-y-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Cerifications />
        <Contact />
      </main>
    </div>
  );
}
