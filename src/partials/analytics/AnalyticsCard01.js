import React from 'react';
import LineChart from '../../charts/LineChart03';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function AnalyticsCard01() {

  const chartData = {
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
        label: 'Current',
        data: [
          5000, 8700, 7500, 12000, 11000, 9500, 10500,
          10000, 15000, 9000, 10000, 7000, 22000, 7200,
          9800, 9000, 10000, 8000, 15000, 12000, 11000,
          13000, 11000, 15000, 17000, 18000,
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
      },
      // Gray line
      {
        label: 'Previous',
        data: [
          8000, 5000, 6500, 5000, 6500, 12000, 8000,
          9000, 8000, 8000, 12500, 10000, 10000, 12000,
          11000, 16000, 12000, 10000, 10000, 14000, 9000,
          10000, 15000, 12500, 14000, 11000,
        ],
        borderColor: tailwindConfig().theme.colors.gray[300],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.gray[300],
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100 flex items-center">
        <h2 className="font-semibold text-gray-800">Analytics</h2>
      </header>
      <div className="px-5 py-1">
        <div className="flex flex-wrap">
          {/* Unique Visitors */}
          <div className="flex items-center py-2">
            <div className="mr-5">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-gray-800 mr-2">24.7K</div>
                <div className="text-sm font-medium text-green-500">+49%</div>
              </div>
              <div className="text-sm text-gray-500">Unique Visitors</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-200 mr-5" aria-hidden="true"></div>
          </div>
          {/* Total Pageviews */}
          <div className="flex items-center py-2">
            <div className="mr-5">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-gray-800 mr-2">56.9K</div>
                <div className="text-sm font-medium text-green-500">+7%</div>
              </div>
              <div className="text-sm text-gray-500">Total Pageviews</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-200 mr-5" aria-hidden="true"></div>
          </div>
          {/* Bounce Rate */}
          <div className="flex items-center py-2">
            <div className="mr-5">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-gray-800 mr-2">54%</div>
                <div className="text-sm font-medium text-yellow-500">-7%</div>
              </div>
              <div className="text-sm text-gray-500">Bounce Rate</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-200 mr-5" aria-hidden="true"></div>
          </div>
          {/* Visit Duration*/}
          <div className="flex items-center">
            <div>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-gray-800 mr-2">2m 56s</div>
                <div className="text-sm font-medium text-yellow-500">+7%</div>
              </div>
              <div className="text-sm text-gray-500">Visit Duration</div>
            </div>
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="flex-grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={800} height={300} />
      </div>
    </div>
  );
}

export default AnalyticsCard01;
