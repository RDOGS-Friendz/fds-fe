import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

function IconsPage() {

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
              <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">Icons ✨</h1>
            </div>

            <div className="border-t border-gray-200">

              {/* Components */}
              <div className="space-y-8 mt-8">

                <div className="text-sm">If you need more icons than what we currently support in Mosaic, check out these great packs 👇</div>

                {/* Nucleo */}
                <div>
                  <div className="flex items-start space-x-3 mb-6">
                    <h2 className="text-2xl text-gray-800 font-bold">Nucleo</h2>
                    <div className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">Recommended</div>
                  </div>
                  <div className="px-6 py-8 bg-gray-800 rounded-sm text-center xl:text-left xl:flex xl:flex-wrap xl:justify-between xl:items-center">
                    <div className="text-gray-300 mb-4 xl:mb-0 max-w-lg mx-auto xl:mx-0 2xl:max-w-none">99% of the icons used in Mosaic come from Nucleo; a huge library of 3K+ vector icons!</div>
                    <div className="inline-flex space-x-3">
                      <a className="btn bg-indigo-500 hover:bg-indigo-600 text-white" href="https://nucleoapp.com/pricing" target="_blank" rel="noreferrer">Buy Nucleo</a>
                      <a className="btn bg-gray-700 hover:bg-gray-600 text-white" href="https://nucleoapp.com/free-icons" target="_blank" rel="noreferrer">Download Free Pack</a>
                    </div>
                  </div>
                </div>

                {/* Tabler Icons */}
                <div>
                  <div className="flex items-start space-x-3 mb-6">
                    <h2 className="text-2xl text-gray-800 font-bold">Tabler Icons</h2>
                    <div className="text-xs inline-flex font-medium bg-green-100 text-green-600 rounded-full text-center px-2.5 py-1">Free Alternative</div>
                  </div>
                  <div className="px-6 py-8 bg-gray-800 rounded-sm text-center xl:text-left xl:flex xl:flex-wrap xl:justify-between xl:items-center">
                    <div className="text-gray-300 mb-4 xl:mb-0 max-w-lg mx-auto xl:mx-0 2xl:max-w-none">A set of 1250+ icons that are visually consistent with the style used in Mosaic!</div>
                    <div className="inline-flex space-x-3">
                      <a className="btn bg-indigo-500 hover:bg-indigo-600 text-white" href="https://tablericons.com/" target="_blank" rel="noreferrer">Download Tabler Icons</a>
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

export default IconsPage;