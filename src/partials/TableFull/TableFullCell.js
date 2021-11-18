import React from 'react';

export default function TableFullCell({ children }) {
  return (
    <td className="px-2 first:pl-5 last:pr-5 py-5 whitespace-nowrap">
      <div className="flex items-center text-gray-800">
        {children}
      </div>
    </td>
  );
}
