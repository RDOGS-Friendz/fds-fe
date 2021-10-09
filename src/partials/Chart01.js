import React from 'react';

// Import utilities
import { formatValue, hexToRGB } from '../utils/Utils';

// Import TailwindCSS variables
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../css/tailwind.config';

import { Line } from 'react-chartjs-2';

// Tailwind config
const fullConfig = resolveConfig(tailwindConfig);

function Chart01() {
  return (
    <Line
      data={{
        labels: [
          '12-01-2020', '01-01-2021', '02-01-2021',
          '03-01-2021', '04-01-2021', '05-01-2021',
          '06-01-2021', '07-01-2021', '08-01-2021',
          '09-01-2021', '10-01-2021', '11-01-2021',
          '12-01-2021', '01-01-2022', '02-01-2022',
          '03-01-2022', '04-01-2022', '05-01-2022',
          '06-01-2022', '07-01-2022', '08-01-2022',
          '09-01-2022', '10-01-2022', '11-01-2022',
          '12-01-2022', '01-01-2023',
        ],
        datasets: [
          // Indigo line
          {
            data: [
              732, 610, 610, 504, 504, 504, 349,
              349, 504, 342, 504, 610, 391, 192,
              154, 273, 191, 191, 126, 263, 349,
              252, 423, 622, 470, 532,
            ],
            backgroundColor: `rgba(${hexToRGB(fullConfig.theme.colors.blue[500])}, 0.08)`,
            borderColor: fullConfig.theme.colors.indigo[500],
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: fullConfig.theme.colors.indigo[500],
          },
          // Gray line
          {
            data: [
              532, 532, 532, 404, 404, 314, 314,
              314, 314, 314, 234, 314, 234, 234,
              314, 314, 314, 388, 314, 202, 202,
              202, 202, 314, 720, 642,
            ],
            borderColor: fullConfig.theme.colors.gray[300],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: fullConfig.theme.colors.gray[300],
          },
        ],
      }}
      options={{
        chartArea: {
          backgroundColor: fullConfig.theme.colors.gray[50],
        },
        layout: {
          padding: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
          },
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            display: false,
            ticks: {
              beginAtZero: true,
            },
          }],
          xAxes: [{
            type: 'time',
            time: {
              unit: 'month',
            },
            display: false,
          }],
        },
        tooltips: {
          mode: 'nearest',
          intersect: false,
          position: 'nearest',
          caretSize: 0,
          caretPadding: 20,
          cornerRadius: 2,
          xPadding: 8,
          yPadding: 8,
          backgroundColor: fullConfig.theme.colors.white,
          borderWidth: 1,
          borderColor: fullConfig.theme.colors.gray[200],
          bodyFontStyle: '600',
          bodyFontColor: fullConfig.theme.colors.gray[800],
          displayColors: false,
          callbacks: {
            title: () => false, // Disable tooltip title
            label: (tooltipItem) => formatValue(tooltipItem.yLabel),
          },
        },
        hover: {
          animationDuration: 0,
          mode: 'nearest',
          intersect: false,
        },
        maintainAspectRatio: false,
      }}
      width={400}
      height={128}
    />
  );
}

export default Chart01;
