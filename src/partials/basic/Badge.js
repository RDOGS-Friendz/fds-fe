import React, { useEffect, useState } from 'react';
import stringHash from 'string-hash';

export default function Badge({ children, color = null }) {
  const [computedColor, setComputedColor] = useState('indigo');

  useEffect(() => {
    const colors = ['indigo', 'light-blue', 'green', 'yellow', 'red', 'blue', 'white', 'grey'];
    if (color == null) {
      setComputedColor(colors[stringHash(children) % colors.length]);
    } else {
      setComputedColor(color);
    }
  }, [children, color]);

  switch (computedColor) {
    case 'indigo':
      return (
        <div className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">
          {children}
        </div>
      );
    case 'light-blue':
      return (
        <div className="text-xs inline-flex font-medium bg-light-blue-600 text-light-blue-600 rounded-full text-center px-2.5 py-1">
          {children}
        </div>
      );
    case 'green':
      return (
        <div className="text-xs inline-flex font-medium bg-green-100 text-green-600 rounded-full text-center px-2.5 py-1">
          {children}
        </div>
      );
    case 'yellow':
      return (
        <div className="text-xs inline-flex font-medium bg-yellow-100 text-yellow-600 rounded-full text-center px-2.5 py-1">
          {children}
        </div>
      );
    case 'red':
      return (
        <div className="text-xs inline-flex font-medium bg-red-100 text-red-600 rounded-full text-center px-2.5 py-1">
          {children}
        </div>
      );
    case 'blue':
      return (
        <div className="text-xs inline-flex font-medium bg-blue-100 text-blue-600 rounded-full text-center px-2.5 py-1">
          {children}
        </div>
      );
    case 'white':
      return (
        <div className="text-xs inline-flex font-medium bg-gray-200 text-gray-500 rounded-full text-center px-2.5 py-1">
          {children}
        </div>
      );
    case 'grey':
      return (
        <div className="text-xs inline-flex font-medium bg-gray-800 text-gray-100 rounded-full text-center px-2.5 py-1">
          {children}
        </div>
      );
    default:
      return (
        <div className="text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1">
          {children}
        </div>
      );
  }
}
