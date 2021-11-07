import React from 'react';

export default function Trashcan({ extraClass }) {
  return (
    <svg className={`w-4 h-4 fill-current flex-shrink-0 ${extraClass}`} viewBox="0 0 16 16">
      <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
    </svg>
  );
}
