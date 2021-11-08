import React from 'react';

export default function DashboardCard({ title, children }) {
  return (
    <div className="flex flex-col col-span-full lg:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100 flex items-center">
        <h2 className="font-semibold text-gray-800">{title}</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <div className="px-5 py-5 h-full">
        {children}
      </div>
    </div>
  );
}
