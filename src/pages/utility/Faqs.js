import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

function Faqs() {

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

            <div className="max-w-3xl m-auto">

              {/* Page title */}
              <div className="mb-5">
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">👋 How we can help you today?</h1>
              </div>

              {/* Search form */}
              <div className="mb-6">
                <form className="relative">
                  <label htmlFor="action-search" className="sr-only">Search</label>
                  <input id="action-search" className="form-input pl-9 py-3 focus:border-gray-300 w-full" type="search" />
                  <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                    <svg className="w-4 h-4 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                      <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Filters */}
              <div className="mb-8 border-b border-gray-200">
                <ul className="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-indigo-500 whitespace-nowrap" href="#0">Popular</a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-gray-500 hover:text-gray-600 whitespace-nowrap" href="#0">Accessibility</a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-gray-500 hover:text-gray-600 whitespace-nowrap" href="#0">Marketing</a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-gray-500 hover:text-gray-600 whitespace-nowrap" href="#0">Development</a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-gray-500 hover:text-gray-600 whitespace-nowrap" href="#0">Account</a>
                  </li>
                </ul>
              </div>

              {/* Posts */}
              <div>
                <h2 className="text-2xl text-gray-800 font-bold mb-4">Popular Questions</h2>
                {/* Post */}
                <article className="py-4 border-b border-gray-200">
                  <header className="flex items-start mb-2">
                    <div className="mt-2 mr-3">
                      <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
                        <path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
                        <path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
                      </svg>
                    </div>
                    <h3 className="text-xl leading-snug text-gray-800 font-bold">How can the widget to my website?</h3>
                  </header>
                  <div className="pl-7">
                    <div className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                    <ul className="flex flex-wrap">
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-gray-400 after:px-2">
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">General</a>
                      </li>
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-gray-400 after:px-2">
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Marketing</a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Post */}
                <article className="py-4 border-b border-gray-200">
                  <header className="flex items-start mb-2">
                    <div className="mt-2 mr-3">
                      <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
                        <path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
                        <path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
                      </svg>
                    </div>
                    <h3 className="text-xl leading-snug text-gray-800 font-bold">What would happen if I choose not to pay after the usage?</h3>
                  </header>
                  <div className="pl-7">
                    <div className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                    <ul className="flex flex-wrap">
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-gray-400 after:px-2">
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Development</a>
                      </li>
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-gray-400 after:px-2">
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Acessibility</a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Post */}
                <article className="py-4 border-b border-gray-200">
                  <header className="flex items-start mb-2">
                    <div className="mt-2 mr-3">
                      <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
                        <path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
                        <path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
                      </svg>
                    </div>
                    <h3 className="text-xl leading-snug text-gray-800 font-bold">What limitations do trial accounts have?</h3>
                  </header>
                  <div className="pl-7">
                    <div className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                    <ul className="flex flex-wrap">
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-gray-400 after:px-2">
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Development</a>
                      </li>
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-gray-400 after:px-2">
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Plans</a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Post */}
                <article className="py-4 border-b border-gray-200">
                  <header className="flex items-start mb-2">
                    <div className="mt-2 mr-3">
                      <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
                        <path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
                        <path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
                      </svg>
                    </div>
                    <h3 className="text-xl leading-snug text-gray-800 font-bold">Is there any difference between Standard and Plus licenses?</h3>
                  </header>
                  <div className="pl-7">
                    <div className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                    <ul className="flex flex-wrap">
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-gray-400 after:px-2">
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Development</a>
                      </li>
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-gray-400 after:px-2">
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Account</a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Post */}
                <article className="py-4 border-b border-gray-200">
                  <header className="flex items-start mb-2">
                    <div className="mt-2 mr-3">
                      <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
                        <path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
                        <path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
                      </svg>
                    </div>
                    <h3 className="text-xl leading-snug text-gray-800 font-bold">Is my personal information protected?</h3>
                  </header>
                  <div className="pl-7">
                    <div className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                    <ul className="flex flex-wrap">
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-gray-400 after:px-2">
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">General</a>
                      </li>
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-gray-400 after:px-2">
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Accessibility</a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Post */}
                <article className="py-4 border-b border-gray-200">
                  <header className="flex items-start mb-2">
                    <div className="mt-2 mr-3">
                      <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
                        <path className="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z" />
                        <path className="text-indigo-500" d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z" />
                      </svg>
                    </div>
                    <h3 className="text-xl leading-snug text-gray-800 font-bold">What can I create with with this product?</h3>
                  </header>
                  <div className="pl-7">
                    <div className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                    <ul className="flex flex-wrap">
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-gray-400 after:px-2">
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Marketing</a>
                      </li>
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-gray-400 after:px-2">
                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#0">Plans</a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>

              {/* Pagination */}
              <div className="mt-6">
                <div className="flex justify-end">
                  <a className="btn bg-white border-gray-200 hover:border-gray-300 text-indigo-500" href="#0">See All Questions -&gt;</a>
                </div>
              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Faqs;