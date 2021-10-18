import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import SearchForm from '../../partials/actions/SearchForm';
import DeleteButton from '../../partials/actions/DeleteButton';
import DateSelect from '../../components/DateSelect';
import FilterButton from '../../components/DropdownFilter';
import InvoicesTable from '../../partials/invoices/InvoicesTable';
import PaginationClassic from '../../components/PaginationClassic';

function Invoices() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (s) => {
    setSelectedItems([...s]);
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">Invoices ✨</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <SearchForm placeholder="Search by invoice ID…" />
                {/* Add member button */}
                <button type="button" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 flex-shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Create Invoice</span>
                </button>
              </div>

            </div>

            {/* More actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">

              {/* Left side */}
              <div className="mb-4 sm:mb-0">
                <ul className="flex flex-wrap -m-1">
                  <li className="m-1">
                    <button type="button" className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out">
                      All
                      <span className="ml-1 text-indigo-200">67</span>
                    </button>
                  </li>
                  <li className="m-1">
                    <button type="button" className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 hover:border-gray-300 shadow-sm bg-white text-gray-500 duration-150 ease-in-out">
                      Paid
                      <span className="ml-1 text-gray-400">14</span>
                    </button>
                  </li>
                  <li className="m-1">
                    <button type="button" className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 hover:border-gray-300 shadow-sm bg-white text-gray-500 duration-150 ease-in-out">
                      Due
                      <span className="ml-1 text-gray-400">34</span>
                    </button>
                  </li>
                  <li className="m-1">
                    <button type="button" className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 hover:border-gray-300 shadow-sm bg-white text-gray-500 duration-150 ease-in-out">
                      Overdue
                      <span className="ml-1 text-gray-400">19</span>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Right side */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Delete button */}
                <DeleteButton selectedItems={selectedItems} />
                {/* Dropdown */}
                <DateSelect />
                {/* Filter button */}
                <FilterButton align="right" />
              </div>

            </div>

            {/* Table */}
            <InvoicesTable selectedItems={handleSelectedItems} />

            {/* Pagination */}
            <div className="mt-8">
              <PaginationClassic />
            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default Invoices;
