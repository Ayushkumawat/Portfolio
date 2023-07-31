import React, { useEffect } from 'react';
import './Inno-desk.css';

const Innodesk = () => {
  useEffect(() => {
    const docWidth = document.body.offsetWidth;
    const wrap = document.getElementById('wrap');
    const images = document.querySelectorAll('#wrap .hb');
    const slidesWidth = wrap.offsetWidth;

    const handleResize = () => {
      const newDocWidth = document.body.offsetWidth;
      // slidesWidth = wrap.offsetWidth;
    };

    window.addEventListener('resize', handleResize);

    document.addEventListener('mousemove', (e) => {
      const mouseX = e.pageX;
      const offset =
        (mouseX / docWidth) * slidesWidth - mouseX / 2;

      images.forEach((image) => {
        image.style.webkitTransform = `translate3d(${-offset}px, 0, 0)`;
        image.style.transform = `translate3d(${-offset}px, 0, 0)`;
      });
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='innovation' id="Innop">
      <h2>My <span>Projects</span></h2>
    <div id="wrap">
      <a className="hb">
        <div className="c">
          <img src="https://github.com/Ayushkumawat/Portfolio/assets/76219349/4755cb42-2ef8-40f3-b693-f2b1b04c365a" alt="" />
          <div className="txt">
            <h1>AI MedDiagnosis</h1>
            <div className='ico'>
            <a href='https://github.com/Ayushkumawat/AI-MedDiagnostics' target='_blank'><i className='bx bxl-github'></i></a>
            </div>
            <div className='card'>
            <p>AI MedDiagnostics is a web-based application that allows users to track their symptoms and predict the likelihood of having a disease based on their symptoms.</p>
            </div>
          </div>
        </div>
      </a>
      <div className="fullBg">
        <img src="https://github.com/Ayushkumawat/Portfolio/assets/76219349/4755cb42-2ef8-40f3-b693-f2b1b04c365a" alt="" />
      </div>
      <a className="hb">
        <div className="c">
          <img src="https://github.com/Ayushkumawat/Portfolio/assets/76219349/dc0dd68c-37f4-4850-ba50-af1149578398" alt="" />
          <div className="txt">
            <h1>Bus-Passenger Management System</h1>
            <div className='ico'>
            <a href='https://github.com/Ayushkumawat/Bus-Passenger-Management-using-Smart-Card-Technology' target='_blank'><i className='bx bxl-github'></i></a>
            </div>
            <div className='card'>
            <p>Bus-Passenger-Management will help in digitalizing local transportation system by providing QR code to students/consumers, it has an interactive UI and will help in managing user data by creating excel sheets.</p>
            </div>
          </div>
        </div>
      </a>
      <div className="fullBg">
        <img src="https://github.com/Ayushkumawat/Portfolio/assets/76219349/dc0dd68c-37f4-4850-ba50-af1149578398" alt="" />
      </div>
      <a className="hb">
        <div className="c">
          <img src="https://github.com/Ayushkumawat/Portfolio/assets/76219349/4d8e56d5-cdeb-4c8f-9de9-5d592d503366" alt="" />
          <div className="txt">
            <h1>Facial Recognition with Gender Detection</h1>
            <div className='ico'>
            <a href='https://github.com/Ayushkumawat/Facial-Recognition-with-Gender-Detection' target='_blank'><i className='bx bxl-github'></i></a>
            </div>
            <div className='card'>
            <p>This project helps in real time facial recognition and gender detection. It uses only single clear image of person to detect and make predictions.</p>
            </div>
          </div>
        </div>
      </a>
      <div className="fullBg">
        <img src="https://github.com/Ayushkumawat/Portfolio/assets/76219349/4d8e56d5-cdeb-4c8f-9de9-5d592d503366" alt="" />
      </div>
      <a className="hb">
        <div className="c">
          <img src="https://github.com/Ayushkumawat/Portfolio/assets/76219349/cd43e85a-7178-4288-829b-d2e2918f9b23" alt="" />
          <div className="txt">
            <h1>Advance Aerial Vehicle Detection System</h1>
            <div className='ico'>
            <a href='https://github.com/Ayushkumawat/Advanced-Aerial-Drone-Detection-System' target='_blank'><i className='bx bxl-github'></i></a>
            </div>
            <div className='card'>
            <p>This project demonstrates real-time drone detection using YOLOv5 and OpenCV. It detects drones in real-time and displays a warning when a drone is detected inside or near a defined rectangle.</p>
            </div>
          </div>
        </div>
      </a>
      <div className="fullBg">
        <img src="https://github.com/Ayushkumawat/Portfolio/assets/76219349/cd43e85a-7178-4288-829b-d2e2918f9b23" alt="" />
      </div>
      <a  className="hb">
        <div className="c">
          <img src="https://github.com/Ayushkumawat/Portfolio/assets/76219349/0e119eb1-c82a-4240-a22f-b40bb022df93" alt="" />
          <div className="txt">
            <h1>News Classification - NLP</h1>
            <div className='ico'>
            <a href='https://github.com/Ayushkumawat/News-Classification-using-Natural-Language-Processing' target='_blank'><i className='bx bxl-github'></i></a>
            </div>
            <div className='card'>
            <p>A Machine Learning model which classifies weather the news given is genuine news or false news by the use of NLP (Natural Language Processing).</p>
            </div>
          </div>
        </div>
      </a>
      <div className="fullBg">
        <img src="https://github.com/Ayushkumawat/Portfolio/assets/76219349/0e119eb1-c82a-4240-a22f-b40bb022df93" alt="" />
      </div>
      <a className="hb">
        <div className="c">
          <img src="https://github.com/Ayushkumawat/Portfolio/assets/76219349/c971291f-7ba4-4558-86a8-3d17778c1946" alt="" />
          <div className="txt">
            <h1>Resturant Order Automation</h1>
            <div className='ico'>
            <a href='https://www.github.com/Ayushkumawat' target='_blank'><i className='bx bxl-github'></i></a>
            </div>
            <div className='card'>
            <p>In this project we developed a system to automate the ordering & billing process in resturants. I also got a patent on this.</p>
            </div>
          </div>
        </div>
      </a>
      <div className="fullBg">
        <img src="https://github.com/Ayushkumawat/Portfolio/assets/76219349/c971291f-7ba4-4558-86a8-3d17778c1946" alt="" />
      </div>
    </div>
    </div>
  );
};

export default Innodesk;
