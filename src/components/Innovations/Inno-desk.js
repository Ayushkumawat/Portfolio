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
      <div className="hb">
        <div className="c">
          <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_1.png" alt="" />
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
      </div>
      <div className="fullBg">
        <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_1.png" alt="" />
      </div>
      <div className="hb">
        <div className="c">
          <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_2.png" alt="" />
          <div className="txt">
            <h1>Bus-Passenger Management System</h1>
            <div className='ico'>
            <a href='https://github.com/Ayushkumawat/Bus-Passenger-Management-using-Smart-Card-Technology' target='_blank'><i className='bx bxl-github'></i></a>
            </div>
            <div className='card'>
            <p>Bus-Passenger-Management will help in digitalizing local transportation system by providing QR code to consumers.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fullBg">
        <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_2.png" alt="" />
      </div>
      <div className="hb">
        <div className="c">
          <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_3.png" alt="" />
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
      </div>
      <div className="fullBg">
        <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_3.png" alt="" />
      </div>
      <div className="hb">
        <div className="c">
          <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_4.png" alt="" />
          <div className="txt">
            <h1>Advance Aerial Vehicle Detection System</h1>
            <div className='ico'>
            <a href='https://github.com/Ayushkumawat/Advanced-Aerial-Drone-Detection-System' target='_blank'><i className='bx bxl-github'></i></a>
            </div>
            <div className='card'>
            <p>This project demonstrates real-time drone detection using YOLOv5 and OpenCV. It detects drones in real-time and displays a warning if detected inside a defined space.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fullBg">
        <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_4.png" alt="" />
      </div>
      <div  className="hb">
        <div className="c">
          <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_5.png" alt="" />
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
      </div>
      <div className="fullBg">
        <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_5.png" alt="" />
      </div>
      <div className="hb">
        <div className="c">
          <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_6.png" alt="" />
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
      </div>
      <div className="fullBg">
        <img src="https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/proj/proj_6.png" alt="" />
      </div>
    </div>
    </div>
  );
};

export default Innodesk;