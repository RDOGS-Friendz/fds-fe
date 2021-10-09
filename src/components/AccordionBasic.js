import React, { useState } from 'react';

function AccordionBasic(props) {

  const [open, setOpen] = useState(false);

  return (
    <div className="px-5 py-4 rounded-sm border border-gray-200">
      <button
        className="flex items-center justify-between w-full group mb-1"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <div className="text-sm text-gray-800 font-medium">{props.title}</div>
        <svg className={`w-8 h-8 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 ${open && 'rotate-180'}`} viewBox="0 0 32 32">
          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
        </svg>
      </button>
      <div className={`text-sm ${!open && 'hidden'}`}>
        {props.children}
      </div>
    </div>
  );
}

export default AccordionBasic;
