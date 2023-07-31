import React from 'react';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import ParticlesBackground from './components/Background/ParticlesBackground';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Innovations from './components/Innovations/Innovations';
import Dashboard from './components/Dashboard/Dashboard'
import Contact from './components/Contact/Contact';
import AboutMe from './components/About/AboutMe/AboutMe';
import Timeline from './components/About/Timeline/Timeline';
import Achievements from './components/About/Achievements/Achievements';
import Certifications from './components/About/Certifications/Certifications';

export default function App() {
  
  return (
    <ThemeProvider>
      <ParticlesBackground />
      <Navbar />
      <div className="hemeProvider">

        <Home id="home" />
        <About id="about" />
        <div className="mob">
          <div className='tim'>
            <Timeline/>
            <h1>My<span>Achievements</span></h1>
            <section><Achievements/></section>
          </div>
          <section><Certifications/></section>
        </div>
        <Innovations id="innovations" />
        <Dashboard id="dashboard" />
        <Contact id="contact" />
      </div>
    </ThemeProvider>
  );
}