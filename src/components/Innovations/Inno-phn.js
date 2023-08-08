import React, { useState } from 'react';
import './Inno-phn.css';

const Innophn = () => {
  const projects = [
    {
      imageUrl: 'https://github.com/Ayushkumawat/Portfolio/assets/76219349/851002cb-3c3e-4c57-b8f7-872a8547ec65',
      title: 'AI MedDiagnosis',
      githubLink: 'https://github.com/Ayushkumawat/AI-MedDiagnostics',
      description: 'AI MedDiagnostics is a web-based application that allows users to track their symptoms and predict the likelihood of having a disease based on their symptoms.',
    },
    {
      imageUrl: 'https://github.com/Ayushkumawat/Portfolio/assets/76219349/672a296b-6352-4739-9ccb-d7c91a86542c',
      title: 'Bus-Passenger Management System',
      githubLink: 'https://github.com/Ayushkumawat/Bus-Passenger-Management-using-Smart-Card-Technology',
      description: 'Bus-Passenger-Management will help in digitalizing local transportation system by providing QR code to consumers, it will help in managing user data by creating excel sheets.',
    },
    {
      imageUrl: 'https://github.com/Ayushkumawat/Portfolio/assets/76219349/f88b1c85-e5e2-4540-abca-aff8e33d7858',
      title: 'Facial Recognition with Gender Detection',
      githubLink: 'https://github.com/Ayushkumawat/Facial-Recognition-with-Gender-Detection',
      description: 'This project helps in real time facial recognition and gender detection. It uses only single clear image of person to detect and make predictions.',
    },
    {
      imageUrl: 'https://github.com/Ayushkumawat/Portfolio/assets/76219349/84498c31-fac6-4654-a761-de0720aabc06',
      title: 'Advance Aerial Vehicle Detection System',
      githubLink: 'https://github.com/Ayushkumawat/Advanced-Aerial-Drone-Detection-System',
      description: 'This project demonstrates real-time drone detection using YOLOv5 and OpenCV. It detects drones in real-time and displays a warning when a drone is detected inside or near a defined rectangle.',
    },
    {
      imageUrl: 'https://github.com/Ayushkumawat/Portfolio/assets/76219349/a242881e-bb6b-47a3-81e4-2d660c09d18f',
      title: 'News Classification - NLP',
      githubLink: 'https://github.com/Ayushkumawat/News-Classification-using-Natural-Language-Processing',
      description: 'A Machine Learning model which classifies weather the news given is genuine news or false news by the use of NLP (Natural Language Processing).',
    },
    {
      imageUrl: 'https://github.com/Ayushkumawat/Portfolio/assets/76219349/687091d6-3081-4a05-acf8-657c31056aa5',
      title: 'Resturant Order Automation',
      githubLink: 'https://www.github.com/Ayushkumawat',
      description: 'In this project we developed a system to automate the ordering & billing process in resturants. I also got a patent on this.',
    }
    

  ];
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="mobile-container">
      
      {projects.map((project, index) => (
        
        <div
          key={index}
          className={`mobile-card ${selectedImage === index ? 'selected' : ''}`}
          onClick={() => handleImageClick(index)}
        >
          {/* Add heading for each image */}
          <h2>{project.title}</h2>
          <img src={project.imageUrl} alt={`Project ${index + 1}`} />
          <div className="mobile-card-details">
            {selectedImage === index && (
              <>
                <h1>{project.title}</h1>
                <div className='ico'>
                  <a href={project.githubLink} target='_blank'>
                    <i className='bx bxl-github'></i>
                  </a>
                </div>
                <div className='card'>
                  <p>{project.description}</p>
                </div>
              </>
            )}
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Innophn;
