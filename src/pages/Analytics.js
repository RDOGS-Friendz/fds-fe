import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Datepicker from '../components/Datepicker';
import AnalyticsCard01 from '../partials/analytics/AnalyticsCard01';
import AnalyticsCard02 from '../partials/analytics/AnalyticsCard02';
import AnalyticsCard03 from '../partials/analytics/AnalyticsCard03';
import AnalyticsCard04 from '../partials/analytics/AnalyticsCard04';
import AnalyticsCard05 from '../partials/analytics/AnalyticsCard05';
import AnalyticsCard06 from '../partials/analytics/AnalyticsCard06';
import AnalyticsCard07 from '../partials/analytics/AnalyticsCard07';
import AnalyticsCard08 from '../partials/analytics/AnalyticsCard08';
import AnalyticsCard09 from '../partials/analytics/AnalyticsCard09';
import AnalyticsCard10 from '../partials/analytics/AnalyticsCard10';
import AnalyticsCard11 from '../partials/analytics/AnalyticsCard11';

function Analytics() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
            
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">Analytics ✨</h1>
              </div>
          
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                  
                {/* Datepicker built with flatpickr */}
                <Datepicker align="right" />
                  
              </div>
            
            </div>            
            
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Analytics) */}
              <AnalyticsCard01 />
              {/*  Line chart (Active Users Right Now) */}
              <AnalyticsCard02 />
              {/* Stacked bar chart (Acquisition Channels) */}
              <AnalyticsCard03 />
              {/* Horizontal bar chart (Audience Overview) */}
              <AnalyticsCard04 />
              {/* Report card (Top Channels) */}
              <AnalyticsCard05 />
              {/* Report card (Top Pages) */}
              <AnalyticsCard06 />
              {/* Report card (Top Countries) */}
              <AnalyticsCard07 />
              {/* Doughnut chart (Sessions By Device) */}
              <AnalyticsCard08 />
              {/* Doughnut chart (Visit By Age Category) */}
              <AnalyticsCard09 />
              {/* Polar chart (Sessions By Gender) */}
              <AnalyticsCard10 />
              {/* Table (Top Products) */}
              <AnalyticsCard11 />

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Analytics;