import React, { useEffect, useState } from 'react';

function PaginationNumeric({ pageIndex, setPageIndex, numOfPage = 12 }) {
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    if (numOfPage <= 7) { // no ellipse
      setDisplayItems(Array(numOfPage).fill().map((_, i) => i + 1));
    } else if (pageIndex < 4) {
      setDisplayItems([1, 2, 3, 4, 5, '…', numOfPage]);
    } else if (pageIndex >= 4 && pageIndex < numOfPage - 4) {
      setDisplayItems([1, '…', pageIndex, pageIndex + 1, pageIndex + 2, '…', numOfPage]);
    } else {
      setDisplayItems([1, '…', numOfPage - 4, numOfPage - 3, numOfPage - 2, numOfPage - 1, numOfPage]);
    }
  }, [numOfPage, pageIndex]);

  return (
    <div className="flex justify-center">
      <nav className="flex" role="navigation" aria-label="Navigation">
        <div className="mr-2">
          <button type="button" disabled={pageIndex === 0} onClick={() => setPageIndex(pageIndex - 1)} className={`inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-gray-200 ${pageIndex === 0 ? 'text-gray-300 cursor-default' : 'hover:bg-indigo-500 text-gray-600 hover:text-white shadow-sm'}`}>
            <span className="sr-only">Previous</span>
            <wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
            </svg>
          </button>
        </div>
        <ul className="inline-flex text-sm font-medium -space-x-px shadow-sm">
          {displayItems.map(item => (item === '…'
            ? (
              <li>
                <button type="button" disabled className="cursor-default">
                  <span className="inline-flex items-center justify-center rounded-l leading-5 px-3.5 py-2 bg-white border border-gray-200 text-indigo-500">…</span>
                </button>
              </li>
            ) : (
              <li>
                <button type="button" onClick={() => setPageIndex(item - 1)}>
                  <span className={`inline-flex items-center justify-center rounded-l leading-5 px-3.5 py-2 bg-white border border-gray-200 ${pageIndex === item - 1 && 'text-indigo-500'}`}>{item}</span>
                </button>
              </li>
            )))}
        </ul>
        <div className="ml-2">
          <button type="button" disabled={pageIndex === numOfPage - 1} onClick={() => setPageIndex(pageIndex + 1)} className={`inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-gray-200 ${pageIndex === numOfPage - 1 ? 'text-gray-300 cursor-default' : 'hover:bg-indigo-500 text-gray-600 hover:text-white shadow-sm'}`}>
            <span className="sr-only">Next</span>
            <wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default PaginationNumeric;
