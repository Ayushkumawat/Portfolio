import React from 'react'
import './Timeline.css'
export default function Timeline() {
  return (
    <div className="outer-timeline">
      <h1>Time<span>line</span></h1>
    
    <div className='timeline'>

      <div className="container left-container">
      <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/time/acm.jpg" alt=""/>
        <div className="text-box-left">
            <h2>Chairperson of IAC SAGE ACM Student Chapter</h2>
            <small>Jun 2023 - Present</small>
            <p>As the Chairperson of the esteemed Association for Computing Machinery (ACM) Student Chapter, I have had the honor of leading a dynamic community of passionate and talented individuals in the field of computer science and technology.</p>
            <span className='left-arrow'></span>
        </div>
      </div>

      <div className="container right-container">
        <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/time/gfg.jpg" alt=""/>
        <div className="text-box-right">
            <h2>Design & Branding Head at GeeksforGeeks Student Chapter</h2>
            <small>Oct 2022 - Present</small>
            <p>Being a part of the Student Chapter Circle at Geeks for Geeks was an enriching experience for me. As a member of this community, I had the opportunity to connect with like-minded individuals who were passionate about computer science and technology.</p>
            <span className='right-arrow'></span>
        </div>
      </div>

      <div className="container left-container">
      <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/time/person.jpg" alt=""/>
        <div className="text-box-left">
            <h2>Machine Learning Intern at Personifwy</h2>
            <small>Aug 2022 - Nov 2022</small>
            <p>In my experience as ML intern I have worked on news classification project which has given me a hand-on experience with NLP and data analysis techniques.</p>
            <span className='left-arrow'></span>
        </div>
      </div>

      <div className="container right-container">
        <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/time/sage.jpg" alt=""/>
        <div className="text-box-right">
            <h2>Sage University, Indore</h2>
            <small>2020 - 2024</small>
            <p>B.Tech Specialization in Artificial Intelligence & Data Science (Computer Science Engineering)</p>
            <span className='right-arrow'></span>
        </div>
      </div>

      <div className="container left-container">
      <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/time/school.png" alt=""/>
        <div className="text-box-left">
            <h2>Guru Ramdas Public School</h2>
            <small>2019 - 2020</small>
            <p>Science Stream : Physics, Chemistry, Biology & Mathematics</p>
            <span className='left-arrow'></span>
        </div>
      </div>

      <div className="container right-container">
      <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/time/school.png" alt=""/>
        <div className="text-box-right">
            <h2>Sai Shree International Academy</h2>
            <small>2016 - 2018</small>
            <p>Major Subjects : Science, Social Studies, Mathematics</p>
          <p>Languages : Hindi & English</p>
            <span className='right-arrow'></span>
        </div>
      </div>

      <div className="container left-container">
      <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/time/school.png" alt=""/>
        <div className="text-box-left">
            <h2>St. Joseph's Convent School</h2>
            <small>2008 - 2015</small>
            <p>Languages : Sanskrit, Hindi & English</p>
            <span className='left-arrow'></span>
        </div>
      </div>
      </div>
    </div>
  )
}
