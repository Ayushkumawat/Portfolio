import React, { useEffect, useState } from 'react';
import './Circular.css';

const Circular = ({ percentage, text }) => {
  const [progress, setProgress] = useState(0);
  const radius = 70; // Adjust the radius as per your requirements
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        if (nextProgress >= percentage) {
          clearInterval(interval);
          return percentage;
        }
        return nextProgress;
      });
    }, 30); // Adjust the speed of the progress bar animation (milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [percentage]);

  return (
    <div className="circular-progress">
      <svg width={radius * 2} height={radius * 2}>
        <circle
          className="circle-background"
          cx={radius}
          cy={radius}
          r={radius - 5} // Adjust the thickness of the progress bar
        />
        <circle
          className="circle-progress"
          cx={radius}
          cy={radius}
          r={radius - 5} // Adjust the thickness of the progress bar
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
        <circle
  className="circle-dot"
  cx={radius + (radius - 5) * Math.cos((2 * Math.PI * progress+37) / 100 - Math.PI / 2)}
  cy={radius + (radius - 5) * Math.sin((2 * Math.PI * progress+37) / 100 - Math.PI / 2)}
  r="5"
/>
  
        <foreignObject x="0" y="0" width={radius * 2} height={radius * 2}>
          <div className="circle-text">
            <div>{text}</div>
          </div>
        </foreignObject>
      </svg>
      <div className="glowing-dot" style={{ left: `${progress}%` }}></div>
    </div>
  );
};

export default Circular;
