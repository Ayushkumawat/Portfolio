import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Papa from 'papaparse';

const Chartlink = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('');
        const csvData = await response.text();

        const parsedData = Papa.parse(csvData, { header: true }).data;

        const monthlyConnections = {};
        parsedData.forEach((item) => {
          const date = new Date(item['Connected On']);
          const month = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;

          if (monthlyConnections[month]) {
            monthlyConnections[month] += 1;
          } else {
            monthlyConnections[month] = 1;
          }
        });

        const labels = Object.keys(monthlyConnections);
        const data = Object.values(monthlyConnections);
        const minYValue = Math.min(...data); // Find the minimum value of the y-axis data

        const ctx = chartRef.current.getContext('2d');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [
              {
                label: 'LinkedIn Activity',
                data,
                borderColor: '#ec2146',
                // borderWidth: 1,
                pointBorderWidth:3,
                pointHoverBorderWidth: 5,
                pointBorderColor: '#fff',
                tension: 0,
                fill: true,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                min: minYValue, // Set the minimum value of the y-axis
                title: {
                  display: true,
                  text: 'Number of Connections',
                  font: {
                    size: 16,
                    weight: 'bold',
                  },
                },
                grid: {
                  color: "#716a6b94", // Set the color of the y-axis grid lines
                },
              },
              x: {
                title: {
                  display: true,
                  text: 'Months',
                  font: {
                    size: 16,
                    weight: 'bold',
                  },
                },
                grid: {
                  color: '#716a6b94', // Set the color of the y-axis grid lines
                },
              },
            },
            animation: {
              duration: 2000,
              easing: 'linear'
            },
          },
        });
      } catch (error) {
        console.error('Error fetching or processing data:', error);
      }
    };

    fetchData();
  }, []);

  return <canvas ref={chartRef} height={120} />;
};

export default Chartlink;
