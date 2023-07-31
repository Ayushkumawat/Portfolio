import React, { useEffect, useRef } from 'react';
import './AboutMe.css'
import VanillaTilt from 'vanilla-tilt';
export default function AboutMe() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
      VanillaTilt.init(card, {
        max: 15,
        speed: 4,
        glare: true,
        'max-glare': 0.3,
      });
    });
  }, []);
  return (
    <div className="about-content">
      <div className='card'>
          <img src='https://github.com/Ayushkumawat/Portfolio/assets/76219349/90754856-1691-49d5-86c3-aae9cb284c0b' alt=""></img>
          <h1>Ayush Kumawat</h1>
          <h2>Data Analyst</h2>
          <h3>B.Tech (Hons.) Computer Science Engineer</h3>
          <h4>Specilization in Artifical Intelligence and Data Science</h4>
          <p>+91 - 9098984098 | ayu.kumawat2002@gmail.com</p>
      </div>
      <div className='cont'>
        <h2 className='heading'>About<span>Me</span></h2>
        <p>I am a passionate Artificial Intelligence and Machine Learning enthusiast.
           My interest lies in the fields of Machine Learning, Computer Vision, Artificial Intelligence, and Data Science.
           I have completed a project related to real-time object detection, prediction, and classification, 
           which has given me a solid foundation in the practical applications of these technologies.
           This experience has taught me the importance of attention to detail, collaboration, and adaptability in the development of effective AI and Data Science solutions. 
           I am eager to learn from experienced professionals and contribute to projects that have a real impact.</p>
        {/* <p>I am a passionate B.Tech student in Artificial Intelligence and Data Science, currently in my third year of studies. My interest lies in the fields of Machine Learning, Computer Vision, Artificial Intelligence, and Data Science, and I am actively seeking internships in these areas.I have completed projects related to real-time object detections, predictions, and classifications, which has given me a solid foundation in the practical applications of these technologies. This experience has taught me the importance of attention to detail, collaboration, and adaptability in the development of effective AI and Data Science solutions.I am now looking to further develop my skills and gain hands-on experience through internships in these areas. Specifically, I am seeking opportunities to work on projects related to Computer Vision, Machine Learning, Artificial Intelligence, and Data Science. I am eager to learn from experienced professionals and contribute to projects that have a real impact.</p> */}
      <a href='#link' className='btn'>Read More</a>
    </div>
    </div>
  )
}
