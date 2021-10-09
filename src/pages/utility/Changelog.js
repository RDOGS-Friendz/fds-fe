import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import PaginationClassic from '../../components/PaginationClassic';

import User01 from '../../images/user-32-01.jpg';
import User02 from '../../images/user-32-02.jpg';
import User07 from '../../images/user-32-07.jpg';

function Changelog() {

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
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">Changelog ✨</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

                {/* Add board button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 flex-shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="ml-2">Add Entry</span>
                </button>

              </div>

            </div>

            <div className="border-t border-gray-200">
              <div className="max-w-3xl m-auto mt-8">

                {/* Filters */}
                <div className="xl:pl-32 xl:-translate-x-16 mb-2">
                  <ul className="flex flex-wrap -m-1">
                    <li className="m-1">
                      <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out">View All</button>
                    </li>
                    <li className="m-1">
                      <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 hover:border-gray-300 shadow-sm bg-white text-gray-500 duration-150 ease-in-out">Announcements</button>
                    </li>
                    <li className="m-1">
                      <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 hover:border-gray-300 shadow-sm bg-white text-gray-500 duration-150 ease-in-out">Bug Fix</button>
                    </li>
                    <li className="m-1">
                      <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 hover:border-gray-300 shadow-sm bg-white text-gray-500 duration-150 ease-in-out">Product</button>
                    </li>
                    <li className="m-1">
                      <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 hover:border-gray-300 shadow-sm bg-white text-gray-500 duration-150 ease-in-out">Exciting News</button>
                    </li>
                  </ul>
                </div>

                {/* Posts */}
                <div className="xl:-translate-x-16">
                  {/* Post */}
                  <article className="pt-6">
                    <div className="xl:flex">
                      <div className="w-32 flex-shrink-0">
                        <div className="text-xs font-semibold uppercase text-gray-400 xl:leading-8">8 July, 2021</div>
                      </div>
                      <div className="flex-grow pb-6 border-b border-gray-200">
                        <header>
                          <h2 className="text-2xl text-gray-800 font-bold mb-3">Released version 2.0</h2>
                          <div className="flex flex-nowrap items-center space-x-2 mb-4">
                            <div className="flex items-center">
                              <a className="block mr-2 flex-shrink-0" href="#0">
                                <img className="rounded-full border-2 border-white box-content" src={User07} width="32" height="32" alt="User 04" />
                              </a>
                              <a className="block text-sm font-semibold text-gray-800" href="#0">
                                Simona Lürwer
                              </a>
                            </div>
                            <div className="text-gray-400">·</div>
                            <div>
                              <div className="text-xs inline-flex font-medium bg-green-100 text-green-600 rounded-full text-center px-2.5 py-1">Product</div>
                            </div>
                          </div>
                        </header>
                        <div className="space-y-3">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Post */}
                  <article className="pt-6">
                    <div className="xl:flex">
                      <div className="w-32 flex-shrink-0">
                        <div className="text-xs font-semibold uppercase text-gray-400 xl:leading-8">6 July, 2021</div>
                      </div>
                      <div className="flex-grow pb-6 border-b border-gray-200">
                        <header>
                          <h2 className="text-2xl text-gray-800 font-bold mb-3">Feature Name is now public 🎉</h2>
                          <div className="flex flex-nowrap items-center space-x-2 mb-4">
                            <div className="flex items-center">
                              <a className="block mr-2 flex-shrink-0" href="#0">
                                <img className="rounded-full border-2 border-white box-content" src={User02} width="32" height="32" alt="User 04" />
                              </a>
                              <a className="block text-sm font-semibold text-gray-800" href="#0">
                                Danielle Cohen
                              </a>
                            </div>
                            <div className="text-gray-400">·</div>
                            <div>
                              <div className="text-xs inline-flex font-medium bg-yellow-100 text-yellow-600 rounded-full text-center px-2.5 py-1">Announcement</div>
                            </div>
                          </div>
                        </header>
                        <div className="space-y-3">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Post */}
                  <article className="pt-6">
                    <div className="xl:flex">
                      <div className="w-32 flex-shrink-0">
                        <div className="text-xs font-semibold uppercase text-gray-400 xl:leading-8">4 July, 2021</div>
                      </div>
                      <div className="flex-grow pb-6 border-b border-gray-200">
                        <header>
                          <h2 className="text-2xl text-gray-800 font-bold mb-3">Bugs fixed, issues, and more</h2>
                          <div className="flex flex-nowrap items-center space-x-2 mb-4">
                            <div className="flex items-center">
                              <a className="block mr-2 flex-shrink-0" href="#0">
                                <img className="rounded-full border-2 border-white box-content" src={User01} width="32" height="32" alt="User 04" />
                              </a>
                              <a className="block text-sm font-semibold text-gray-800" href="#0">
                                Patrick Kumar
                              </a>
                            </div>
                            <div className="text-gray-400">·</div>
                            <div>
                              <div className="text-xs inline-flex font-medium bg-red-100 text-red-600 rounded-full text-center px-2.5 py-1">Bug Fix</div>
                            </div>
                          </div>
                        </header>
                        <div className="space-y-3">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>E-commerce: Better lorem ipsum generator.</li>
                            <li>Booking: Lorem ipsum post generator.</li>
                            <li>Retail: Better lorem ipsum generator.</li>
                            <li>Services: Better lorem ipsum generator.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Post */}
                  <article className="pt-6">
                    <div className="xl:flex">
                      <div className="w-32 flex-shrink-0">
                        <div className="text-xs font-semibold uppercase text-gray-400 xl:leading-8">2 July, 2021</div>
                      </div>
                      <div className="flex-grow pb-6 border-b border-gray-200">
                        <header>
                          <h2 className="text-2xl text-gray-800 font-bold mb-3">Thanks, everyone 🙌</h2>
                          <div className="flex flex-nowrap items-center space-x-2 mb-4">
                            <div className="flex items-center">
                              <a className="block mr-2 flex-shrink-0" href="#0">
                                <img className="rounded-full border-2 border-white box-content" src={User02} width="32" height="32" alt="User 04" />
                              </a>
                              <a className="block text-sm font-semibold text-gray-800" href="#0">
                                Danielle Cohen
                              </a>
                            </div>
                            <div className="text-gray-400">·</div>
                            <div>
                              <div className="text-xs inline-flex font-medium bg-light-blue-100 text-light-blue-600 rounded-full text-center px-2.5 py-1">Exciting News</div>
                            </div>
                          </div>
                        </header>
                        <div className="space-y-3">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                {/* Pagination */}
                <div className="xl:pl-32 xl:-translate-x-16 mt-6">
                  <PaginationClassic />
                </div>

              </div>
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Changelog;