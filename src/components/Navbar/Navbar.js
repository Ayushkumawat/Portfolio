import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../ThemeContext';
import './Navbar.css'

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [active_nav, set_active_nav] = useState(0);
  const [tline, set_tline] = useState(0);

  useEffect(() => {
    const container = document.querySelector('.outer_nav'); // Updated the container class name here
    const sections = container.querySelectorAll('section');

    const handleScroll = () => {
      sections.forEach((section, index) => {
        const alignment = getComputedStyle(section).scrollSnapAlign; // Get the scroll alignment
        if (alignment === 'start' || alignment === 'both') {
          // Check if the section is snapped to the start
          set_active_nav(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('section');
    const sectionTop = sections[index].offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });
    set_active_nav(index);
  };
  
  function toggleTheme() {
    const body = document.querySelector("body");
    const moon = document.querySelector(".moon");
    const tdnn = document.querySelector(".tdnn");
  
    body.classList.toggle("light");
    moon.classList.toggle("sun");
    tdnn.classList.toggle("day");
    toggleDarkMode();
  }

  return (
    <div className="outer_nav">
    <div className={`section-navbar ${darkMode ? 'dark-mode' : ''}`}>
      
      <a href="/Home" className='logo'>Ayush Kumawat<span>.</span></a>
      
      <button className="tdnn" onClick={toggleTheme}>
          <div className="moon"></div>
        </button>
      
        <i onClick={()=>{set_tline(tline===0?1:0)}} className='bx bx-menu' id="menu-icon"></i>

      <nav className="navbar">
        <a
    className={active_nav === 0 ? 'active' : ''}
    onClick={() => scrollToSection(0)}
  >
    Home
  </a>
  <a
    className={active_nav === 1 ? 'active' : ''}
    onClick={() => scrollToSection(1)}
  >
    About Me
  </a>
  <a
    className={active_nav === 2 ? 'active' : ''}
    onClick={() => scrollToSection(2)}
  >
    Innovations
  </a>
  <a
    className={active_nav === 3 ? 'active' : ''}
    onClick={() => scrollToSection(3)}
  >
    Dashboard
  </a>
  <a
    className={active_nav === 4 ? 'active' : ''}
    onClick={() => scrollToSection(4)}
  >
    Contact
  </a>
      </nav>
     
      
     
    </div>
     <nav className={`navbar1 ${tline===1?"navbar1_active":""}`}>
     <a onClick={()=>{scrollToSection(0);set_tline(tline===0?1:0)}} className={active_nav === 0 ? 'active btn' : 'btn'}>Home</a>
     <a onClick={()=>{scrollToSection(1);set_tline(tline===0?1:0)}} className={active_nav === 1 ? 'active btn' : 'btn'}>About</a>
     <a onClick={()=>{scrollToSection(2);set_tline(tline===0?1:0)}} className={active_nav === 2 ? 'active btn' : 'btn'}>Innovations</a>
     <a onClick={()=>{scrollToSection(3);set_tline(tline===0?1:0)}} className={active_nav === 3 ? 'active btn' : 'btn'}>Dashboard</a>
     <a onClick={()=>{scrollToSection(4);set_tline(tline===0?1:0)}} className={active_nav === 4 ? 'active btn' : 'btn'}>Contact</a>
   </nav>
   </div>
  );
}
