import React from 'react';
import { Link } from 'react-router-dom';

function AnalyticsCard05() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Top Channels</h2>
      </header>
      <div className="flex-grow p-3">
        <div className="flex flex-col h-full">
          {/* Card content */}
          <div className="flex-grow">
            <ul className="flex justify-between text-xs uppercase text-gray-400 font-semibold px-2 space-x-2">
              <li>Source</li>
              <li>Visitors</li>
            </ul>

            <ul className="space-y-1 text-sm text-gray-800 mt-3 mb-4">
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '82%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>Google</div>
                  <div className="font-medium">4.7K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '70%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>Indiehackers.com</div>
                  <div className="font-medium">4.2K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '60%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>DuckDuckGo</div>
                  <div className="font-medium">3.4K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '44%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>Hacker News</div>
                  <div className="font-medium">3.1K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '40%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>Github.com</div>
                  <div className="font-medium">2.2K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '30%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>Madewithvuejs.com</div>
                  <div className="font-medium">1.7K</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '22%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>Producthunt.com</div>
                  <div className="font-medium">924</div>
                </div>
              </li>
              {/* Item */}
              <li className="relative px-2 py-1">
                <div className="absolute inset-0 bg-indigo-100" aria-hidden="true" style={{width: '12%'}}></div>
                <div className="relative flex justify-between space-x-2">
                  <div>Dev.to</div>
                  <div className="font-medium">696</div>
                </div>
              </li>
            </ul>
          </div>
          {/* Card footer */}
          <div className="text-center pt-4 pb-1 border-t border-gray-100">
            <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600" to="#0">Channels Report -&gt;</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCard05;
