import React, { useState } from 'react';
import './Inno-phn.css';

const Innophn = () => {
  const projects = [
    {
      imageUrl: 'https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_1.png',
      title: 'AI MedDiagnosis',
      githubLink: 'https://github.com/Ayushkumawat/AI-MedDiagnostics',
      description: 'AI MedDiagnostics is a web-based application that allows users to track their symptoms and predict the likelihood of having a disease based on their symptoms.',
    },
    {
      imageUrl: 'https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_2.png',
      title: 'Bus-Passenger Management System',
      githubLink: 'https://github.com/Ayushkumawat/Bus-Passenger-Management-using-Smart-Card-Technology',
      description: 'Bus-Passenger-Management will help in digitalizing local transportation system by providing QR code to consumers, it will help in managing user data by creating excel sheets.',
    },
    {
      imageUrl: 'https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_3.png',
      title: 'Facial Recognition with Gender Detection',
      githubLink: 'https://github.com/Ayushkumawat/Facial-Recognition-with-Gender-Detection',
      description: 'This project helps in real time facial recognition and gender detection. It uses only single clear image of person to detect and make predictions.',
    },
    {
      imageUrl: 'https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_4.png',
      title: 'Advance Aerial Vehicle Detection System',
      githubLink: 'https://github.com/Ayushkumawat/Advanced-Aerial-Drone-Detection-System',
      description: 'This project demonstrates real-time drone detection using YOLOv5 and OpenCV. It detects drones in real-time and displays a warning when a drone is detected inside or near a defined rectangle.',
    },
    {
      imageUrl: 'https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_5.png',
      title: 'News Classification - NLP',
      githubLink: 'https://github.com/Ayushkumawat/News-Classification-using-Natural-Language-Processing',
      description: 'A Machine Learning model which classifies weather the news given is genuine news or false news by the use of NLP (Natural Language Processing).',
    },
    {
      imageUrl: 'https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_6.png',
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
