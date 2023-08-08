import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './Home.css'

import Typed from "react-typed"
export default function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
      VanillaTilt.init(card, {
        max: 0,
        speed: 4
      });
    });
  }, []);
  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('section');
    const sectionTop = sections[index].offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });
  }
  return (
    <section className="section_outer">
      <div className='home-section'>
      <div className='home-content'>
        <h3>Hey there!, It's Me</h3>
        <h1>Ayush Kumawat</h1>
        <h3>And I'm a <span id="types"><Typed strings={["Frontend Developer", "Python Programmer", "AI - ML Developer"]} typeSpeed={80} backSpeed={80} loop /></span> </h3>
        <div className='card'>
        <p>Greetings and welcome! I am Ayush Kumawat, a dedicated B.Tech student 
          exploring the boundless horizons of Artificial Intelligence and Data Science. With a strong focus on machine 
          learning and real-time object detection, I specialize in building, 
          training, and integrating ML models on websites. 
          I've actively participated in hackathons, achieving recognition 
          and certification as an AI specialist by NVIDIA for deploying projects on Jetson Nano.</p>
        </div>
        <div className="social-media">
          <a href='https://www.linkedin.com/in/ayush-kumawat/'><i className='bx bxl-linkedin'></i></a>
          <a href='https://www.github.com/Ayushkumawat'><i className='bx bxl-github'></i></a>
          <a href="mailto:ayu.kumawat2002@gmail.com"><i className='bx bxl-gmail'></i></a>
          <a href='https://www.linkedin.com/in/ayush-kumawat/'><i className='bx bxl-twitter'></i></a>
        </div>
        <div className='btns'>
        <button onClick={() => scrollToSection(3)} className='btn'>Proficiency Dashboard</button>
        <button onClick={() => scrollToSection(4)} className='btn'>Let's work together !</button>
        </div>
      </div>
      <div className='home-img'>
        <img src='https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/img_1.png' alt=""></img>
        <span className='circle-spin'></span>
      </div>
      </div>
    </section>
  )
}