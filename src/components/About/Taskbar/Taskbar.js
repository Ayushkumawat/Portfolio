import React, { useState } from 'react';
import './Taskbar.css';
import AboutMe from '../AboutMe/AboutMe';
import Timeline from '../Timeline/Timeline'
import Achivements from '../Achievements/Achievements'
import Certifications from '../Certifications/Certifications'

export default function Taskbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(activeIndex);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const handleTabHover = (zindex) => {
    setHoverIndex(zindex);
  };

  const handleTabLeave = () => {
    setHoverIndex(activeIndex);
  };

  return (

    <div className="task-bar">
      <div className="taskbar-nav">
      <button
          className={`taskbar-button ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
          onMouseEnter={() => handleTabHover(0)}
          onMouseLeave={handleTabLeave}
        >
          About
        </button>
        <button
          className={`taskbar-button ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
          onMouseEnter={() => handleTabHover(1)}
          onMouseLeave={handleTabLeave}
        >
          Timeline
        </button>
        <button
          className={`taskbar-button ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
          onMouseEnter={() => handleTabHover(2)}
          onMouseLeave={handleTabLeave}
        >
          Achievements
        </button>
        <button
          className={`taskbar-button ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
          onMouseEnter={() => handleTabHover(3)}
          onMouseLeave={handleTabLeave}
        >
          Certifications
        </button>
        <div
          className={`taskbar-animation 
          ${hoverIndex === 0 ? 'start-abou' : ''} 
          ${hoverIndex === 1 ? 'start-time' : ''}
          ${hoverIndex === 2 ? 'start-achive' : ''} 
          ${hoverIndex === 3 ? 'start-cert' : ''}`
          }
        ></div>
      </div>
      <div className='dsply'>
      {activeIndex === 0 && <AboutMe />}
      {activeIndex === 1 && <Timeline/>}
      {activeIndex === 2 && <Achivements />}
      {activeIndex === 3 && <Certifications />}
      </div>
    </div>
  );
}
