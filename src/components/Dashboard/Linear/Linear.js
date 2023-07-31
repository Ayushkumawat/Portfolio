import React, { useEffect, useState } from 'react';
import './Linear.css';

const Linear = ({percentage, text}) => {
  const [progress, setProgress] = useState(0);

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
    }, 25); // Adjust the speed of the progress bar animation (milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [percentage]);

  return (
    <div className="linear-progress">
      <div className="linear-progress-text">{`${text}`}</div>
      <div
        className="linear-progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default Linear;
