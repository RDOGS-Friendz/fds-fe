import React from 'react';

export default function TableSimpleCell({ children }) {
  return (
    <td className="p-2">
      <div className="flex items-center">
        {children}
      </div>
    </td>
  );
}
