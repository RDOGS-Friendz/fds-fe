import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';

function DropdownFull() {

  const options = [
    {
      id: 0,
      period: 'Most Popular'
    },
    {
      id: 1,
      period: 'Newest'
    },
    {
      id: 2,
      period: 'Lowest Price'
    },
    {
      id: 3,
      period: 'Highest Price'
    }
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex w-full">
      <button
        ref={trigger}
        className="btn w-full justify-between min-w-44 bg-white border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-600"
        aria-label="Select date range"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="flex items-center">
          <span>{options[selected].period}</span>
        </span>
        <svg className="flex-shrink-0 ml-1 fill-current text-gray-400" width="11" height="7" viewBox="0 0 11 7">
          <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
        </svg>
      </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className="z-10 absolute top-full left-0 w-full bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        enter="transition ease-out duration-100 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          className="font-medium text-sm text-gray-600 divide-y divide-gray-200"
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          {
            options.map(option => {
              return (
                <button
                  key={option.id}
                  tabIndex="0"
                  className={`flex items-center justify-between w-full hover:bg-gray-50 py-2 px-3 cursor-pointer ${option.id === selected && 'text-indigo-500'}`}
                  onClick={() => { setSelected(option.id); setDropdownOpen(false); }}
                  >
                  <span>{option.period}</span>
                  <svg className={`flex-shrink-0 mr-2 fill-current text-indigo-500 ${option.id !== selected && 'invisible'}`} width="12" height="9" viewBox="0 0 12 9">
                    <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                  </svg>
                </button>
              )
            })
          }
        </div>
      </Transition>
    </div>
  );
}

export default DropdownFull;
