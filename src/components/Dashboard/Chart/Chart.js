import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import Papa from 'papaparse';

const Chartlink = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null); // State to hold the Chart instance

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Ayushkumawat/Portfolio/main/public/Connections.csv');
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

        // Destroy the existing chart instance if it exists
        if (chartInstance) {
          chartInstance.destroy();
        }

        // Create a new Chart instance and save it in state
        const newChartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [
              {
                label: 'Connections',
                data,
                borderColor: '#ec2146',
                pointBorderWidth: 3,
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
                min: minYValue,
                title: {
                  display: true,
                  text: 'Number of Connections',
                  font: {
                    size: 16,
                    weight: 'bold',
                  },
                },
                grid: {
                  color: "#716a6b94",
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
                  color: '#716a6b94',
                },
              },
            },
            animation: {
              duration: 2000,
              easing: 'linear',
            },
          },
        });

        setChartInstance(newChartInstance);
      } catch (error) {
        console.error('Error fetching or processing data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 998px)').matches) {
        chartRef.current.height = 200;
      } else {
        chartRef.current.height = 120;
      }
    };

    handleResize(); // Initial setup

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default Chartlink;
