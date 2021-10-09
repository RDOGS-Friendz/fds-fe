import React from 'react';

function PaginationClassic() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <nav className="mb-4 sm:mb-0 sm:order-1" role="navigation" aria-label="Navigation">
        <ul className="flex justify-center">
          <li className="ml-3 first:ml-0">
            <a className="btn bg-white border-gray-200 text-gray-300 cursor-not-allowed" href="#0" disabled>&lt;- Previous</a>
          </li>
          <li className="ml-3 first:ml-0">
            <a className="btn bg-white border-gray-200 hover:border-gray-300 text-indigo-500" href="#0">Next -&gt;</a>
          </li>
        </ul>
      </nav>
      <div className="text-sm text-gray-500 text-center sm:text-left">
        Showing <span className="font-medium text-gray-600">1</span> to <span className="font-medium text-gray-600">10</span> of <span className="font-medium text-gray-600">467</span> results
      </div>
    </div>
  );
}

export default PaginationClassic;
