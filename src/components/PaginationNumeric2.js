import React from 'react';

function PaginationNumeric2() {
  return (
    <div>
      <nav className="flex justify-between" role="navigation" aria-label="Navigation">
        <div className="flex-1 mr-2">
          <a className="btn bg-white border-gray-200 text-gray-300 cursor-not-allowed" href="#0" disabled>&lt;-<span className="hidden sm:inline">&nbsp;Previous</span></a>
        </div>
        <div className="flex-grow text-center">
          <ul className="inline-flex text-sm font-medium -space-x-px">
            <li>
              <span className="inline-flex items-center justify-center rounded-full leading-5 px-2 py-2 bg-white border border-gray-200 text-indigo-500 shadow-sm"><span className="w-5">1</span></span>
            </li>
            <li>
              <a className="inline-flex items-center justify-center leading-5 px-2 py-2 text-gray-600 hover:text-indigo-500 border border-transparent" href="#0"><span className="w-5">2</span></a>
            </li>
            <li>
              <a className="inline-flex items-center justify-center leading-5 px-2 py-2 text-gray-600 hover:text-indigo-500 border border-transparent" href="#0"><span className="w-5">3</span></a>
            </li>
            <li>
              <span className="inline-flex items-center justify-center leading-5 px-2 py-2 text-gray-400">…</span>
            </li>
            <li>
              <a className="inline-flex items-center justify-center rounded-r leading-5 px-2 py-2 text-gray-600 hover:text-indigo-500 border border-transparent" href="#0"><span className="w-5">9</span></a>
            </li>
          </ul>
        </div>
        <div className="flex-1 text-right ml-2">
          <a className="btn bg-white border-gray-200 hover:border-gray-300 text-indigo-500" href="#0"><span className="hidden sm:inline">Next&nbsp;</span>-&gt;</a>
        </div>
      </nav>
    </div>
  );
}

export default PaginationNumeric2;
