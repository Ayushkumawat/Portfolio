import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarChart = () => {
    const sessionData = [
        { session: 'Session 1', academicPerformance: 8, attendance: 7, effort: 9, teamwork: 6 },
        { session: 'Session 2', academicPerformance: 9, attendance: 9, effort: 8, teamwork: 7 },
        // Add more sessions and corresponding criterion values
      ];
      

  const data = {
    labels: ['Academic Performance', 'Attendance', 'Effort', 'Teamwork'], // Criterion labels
    datasets: [
      {
        label: 'SGPA Performance',
        data: sessionData.map((session) => ({
          x: session.academicPerformance,
          y: session.attendance,
          r: session.effort,
          t: session.teamwork,
        })),
        backgroundColor: 'rgba(75, 192, 192, 0.4)', // Fill color of the radar area
        borderColor: 'rgba(75, 192, 192, 1)', // Border color of the radar area
        pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Color of the data points
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        beginAtZero: true,
        max: 10, // Maximum value for the radar chart
      },
    },
  };

  return (
    <div>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
