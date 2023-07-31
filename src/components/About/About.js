import React from 'react'
import './About.css'
import Taskbar from './Taskbar/Taskbar'
import AboutMe from './AboutMe/AboutMe'
import Timeline from './Timeline/Timeline'
import Achievements from './Achievements/Achievements'
import Certifications from './Certifications/Certifications'

export default function About() {
  return (
    <section className='about-section'>
      
      <div className='larg'>
        <Taskbar/>
      </div>

      <div className='smal'>
        <AboutMe/>
      </div>
    </section>
  )
}