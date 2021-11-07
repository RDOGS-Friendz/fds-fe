import React from 'react';

export default function TableSimple({ columns = [], children }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        {/* Table header */}
        <thead className="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
          <tr>
            {columns.map(item => (
              <th className="p-2" key={item}>
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
