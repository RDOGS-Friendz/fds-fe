import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import CartItems from '../../partials/ecommerce/CartItems';

function Cart() {

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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">

            {/* Page content */}
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">

              {/* Cart items */}
              <div className="mb-6 lg:mb-0">
                <div className="mb-3">
                  <div className="flex text-sm font-medium text-gray-400 space-x-2">
                    <span className="text-indigo-500">Review</span>
                    <span>-&gt;</span>
                    <span className="text-gray-500">Payment</span>
                    <span>-&gt;</span>
                    <span className="text-gray-500">Confirm</span>
                  </div>
                </div>
                <header className="mb-2">
                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">Shopping Cart (3) ✨</h1>
                </header>

                {/* Cart items */}
                <CartItems />

              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-white p-5 shadow-lg rounded-sm border border-gray-200 lg:w-72 xl:w-80">
                  <div className="text-gray-800 font-semibold mb-2">Order Summary</div>
                  {/* Order details */}
                  <ul className="mb-4">
                    <li className="text-sm w-full flex justify-between py-3 border-b border-gray-200">
                      <div>Products & Subscriptions</div>
                      <div className="font-medium text-gray-800">$205</div>
                    </li>
                    <li className="text-sm w-full flex justify-between py-3 border-b border-gray-200">
                      <div>Shipping</div>
                      <div className="font-medium text-gray-800">-</div>
                    </li>
                    <li className="text-sm w-full flex justify-between py-3 border-b border-gray-200">
                      <div>Taxes</div>
                      <div className="font-medium text-gray-800">$48</div>
                    </li>
                    <li className="text-sm w-full flex justify-between py-3 border-b border-gray-200">
                      <div>Total due (including taxes)</div>
                      <div className="font-medium text-green-600">$253</div>
                    </li>
                  </ul>
                  {/* Promo box */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium mb-1" htmlFor="promo">Promo Code</label>
                      <div className="text-sm text-gray-400 italic">optional</div>
                    </div>
                    <input id="promo" className="form-input w-full mb-2" type="text" />
                    <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed shadow-none" disabled>Apply Code</button>
                  </div>
                  <div className="mb-4">
                    <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Buy Now - $253.00</button>
                  </div>
                  <div className="text-xs text-gray-500 italic text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <a className="underline hover:no-underline" href="#0">Terms</a>.</div>
                </div>
              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Cart;