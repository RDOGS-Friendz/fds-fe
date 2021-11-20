import React, { useState } from 'react';

export default function AccordionBasic({ title, children, initialState = false }) {
  const [open, setOpen] = useState(initialState);

  return (
    <div className="bg-white rounded-sm border border-gray-200 px-8 py-5 gap-6 mb-5">
      <button
        type="button"
        className="flex items-center justify-between w-full group mb-1"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <div className="text-sm text-gray-800 font-medium">{title}</div>
        <svg className={`w-8 h-8 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 ${open && 'rotate-180'}`} viewBox="0 0 32 32">
          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
        </svg>
      </button>
      <div className={`border-t pt-3 ${!open && 'hidden'}`}>
        {children}
      </div>
    </div>
  );
}
