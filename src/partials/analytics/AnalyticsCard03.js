import React from 'react';
import BarChart from '../../charts/BarChart03';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function AnalyticsCard03() {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
    ],
    datasets: [
      // Stack
      {
        label: 'Direct',
        data: [
          5000, 4000, 4000, 3800, 5200, 5100,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[700],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[800],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Stack
      {
        label: 'Referral',
        data: [
          2500, 2600, 4000, 4000, 4800, 3500,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Stack
      {
        label: 'Organic Search',
        data: [
          2300, 2000, 3100, 2700, 1300, 2600,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[300],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[400],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Stack
      {
        label: 'Social',
        data: [
          4800, 4200, 4800, 1800, 3300, 3500,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[100],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[200],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100 flex items-center">
        <h2 className="font-semibold text-gray-800">Acquisition Channels</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default AnalyticsCard03;
