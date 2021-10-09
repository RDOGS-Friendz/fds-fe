import React from 'react';
import BarChart from '../../charts/BarChart04';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function AnalyticsCard04() {

  const chartData = {
    labels: [
      '02-01-2021', '03-01-2021', '04-01-2021', '05-01-2021',
    ],
    datasets: [
      // Blue bars
      {
        label: 'New Visitors',
        data: [
          8000, 3800, 5350, 7800,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        categoryPercentage: 0.66,
      },
      // Light blue bars
      {
        label: 'Returning Visitors',
        data: [
          4000, 6500, 2200, 5800,
        ],
        backgroundColor: tailwindConfig().theme.colors['light-blue'][400],
        hoverBackgroundColor: tailwindConfig().theme.colors['light-blue'][500],
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Audience Overview</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default AnalyticsCard04;
