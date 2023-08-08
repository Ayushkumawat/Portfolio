import React from 'react';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import ParticlesBackground from './components/Background/ParticlesBackground';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Innovations from './components/Innovations/Innovations';
import Dashboard from './components/Dashboard/Dashboard'
import Contact from './components/Contact/Contacts';
import Timeline from './components/About/Timeline/Timeline';
import Achievements from './components/About/Achievements/Achievements';
import Certifications from './components/About/Certifications/Certifications';

export default function App() {
  return (
    <ThemeProvider className="ThemeProvider"> 
      <ParticlesBackground />
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Innovations id="innovations" />
      <Dashboard id="dashboard" />
      <Contact id="contact" />
    </ThemeProvider>
  );
}