import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const PerformanceChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy existing chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
          {
            label: 'Gross Salary',
            data: [3000, 3200, 2800, 3500, 3700, 3400, 3600, 3900, 4000, 4200],
            backgroundColor: '#e6e0f6',
            borderWidth: 1,
          },
          {
            label: 'Not Salary',
            data: [1000, 1200, 800, 1500, 1700, 1400, 1600, 1900, 2000, 2200],
            backgroundColor: '#524cf0',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      // Cleanup chart instance on component unmount
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-medium mb-4">Payroll</h1>
    <div className="bg-white p-4 rounded rounded-3xl pb-20  w-full" style={{ height: '300px', width: '620px' }}>
      <h3 className="text-2xl font-medium">Performance</h3>
      <canvas ref={chartRef}></canvas>
      </div>
      </div>
  );
};

export default PerformanceChart;
