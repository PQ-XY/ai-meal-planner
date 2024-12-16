import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialBarChart = ({percentage}) => {
  const [chartOptions, setChartOptions] = useState({
    series: [percentage],
    options: {
      chart: {
        type: 'radialBar',
        height: '70%',  // Set height to 100%
        width: '100%',   // Set width to 100%
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: '18px',
              fontWeight: 600,
              color: '#94B06E',
              offsetY: 6,
            },
          },
        },
      },
      fill: {
        colors: ['#94B06E'], // Set radial bar color to red
      },
    },
  });

  return (
    <div style={{ width: '100%', height: '100%' }}> {/* Container div with 100% width and height */}
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="radialBar"
        height="70%"  // Set height to 100%
        width="100%"   // Set width to 100%
      />
    </div>
  );
};

export default RadialBarChart;


