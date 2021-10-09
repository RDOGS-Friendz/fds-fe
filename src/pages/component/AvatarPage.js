import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import Avatar01 from '../../images/avatar-01.jpg';
import Avatar02 from '../../images/avatar-02.jpg';
import Avatar03 from '../../images/avatar-03.jpg';
import Avatar04 from '../../images/avatar-04.jpg';
import Avatar05 from '../../images/avatar-05.jpg';
import Avatar06 from '../../images/avatar-06.jpg';

function AvatarPage() {

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
              <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">Avatar ✨</h1>
            </div>

            <div className="border-t border-gray-200">

              {/* Components */}
              <div className="space-y-8 mt-8">

                {/* Basic Avatars */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Basic Avatars</h2>
                  <div className="flex flex-wrap items-center -m-1.5">
                    <div className="m-1.5">
                      {/* Start */}
                      <img className="rounded-full" src={Avatar01} width="24" height="24" alt="Avatar" />
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <img className="rounded-full" src={Avatar01} width="28" height="28" alt="Avatar" />
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <img className="rounded-full" src={Avatar01} width="32" height="32" alt="Avatar" />
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <img className="rounded-full" src={Avatar01} width="40" height="40" alt="Avatar" />
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <img className="rounded-full" src={Avatar01} width="64" height="64" alt="Avatar" />
                      {/* End */}
                    </div>
                  </div>
                </div>

                {/* Avatars with Notification */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Avatars with Notification</h2>
                  <div className="flex flex-wrap items-center -m-1.5">
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="relative">
                        <img className="rounded-full" src={Avatar01} width="24" height="24" alt="Avatar" />
                        <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></div>
                      </div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="relative">
                        <img className="rounded-full" src={Avatar01} width="28" height="28" alt="Avatar" />
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="relative">
                        <img className="rounded-full" src={Avatar01} width="32" height="32" alt="Avatar" />
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></div>
                      </div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="relative">
                        <img className="rounded-full" src={Avatar01} width="40" height="40" alt="Avatar" />
                        <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="relative">
                        <img className="rounded-full" src={Avatar01} width="64" height="64" alt="Avatar" />
                        <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></div>
                      </div>
                      {/* End */}
                    </div>
                  </div>
                </div>

                {/* Avatars with Placeholder Icon */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Avatars with Placeholder Icon</h2>
                  <div className="flex flex-wrap items-center -m-1.5">
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="flex items-center justify-center bg-gray-100 rounded-full w-6 h-6 text-[10px] font-semibold uppercase text-gray-500">MS</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="flex items-center justify-center bg-gray-100 rounded-full w-7 h-7 text-[10px] font-semibold uppercase text-gray-500">MS</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="flex items-center justify-center bg-gray-100 rounded-full w-8 h-8 text-xs font-semibold uppercase text-gray-500">MS</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="flex items-center justify-center bg-gray-100 rounded-full w-10 h-10 text-sm font-semibold uppercase text-gray-500">MS</div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="flex items-center justify-center bg-gray-100 rounded-full w-16 h-16 text-lg font-semibold uppercase text-gray-500">MS</div>
                      {/* End */}
                    </div>
                  </div>
                </div>

                {/* Avatars Groups */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Avatars Groups</h2>
                  <div className="flex flex-wrap items-center -m-1.5">
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="flex -space-x-3 -ml-0.5">
                        <img className="rounded-full border-2 border-white box-content" src={Avatar02} width="24" height="24" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar03} width="24" height="24" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar04} width="24" height="24" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar05} width="24" height="24" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar06} width="24" height="24" alt="Avatar" />
                      </div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="flex -space-x-3 -ml-0.5">
                        <img className="rounded-full border-2 border-white box-content" src={Avatar02} width="28" height="28" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar03} width="28" height="28" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar04} width="28" height="28" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar05} width="28" height="28" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar06} width="28" height="28" alt="Avatar" />
                      </div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="flex -space-x-3 -ml-0.5">
                        <img className="rounded-full border-2 border-white box-content" src={Avatar02} width="32" height="32" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar03} width="32" height="32" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar04} width="32" height="32" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar05} width="32" height="32" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar06} width="32" height="32" alt="Avatar" />
                      </div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="flex -space-x-4 -ml-0.5">
                        <img className="rounded-full border-2 border-white box-content" src={Avatar02} width="40" height="40" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar03} width="40" height="40" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar04} width="40" height="40" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar05} width="40" height="40" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar06} width="40" height="40" alt="Avatar" />
                      </div>
                      {/* End */}
                    </div>
                    <div className="m-1.5">
                      {/* Start */}
                      <div className="flex -space-x-7 -ml-0.5">
                        <img className="rounded-full border-2 border-white box-content" src={Avatar02} width="64" height="64" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar03} width="64" height="64" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar04} width="64" height="64" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar05} width="64" height="64" alt="Avatar" />
                        <img className="rounded-full border-2 border-white box-content" src={Avatar06} width="64" height="64" alt="Avatar" />
                      </div>
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

export default AvatarPage;