import React, { useState } from 'react';

function AccordionTableRichItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <tbody className="text-sm">
      <tr>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="flex items-center text-gray-800">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-full mr-2 sm:mr-3">
              <img className="rounded-full ml-1" src={props.image} width="40" height="40" alt={props.customer} />
            </div>
            <div className="font-medium text-gray-800">{props.customer}</div>
          </div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left">{props.email}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left">{props.location}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left">{props.date}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left text-green-500 font-medium">{props.amount}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
          <div className="flex items-center">
            <button
              className={`text-gray-400 hover:text-gray-500 transform ${open && 'rotate-180'}`}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              aria-controls={`description-${props.id}`}
            >
              <span className="sr-only">Menu</span>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
              </svg>
            </button>
          </div>
        </td>
      </tr>
      {/*
      Example of content revealing when clicking the button on the right side:
      Note that you must set a "colSpan" attribute on the <td> element,
      and it should match the number of columns in your table
      */}
      <tr id={`description-${props.id}`} role="region" className={`${!open && 'hidden'}`}>
        <td colSpan="10" className="px-2 first:pl-5 last:pr-5 py-3">
          <div className="bg-gray-50 p-3 -mt-3">
            <div className="text-sm mb-3">
              <div className="font-medium text-gray-800 mb-1">{props.descriptionTitle}</div>
              <div>{props.descriptionBody}</div>
            </div>
            <button className="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white">Approve</button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default AccordionTableRichItem;
