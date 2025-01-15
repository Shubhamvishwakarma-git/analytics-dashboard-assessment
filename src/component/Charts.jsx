
import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Charts = ({ data }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const cityData = data.reduce((acc, curr) => {
        acc[curr.City] = (acc[curr.City] || 0) + 1;
        return acc;
      }, {});

      const makeData = data.reduce((acc, curr) => {
        acc[curr.Make] = (acc[curr.Make] || 0) + 1;
        return acc;
      }, {});

      // Chart data for Bar chart (EVs per City)
      const cities = Object.keys(cityData);
      const cityCounts = Object.values(cityData);

      // Chart data for Pie chart (EVs per Make)
      const makes = Object.keys(makeData);
      const makeCounts = Object.values(makeData);

      setChartData({
        cityChart: {
          labels: cities,
          datasets: [
            {
              label: 'Number of EVs by City',
              data: cityCounts,
              backgroundColor: '#3E8E41',  // Forest Green
              borderColor: '#2C6B32',      // Dark Forest Green
              borderWidth: 1,
            },
          ],
        },
        makeChart: {
          labels: makes,
          datasets: [
            {
              label: 'Number of EVs by Make',
              data: makeCounts,
              backgroundColor: [
                  '#003366', // Slate Gray
                  '#C7C7C7', // Blue
                '#3D2785', // Charcoal
              ],  
              borderColor: '#FFFFFF', 
              borderWidth: 1,
            },
          ],
        },
      });
    }
  }, [data]);

  return (
    <div className="charts-container">
      <h2 className="text-center my-4">EV Data Insights</h2>

      <div className="chart-card mb-4">
        <h3>EVs by City</h3>
        {chartData && chartData.cityChart && (
          <Bar
            data={chartData.cityChart}
            options={{
              responsive: true,
              plugins: {
                title: { display: true, text: 'EVs per City' },
              },
              scales: {
                x: {
                  ticks: {
                    font: { size: 12 },
                  },
                },
                y: {
                  ticks: {
                    font: { size: 12 },
                  },
                },
              },
            }}
          />
        )}
      </div>

      <div className="chart-card">
        <h3>EVs by Make</h3>
        {chartData && chartData.makeChart && (
          <Pie
            data={chartData.makeChart}
            options={{
              responsive: true,
              plugins: {
                title: { display: true, text: 'EVs per Make' },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Charts;

