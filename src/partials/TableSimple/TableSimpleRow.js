import React from 'react';

export default function TableSimpleRow({ children, onClick }) {
  return (
    <>
      <tr className="hover:bg-gray-50 cursor-pointer" role="presentation" onClick={onClick}>
        {children}
      </tr>
    </>
  );
}
