import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import Tooltip from '../../components/Tooltip';

function FormPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

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
              <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">Form ✨</h1>
            </div>

            <div className="border-t border-gray-200">

              {/* Components */}
              <div className="space-y-8 mt-8">

                {/* Input Types */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Input Types</h2>
                  <div className="grid gap-5 md:grid-cols-3">

                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="default">Default</label>
                        <input id="default" className="form-input w-full" type="text" />
                      </div>
                      {/* End */}
                    </div>

                    <div>
                      {/* Start */}
                      <div>
                        <div className="flex items-center justify-between">
                          <label className="block text-sm font-medium mb-1" htmlFor="tooltip">W/ Tooltip</label>
                          <Tooltip className="ml-2" bg="dark" size="md">
                            <div className="text-sm text-gray-200">Excepteur sint occaecat cupidata non proident, sunt.</div>
                          </Tooltip>
                        </div>
                        <input id="tooltip" className="form-input w-full" type="text" />
                      </div>
                      {/* End */}
                    </div>

                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="mandatory">
                          Mandatory
                          <span className="text-red-500">*</span>
                        </label>
                        <input id="mandatory" className="form-input w-full" type="text" required />
                      </div>
                      {/* End */}
                    </div>

                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="prefix">W/ Prefix</label>
                        <div className="relative">
                          <input id="prefix" className="form-input w-full pl-12" type="text" />
                          <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                            <span className="text-sm text-gray-400 font-medium px-3">USD</span>
                          </div>
                        </div>
                      </div>
                      {/* End */}
                    </div>

                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="suffix">W/ Suffix</label>
                        <div className="relative">
                          <input id="suffix" className="form-input w-full pr-8" type="text" />
                          <div className="absolute inset-0 left-auto flex items-center pointer-events-none">
                            <span className="text-sm text-gray-400 font-medium px-3">%</span>
                          </div>
                        </div>
                      </div>
                      {/* End */}
                    </div>

                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="placeholder">W/ Placeholder</label>
                        <input id="placeholder" className="form-input w-full" type="text" placeholder="Something cool..." />
                      </div>
                      {/* End */}
                    </div>

                    <div>
                      {/* Start */}
                      <form>
                        <label className="block text-sm font-medium mb-1" htmlFor="icon">W/ Icon</label>
                        <div className="relative">
                          <input id="icon" className="form-input w-full pl-9" type="text" />
                          <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                            <svg className="w-4 h-4 fill-current text-gray-400 flex-shrink-0 ml-3 mr-2" viewBox="0 0 16 16">
                              <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                            </svg>
                          </div>
                        </div>
                      </form>
                      {/* End */}
                    </div>

                    <div>
                      {/* Start */}
                      <div>
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="supporting-text">W/ Supporting Text</label>
                          <input id="supporting-text" className="form-input w-full" type="text" />
                        </div>
                        <div className="text-xs mt-1">Supporting text goes here!</div>
                      </div>
                      {/* End */}
                    </div>

                    <div>
                      {/* Start */}
                      <form>
                        <label className="block text-sm font-medium mb-1" htmlFor="form-search">Search</label>
                        <div className="relative">
                          <input id="form-search" className="form-input w-full pl-9" type="search" />
                          <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                            <svg className="w-4 h-4 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                              <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                            </svg>
                          </button>
                        </div>
                      </form>
                      {/* End */}
                    </div>
                  </div>
                </div>

                {/* Input Sizes */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Input Sizes</h2>
                  <div className="grid gap-5 md:grid-cols-3">

                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="small">Small</label>
                        <input id="small" className="form-input w-full px-2 py-1" type="text" />
                      </div>
                      {/* End */}
                    </div>

                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="normal">Default</label>
                        <input id="normal" className="form-input w-full" type="text" />
                      </div>
                      {/* End */}
                    </div>

                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="large">Large</label>
                        <input id="large" className="form-input w-full px-4 py-3" type="text" />
                      </div>
                      {/* End */}
                    </div>

                  </div>
                </div>

                {/* Input States */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Input States</h2>
                  <div className="grid gap-5 md:grid-cols-3">

                    <div>
                      {/* Start */}
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="disabled">Disabled</label>
                        <input id="disabled" className="form-input w-full disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed" type="text" placeholder="Something cool..." disabled />
                      </div>
                      {/* End */}
                    </div>

                    <div>
                      {/* Start */}
                      <div>
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="error">
                            Error
                            <span className="text-red-500">*</span>
                          </label>
                          <input id="error" className="form-input w-full border-red-300" type="text" />
                        </div>
                        <div className="text-xs mt-1 text-red-500">This field is required!</div>
                      </div>
                      {/* End */}
                    </div>

                    <div>
                      {/* Start */}
                      <div>
                        <div>
                          <label className="block text-sm font-medium mb-1" htmlFor="success">
                            Success
                            <span className="text-red-500">*</span>
                          </label>
                          <input id="success" className="form-input w-full border-green-300" type="text" />
                        </div>
                        <div className="text-xs mt-1 text-green-500">Sounds good!</div>
                      </div>
                      {/* End */}
                    </div>

                  </div>
                </div>

                {/* Select */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Select</h2>
                  <label className="block text-sm font-medium mb-1" htmlFor="country">Country</label>
                  <select id="country" className="form-select">
                    <option>Italy</option>
                    <option>USA</option>
                    <option>United Kingdom</option>
                  </select>
                </div>

                {/* Checkbox */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Checkbox</h2>
                  <div className="flex flex-wrap items-center -m-3">

                    <div className="m-3">
                      {/* Start */}
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="text-sm ml-2">Active</span>
                      </label>
                      {/* End */}
                    </div>

                    <div className="m-3">
                      {/* Start */}
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="text-sm ml-2">Selected</span>
                      </label>
                      {/* End */}
                    </div>

                    <div className="m-3">
                      {/* Start */}
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox disabled:bg-gray-50" disabled />
                        <span className="text-sm ml-2">Disabled</span>
                      </label>
                      {/* End */}
                    </div>

                  </div>
                </div>

                {/* Radio */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Radio</h2>
                  <div className="flex flex-wrap items-center -m-3">

                    <div className="m-3">
                      {/* Start */}
                      <label className="flex items-center">
                        <input type="radio" name="radio-buttons" className="form-radio" />
                        <span className="text-sm ml-2">Active</span>
                      </label>
                      {/* End */}
                    </div>

                    <div className="m-3">
                      {/* Start */}
                      <label className="flex items-center">
                        <input type="radio" name="radio-buttons" className="form-radio" />
                        <span className="text-sm ml-2">Selected</span>
                      </label>
                      {/* End */}
                    </div>

                    <div className="m-3">
                      {/* Start */}
                      <label className="flex items-center">
                        <input type="radio" name="radio-buttons" className="form-radio disabled:bg-gray-50" disabled />
                        <span className="text-sm ml-2">Disabled</span>
                      </label>
                      {/* End */}
                    </div>

                  </div>
                </div>

                {/* Toggle Switch */}
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold mb-6">Toggle Switch</h2>
                  <div className="flex flex-wrap items-center -m-3">

                    <div className="m-3 w-24">
                      {/* Start */}
                      <div className="flex items-center">
                        <div className="form-switch focus-within:outline-blue">
                          <input type="checkbox" id="switch-1" className="sr-only" checked={toggle1} onChange={() => setToggle1(!toggle1)} />
                          <label className="bg-gray-400" htmlFor="switch-1">
                            <span className="bg-white shadow-sm" aria-hidden="true" />
                            <span className="sr-only">Switch label</span>
                          </label>
                        </div>
                        <div className="text-sm text-gray-400 italic ml-2">{toggle1 ? 'On' : 'Off'}</div>
                      </div>
                      {/* End */}
                    </div>

                    <div className="m-3 w-24">
                      {/* Start */}
                      <div className="flex items-center">
                        <div className="form-switch focus-within:outline-blue">
                          <input type="checkbox" id="switch-2" className="sr-only" checked={toggle2} onChange={() => setToggle2(!toggle2)} />
                          <label className="bg-gray-400" htmlFor="switch-2">
                            <span className="bg-white shadow-sm" aria-hidden="true" />
                            <span className="sr-only">Switch label</span>
                          </label>
                        </div>
                        <div className="text-sm text-gray-400 italic ml-2">{toggle2 ? 'On' : 'Off'}</div>
                      </div>
                      {/* End */}
                    </div>

                    <div className="m-3 w-32">
                      {/* Start */}
                      <div className="flex items-center">
                        <div className="form-switch focus-within:outline-blue">
                          <input type="checkbox" id="switch-3" className="sr-only" checked={toggle3} onChange={() => setToggle3(!toggle3)} disabled />
                          <label className="bg-gray-400" htmlFor="switch-3">
                            <span className="bg-white shadow-sm" aria-hidden="true" />
                            <span className="sr-only">Switch label</span>
                          </label>
                        </div>
                        <div className="text-sm text-gray-400 italic ml-2">Disabled</div>
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

export default FormPage;
