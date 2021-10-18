import React, { useState } from 'react';

function PlansPanel() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="flex-grow">

      {/* Panel body */}
      <div className="p-6 space-y-6">

        {/* Plans */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl text-gray-800 font-bold mb-4">Plans</h2>
            <div className="text-sm">
              This workspace’s Basic Plan is set to
              <strong className="font-medium">$34</strong>
              {' '}
              per month and will renew on
              <strong className="font-medium">July 9, 2021</strong>
              .
            </div>
          </div>

          {/* Pricing */}
          <div>
            {/* Toggle switch */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-sm text-gray-500 font-medium">Monthly</div>
              <div className="form-switch focus-within:outline-blue">
                <input type="checkbox" id="toggle" className="sr-only" checked={annual} onChange={() => setAnnual(!annual)} />
                <label className="bg-gray-400" htmlFor="toggle">
                  <span className="bg-white shadow-sm" aria-hidden="true" />
                  <span className="sr-only">Pay annually</span>
                </label>
              </div>
              <div className="text-sm text-gray-500 font-medium">
                Annually
                <span className="text-green-500">(-20%)</span>
              </div>
            </div>
            {/* Pricing tabs */}
            <div className="grid grid-cols-12 gap-6">
              {/* Tab 1 */}
              <div className="relative col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-gray-200">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-green-500" aria-hidden="true" />
                <div className="px-5 pt-5 pb-6 border-b border-gray-200">
                  <header className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-green-500 to-green-300 mr-3">
                      <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                      </svg>
                    </div>
                    <h3 className="text-lg text-gray-800 font-semibold">Basic</h3>
                  </header>
                  <div className="text-sm mb-2">Ideal for individuals that need a custom solution with custom tools.</div>
                  {/* Price */}
                  <div className="text-gray-800 font-bold mb-4">
                    <span className="text-2xl">$</span>
                    <span className="text-3xl">{annual ? '14' : '19'}</span>
                    <span className="text-gray-500 font-medium text-sm">/mo</span>
                  </div>
                  {/* CTA */}
                  <button type="button" className="btn border-gray-200 hover:border-gray-300 text-gray-600 w-full">Downgrade</button>
                </div>
                <div className="px-5 pt-4 pb-5">
                  <div className="text-xs text-gray-800 font-semibold uppercase mb-4">What&apos;s included</div>
                  {/* List */}
                  <ul>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Tab 2 */}
              <div className="relative col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-gray-200">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-light-blue-500" aria-hidden="true" />
                <div className="px-5 pt-5 pb-6 border-b border-gray-200">
                  <header className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-light-blue-500 to-light-blue-300 mr-3">
                      <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                      </svg>
                    </div>
                    <h3 className="text-lg text-gray-800 font-semibold">Standard</h3>
                  </header>
                  <div className="text-sm mb-2">Ideal for individuals that need a custom solution with custom tools.</div>
                  {/* Price */}
                  <div className="text-gray-800 font-bold mb-4">
                    <span className="text-2xl">$</span>
                    <span className="text-3xl">{annual ? '34' : '39'}</span>
                    <span className="text-gray-500 font-medium text-sm">/mo</span>
                  </div>
                  {/* CTA */}
                  <button type="button" className="btn border-gray-200 bg-gray-100 text-gray-400 w-full cursor-not-allowed flex items-center" disabled>
                    <svg className="w-3 h-3 flex-shrink-0 fill-current mr-2" viewBox="0 0 12 12">
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span>Current Plan</span>
                  </button>
                </div>
                <div className="px-5 pt-4 pb-5">
                  <div className="text-xs text-gray-800 font-semibold uppercase mb-4">What&apos;s included</div>
                  {/* List */}
                  <ul>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Tab 3 */}
              <div className="relative col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-gray-200">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-indigo-500" aria-hidden="true" />
                <div className="px-5 pt-5 pb-6 border-b border-gray-200">
                  <header className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-indigo-500 to-indigo-300 mr-3">
                      <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                      </svg>
                    </div>
                    <h3 className="text-lg text-gray-800 font-semibold">Plus</h3>
                  </header>
                  <div className="text-sm mb-2">Ideal for individuals that need a custom solution with custom tools.</div>
                  {/* Price */}
                  <div className="text-gray-800 font-bold mb-4">
                    <span className="text-2xl">$</span>
                    <span className="text-3xl">{annual ? '74' : '79'}</span>
                    <span className="text-gray-500 font-medium text-sm">/mo</span>
                  </div>
                  {/* CTA */}
                  <button type="button" className="btn bg-indigo-500 hover:bg-indigo-600 text-white w-full">Upgrade</button>
                </div>
                <div className="px-5 pt-4 pb-5">
                  <div className="text-xs text-gray-800 font-semibold uppercase mb-4">What&apos;s included</div>
                  {/* List */}
                  <ul>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Lorem ipsum dolor sit amet</div>
                    </li>
                    <li className="flex items-center py-1">
                      <svg className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm">Quis nostrud exercitation</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Sales */}
        <section>
          <div className="px-5 py-3 bg-indigo-50 border border-indigo-100 rounded-sm text-center xl:text-left xl:flex xl:flex-wrap xl:justify-between xl:items-center">
            <div className="text-gray-800 font-semibold mb-2 xl:mb-0">Looking for different configurations?</div>
            <button type="button" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">Contact Sales</button>
          </div>
        </section>

        {/* FAQs */}
        <section>
          <div className="my-8">
            <h2 className="text-2xl text-gray-800 font-bold">FAQs</h2>
          </div>
          <ul className="space-y-5">
            <li>
              <div className="font-semibold text-gray-800 mb-1">
                What is the difference between the three versions?
              </div>
              <div className="text-sm">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
              </div>
            </li>
            <li>
              <div className="font-semibold text-gray-800 mb-1">
                Is there any difference between Basic and Plus licenses?
              </div>
              <div className="text-sm">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
            </li>
            <li>
              <div className="font-semibold text-gray-800 mb-1">
                Got more questions?
              </div>
              <div className="text-sm">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum in voluptate velit esse cillum dolore eu fugiat
                {' '}
                <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">contact us</a>
                .
              </div>
            </li>
          </ul>
        </section>

      </div>

      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-gray-200">
          <div className="flex self-end">
            <button type="button" className="btn border-gray-200 hover:border-gray-300 text-gray-600">Cancel</button>
            <button type="button" className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">Save Changes</button>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default PlansPanel;
