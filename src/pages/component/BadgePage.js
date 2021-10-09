import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

function BadgePage() {

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
              <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">Badge ✨</h1>
            </div>

            <div className="border-t border-gray-200">

              {/* Components */}
              <div className="space-y-8 mt-8">

                {/* Basic Small */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Basic Small</h2>
                  <div className="flex flex-wrap items-center -m-1.5">
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">Working on</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-xs inline-flex font-medium bg-light-blue-100 text-light-blue-600 rounded-full text-center px-2.5 py-1">Exciting news</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-xs inline-flex font-medium bg-green-100 text-green-600 rounded-full text-center px-2.5 py-1">Product</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-xs inline-flex font-medium bg-yellow-100 text-yellow-600 rounded-full text-center px-2.5 py-1">Announcement</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-xs inline-flex font-medium bg-red-100 text-red-600 rounded-full text-center px-2.5 py-1">Bug Fix</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-xs inline-flex font-medium bg-blue-100 text-blue-600 rounded-full text-center px-2.5 py-1">Customer Stories</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-xs inline-flex font-medium bg-gray-100 text-gray-500 rounded-full text-center px-2.5 py-1">All Stories</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-xs inline-flex font-medium bg-gray-700 text-gray-100 rounded-full text-center px-2.5 py-1">All Stories</div>
                      {/* End */}
                    </div>
                  </div>
                </div>

                {/* Basic Large */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Basic Large</h2>
                  <div className="flex flex-wrap items-center -m-1.5">
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-sm inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">Working on</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-sm inline-flex font-medium bg-light-blue-100 text-light-blue-600 rounded-full text-center px-2.5 py-1">Exciting news</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-sm inline-flex font-medium bg-green-100 text-green-600 rounded-full text-center px-2.5 py-1">Product</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-sm inline-flex font-medium bg-yellow-100 text-yellow-600 rounded-full text-center px-2.5 py-1">Announcement</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-sm inline-flex font-medium bg-red-100 text-red-600 rounded-full text-center px-2.5 py-1">Bug Fix</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-sm inline-flex font-medium bg-blue-100 text-blue-600 rounded-full text-center px-2.5 py-1">Customer Stories</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-sm inline-flex font-medium bg-gray-100 text-gray-500 rounded-full text-center px-2.5 py-1">All Stories</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-sm inline-flex font-medium bg-gray-700 text-gray-100 rounded-full text-center px-2.5 py-1">All Stories</div>
                      {/* End */}
                    </div>
                  </div>
                </div>

                {/* Basic with Icon */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Basic with Icon</h2>
                  <div className="flex flex-wrap items-center -m-1.5">
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="inline-flex items-center text-xs font-medium text-gray-100 bg-gray-700 rounded-full text-center px-2 py-0.5">
                        <svg className="w-3 h-3 flex-shrink-0 fill-current text-yellow-500 mr-1" viewBox="0 0 12 12">
                          <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                        </svg>
                        <span>Special Offer</span>
                      </div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="inline-flex items-center text-sm font-medium text-gray-100 bg-gray-700 rounded-full text-center px-2 py-0.5">
                        <svg className="w-3 h-3 flex-shrink-0 fill-current text-yellow-500 mr-1" viewBox="0 0 12 12">
                          <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                        </svg>
                        <span>Special Offer</span>
                      </div>
                      {/* End */}
                    </div>
                  </div>
                </div>

                {/* Basic for Charts */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Basic for Charts</h2>
                  <div className="flex flex-wrap items-center -m-1.5">
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+29%</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">-14%</div>
                      {/* End */}
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default BadgePage;