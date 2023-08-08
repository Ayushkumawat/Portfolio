import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import './Achievements.css';

const Achievements = () => {
  const sWrapperRef = useRef(null);
  const slideImageRef = useRef(null);
  const slideDateRef = useRef(null);
  const slideTitleRef = useRef(null);
  const slideTextRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleButtonClick = useCallback((next) => {
    setCurrentSlide((prevSlide) => {
      let newSlide;
      const sWrapper = sWrapperRef.current;
      const sItem = sWrapper.querySelectorAll('.slide');
      const sWidth = sItem[0].clientWidth;
      const sCount = sItem.length;

      if (next) {
        newSlide = prevSlide < sCount - 1 ? prevSlide + 1 : 0;
      } else {
        newSlide = prevSlide > 0 ? prevSlide - 1 : sCount - 1;
      }

      gsap.to(sWrapper, { x: `-${sWidth * newSlide}`, duration: 0.4 });

      // CONTENT ANIMATIONS
      const fromProperties = { autoAlpha: 0, x: '-50', y: '-10' };
      const toProperties = { autoAlpha: 0.8, x: '0', y: '0' };

      gsap.fromTo(slideImageRef.current, { autoAlpha: 0, y: '40' }, { autoAlpha: 1, y: '0', duration: 1 });
      gsap.fromTo(slideDateRef.current, fromProperties, { ...toProperties, duration: 0.4 });
      gsap.fromTo(slideTitleRef.current, fromProperties, { ...toProperties, duration: 0.6 });
      gsap.fromTo(slideTextRef.current, fromProperties, { ...toProperties, duration: 0.8 });

      return newSlide;
    });
  }, []);

  useEffect(() => {
    const sWrapper = sWrapperRef.current;
    const sItem = sWrapper.querySelectorAll('.slide');
    const sWidth = sItem[0].clientWidth;
    const sCount = sItem.length;
    const sTotalWidth = sCount * sWidth;

    sWrapper.style.width = `${sTotalWidth}px`;
    gsap.set(sWrapper, { x: 0 });

    // Optional: Autoslide every 5 seconds (uncomment to enable)
    // const autoSlideInterval = setInterval(() => handleButtonClick(true), 5000);

    // Cleanup function
    return () => {
      // clearInterval(autoSlideInterval); // Uncomment if autoslide is enabled
    };
  }, [handleButtonClick]);

  return (
    <div className="slider">
      <h1>My<span>Achievements</span></h1>
      <div ref={sWrapperRef} className="slider-wrapper flex">
        {/* Add slides dynamically */}
        {achievementsData.map((achievement, index) => (
          <div key={index} className="slide flex">
            <div className="slide-image">
              <img src={achievement.image} alt={`Slide ${index + 1}`} />
              <div className="overlay"></div>
            </div>
            <div className="slide-content">
              <div ref={slideDateRef} className="slide-date">
                {achievement.date}
              </div>
              <div ref={slideTitleRef} className="slide-title">
                {achievement.title}
              </div>
              <div ref={slideTextRef} className="slide-text">
                {achievement.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button title="Previous" className="arrow slider-link prev" onClick={() => handleButtonClick(false)}></button>
        <button title="Next" className="arrow slider-link next" onClick={() => handleButtonClick(true)}></button>
      </div>
    </div>
  );
};



// Dummy achievementsData
const achievementsData = [
  {
    image: 'https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/achive/Jetson.jpg',
    date: 'NVIDIA',
    title: 'AI Specialist',
    text: 'I am proud to hold the Jetson AI Specialist certificate from NVIDIA, which recognizes my expertise in developing AI applications for edge devices using the powerful NVIDIA Jetson platform. This showcases my potential in areas such as computer vision, machine learning, deep learning frameworks, and deploying AI models on edge devices. With this credential, I am equipped to create intelligent solutions for industries such as robotics, computer vision, and autonomous systems.',
  },
  {
    image: 'https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/achive/hack.jpg',
    date: 'Google | AMD | GeeksforGeeks',
    title: 'Hackathon Winner',
    text: 'This is the description for the second achievement. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: 'https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/achive/patent.jpg',
    date: 'Intellectual Property India',
    title: 'Patent - Voice Automated Virtual Ordering System',
    text: 'This is the description for the third achievement. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    image: 'https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/achive/chess.jpg',
    date: 'District Chess Association',
    title: 'Chess Player',
    text: "I am chess enthusuiast I won a District Level chess competition organised by District's Chess Association and secured second position, I love to do things which require critical thinking and planning ",
  },
  {
    image: 'https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/achive/rollball.jpg',
    date: 'State-Level Competition',
    title: 'Roll Ball Player',
    text: 'This is the description for the third achievement. Duis aute irure dolor in reprehenderit in ',
  },
  {
    image: 'https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/achive/softball.jpg',
    date: 'State-Level Competition',
    title: 'Soft Ball Player',
    text: 'This is the description for the third achievement. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  // Add more achievements as needed
];

export default Achievements;