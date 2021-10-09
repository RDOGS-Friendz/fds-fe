import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import DropdownClassic from '../../components/DropdownClassic';
import DropdownFull from '../../components/DropdownFull';
import DropdownFilter from '../../components/DropdownFilter';
import DropdownProfile from '../../components/DropdownProfile';
import DropdownSwitch from '../../components/DropdownSwitch';
import DropdownNotifications from '../../components/DropdownNotifications';
import DropdownHelp from '../../components/DropdownHelp';
import DropdownEditMenu from '../../components/DropdownEditMenu';
import Datepicker from '../../components/Datepicker';

function DropdownPage() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">Dropdown ✨</h1>
            </div>

            <div className="border-t border-gray-200">

              {/* Components */}
              <div className="space-y-8 mt-8 mb-80">

                {/* Classic Dropdown */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Classic Dropdown</h2>
                  {/* Start */}
                  <DropdownClassic />
                  {/* End */}
                </div>

                {/* Full-width Dropdown */}
                <div className="w-80">
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Full-width Dropdown</h2>
                  <DropdownFull />
                </div>

                {/* Filter */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Filter</h2>
                  <DropdownFilter />
                </div>

                {/* Profile */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Profile</h2>
                  <DropdownProfile />
                </div>

                {/* Switch Account */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Switch Account</h2>
                  <DropdownSwitch />
                </div>

                {/* Notification */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Notification</h2>
                  <DropdownNotifications />
                </div>

                {/* Help Center */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Help Center</h2>
                  <DropdownHelp />
                </div>

                {/* Quick Selection */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Quick Selection</h2>
                  <DropdownEditMenu className="relative inline-flex">
                    <li>
                      <a className="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3" href="#0">Option 1</a>
                    </li>
                    <li>
                      <a className="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3" href="#0">Option 2</a>
                    </li>
                    <li>
                      <a className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" href="#0">Remove</a>
                    </li>
                  </DropdownEditMenu>
                </div>

                {/* Datepicker (built with flatpickr) */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Datepicker (built with <a className="underline hover:no-underline" href="https://github.com/flatpickr/flatpickr" target="_blank" rel="noreferrer">flatpickr</a>)</h2>
                  <Datepicker />
                </div>

              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default DropdownPage;