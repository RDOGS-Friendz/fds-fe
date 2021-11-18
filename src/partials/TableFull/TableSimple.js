import React from 'react';

export default function TableSimple({ columns = [], children }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full divide-y divide-gray-200">
        {/* Table header */}
        <thead className="text-xs uppercase text-gray-500 bg-gray-50 rounded-sm">
          <tr>
            {columns.map(item => (
              <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap" key={item}>
                <div className="font-semibold text-left">{item}</div>
              </th>
            ))}
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="text-sm font-medium divide-y divide-gray-100">
          {children}

        </tbody>
      </table>

    </div>
  );
}
