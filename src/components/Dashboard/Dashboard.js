import React, { useEffect, useRef } from 'react';
import Circular from './Circular/Circular';
import Linear from './Linear/Linear'
import VanillaTilt from 'vanilla-tilt';
import './Dashboard.css';
import Chartlink from './Chart/Chart.js';
import RadarChart from './Radar/Radar';
// import Professional from './Skills/Professional'

export default function Dashboard() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
      VanillaTilt.init(card, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });
    });
  }, []);
  return (
    <section className="services-section" id="dashboard">
      <div className='uper'>
        <div className='prof'>
        
          <div className='content-profskills'>
          <h1>Professional <span>Skills</span></h1>
            <Circular percentage={77} text={'Problem Solving'}/>
            <Circular percentage={80} text={'Collaboration & Teamwork'}/>
            <Circular percentage={74} text={'Communication'}/>
            <Circular percentage={70} text={'Leadership'}/>
            <Circular percentage={67} text={'Time Management'}/>
            <Circular percentage={75} text={'Adaptability'}/>
            <Circular percentage={65} text={'Continous Learning'}/>
            <Circular percentage={78} text={'Professionalism'}/>
          </div>
        </div>

        <div className='tech'>
        
          <div className='content-techskills'>
          <h1>Technical <span>Skills</span></h1>
            <Linear percentage={100} text={'Python'}/> 
            <Linear percentage={95} text={'Java'}/> 
            <Linear percentage={75} text={'React Js'}/> 
            <Linear percentage={73} text={'SQL'}/> 
            <Linear percentage={88} text={'JavaScript - HTML - CSS'}/> 
            <Linear percentage={82} text={'Web Scraping'}/> 
            <Linear percentage={65} text={'Deep Learning'}/> 
            <Linear percentage={63} text={'NLP'}/> 
            <Linear percentage={79} text={'Artificial Intelligence'}/>
            <Linear percentage={90} text={'Machine Learning'}/>
          </div>
        </div>
      </div>
      
      <div className='hart'>
      <Chartlink/>
      </div>
      {/* <RadarChart/> */}
    </section>
  );
}
