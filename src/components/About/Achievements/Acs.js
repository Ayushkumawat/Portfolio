import React, { useState, useEffect } from 'react';
import './Achievements.css';

const images = [
  // Images data
  {
    name: 'NVIDIA',
    loc: 'AI Specialist',
    src: "I am proud to hold the Jetson AI Specialist certificate from NVIDIA, which recognizes my expertise in developing AI applications for edge devices using the powerful NVIDIA Jetson platform. This showcases my potential in areas such as computer vision, machine learning, deep learning frameworks, and deploying AI models on edge devices. With this credential, I am equipped to create intelligent solutions for industries such as robotics, computer vision, and autonomous systems.",
    url: "./achive/jetson.jpg",
  },
  {
    name: 'Google | AMD | GeeksforGeeks',
    loc: 'Hackathon Winner',
    src: 'ANJHXftvvJ8',
    url: './achive/hack.jpg',
  },
  {
    name: 'Intellectual Property India',
    loc: 'Patent - Voice Automated Virtual Ordering System',
    src: 'pTn26knnKVw',
    url: './achive/patent.jpg',
  },
  {
    name: 'District Chess Association',
    loc: 'Chess Player',
    src: '73aocAAt7rs',
    url: './achive/chess.jpg',
  },
  {
    name: 'State-Level Competition',
    loc: 'Roll Ball Player',
    src: 'aPDCEoW7B78',
    url: './achive/softball.jpg',
  },
  {
    name: 'State-Level Competition<',
    loc: 'Soft Ball Player',
    src: 'Akz00I_GGjU',
    url: './achive/rollball.jpg',
  }
];

const Achievements = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentlyDemoing, setCurrentlyDemoing] = useState(false);

  const slidesPerPage = () =>
    window.innerWidth > 1700 ? 4 : window.innerWidth > 1200 ? 3 : 2;
  const maxPageCount = () => Math.ceil(slideCount() / slidesPerPage()) - 1;

  const slideCount = () => images.length;

  const goToPage = (pageNumber = 0) => {
    const page = Math.min(maxPageCount(), Math.max(0, pageNumber));
    setCurrentPage(page);
    const slides = slidesPerPage();
    document.getElementById('slides').style.transform = `translate3D(calc(${page} * -${slides * 80}vw), 0, 0)`;
  };
  
  const sleep = (time) => new Promise((res) => setTimeout(res, time));

  const hoverSlide = (index) => {
    const slideChildren = document.getElementById('slides').children;
    if (index in slideChildren) {
      slideChildren[index].classList.add('hover');
    }
  };

  const unhoverSlide = (index) => {
    const slideChildren = document.getElementById('slides').children;
    if (index in slideChildren) {
      slideChildren[index].classList.remove('hover');
    }
  };

  const demo = async () => {
    if (currentlyDemoing) {
      return;
    }
    setCurrentlyDemoing(true);
    if (currentPage !== 0) {
      goToPage(0);
      await sleep(800);
    }
    const slides = slidesPerPage();
    const pageSeq_ = { 2: [1, 2, 1], 3: [1, 2, 1 / 3], 4: [1, 1, 0] };
    const pageSeq = pageSeq_[slides] || pageSeq_[4];
    const slideSeq_ = { 2: [2, 4, 3], 3: [3, 6, 2], 4: [3, 6, 2] };
    const slideSeq = slideSeq_[slides] || slideSeq_[2];
    await sleep(300);
    goToPage(pageSeq[0]);
    await sleep(500);
    hoverSlide(slideSeq[0]);
    await sleep(1200);
    goToPage(pageSeq[1]);
    unhoverSlide(slideSeq[0]);
    await sleep(500);
    hoverSlide(slideSeq[1]);
    await sleep(1200);
    goToPage(pageSeq[2]);
    unhoverSlide(slideSeq[1]);
    await sleep(300);
    hoverSlide(slideSeq[2]);
    await sleep(1600);
    goToPage(0);
    unhoverSlide(slideSeq[2]);
    setCurrentlyDemoing(false);
  };

  useEffect(() => {
    // Auto start demo on component mount
    sleep(100).then(demo);
  }, []);

  return (
    <div id="hero-slides">
      <div id="header">
        
        <div id="menu" onClick={demo}>
          <span>Play</span>
          <div id="hamburger">
            <div className="slice" />
            <div className="slice" />
            <div className="slice" />
          </div>
        </div>
      </div>
      <div id="slides-cont">
        <div
          className="button"
          id="next"
          onClick={() => !currentlyDemoing && goToPage(currentPage + 1)}
        >
          <span></span>
          <span></span>
        </div>
        <div
          className="button"
          id="prev"
          onClick={() => !currentlyDemoing && goToPage(currentPage - 1)}
        >
          <span></span>
          <span></span>
        </div>
        <div id="slides">
        {images.map((img, i) => {
    const slideStyle = {
      backgroundImage: `url(${img.url})`, // Use img.url here
      backgroundSize: 'contain', // Add this line to set background size
      backgroundRepeat: 'no-repeat', // Add this line to prevent repeating
      backgroundPosition: 'center', // Add this line to center the image
    };
            return (
              <div key={i} className="slide" style={slideStyle}>
                <div className="number">{'0' + (i + 1)}</div>
                <div className="body">
                <div className="headline">{img.name}</div>
                <div className="location">{img.loc}</div>
                  
                  <a
                    className="link"
                    href={`https://unsplash.com/photos/${img.src}`}
                    target="_blank"
                  >
                    View on Unsplash
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div id="next-catch"></div>
        <div id="prev-catch"></div>
      </div>
      
    </div>
  );
};

export default Achievements;
