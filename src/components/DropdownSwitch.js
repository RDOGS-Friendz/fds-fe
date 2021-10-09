import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import DropdownImage from '../images/user-avatar-32.png';
import DropdownImage01 from '../images/channel-01.png';
import DropdownImage02 from '../images/channel-02.png';
import DropdownImage03 from '../images/channel-03.png';

function DropdownSwitch({
  align
}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    <div className="relative">
      <button
        ref={trigger}
        className="flex-grow flex items-center truncate"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img className="w-8 h-8 rounded-full mr-2" src={DropdownImage} width="32" height="32" alt="Group 01" />
        <div className="truncate">
          <span className="text-sm font-medium">Acme Inc.</span>
        </div>
        <svg className="w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-400" viewBox="0 0 12 12">
          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
        </svg>
      </button>
      <Transition
        className={`origin-top-right z-10 absolute top-full min-w-60 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <ul
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <li>
            <a className="font-medium text-sm text-gray-600 hover:text-gray-800 block py-1.5 px-3" href="#0" onClick={() => setDropdownOpen(false)}>
              <div className="flex items-center justify-between">
                <div className="flex-grow flex items-center truncate">
                  <img className="w-7 h-7 rounded-full mr-2" src={DropdownImage01} width="28" height="28" alt="Channel 01" />
                  <div className="truncate">Acme Inc.</div>
                </div>
                <svg className="w-3 h-3 flex-shrink-0 fill-current text-indigo-500 ml-1" viewBox="0 0 12 12">
                  <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                </svg>
              </div>
            </a>
          </li>
          <li>
            <a className="font-medium text-sm text-gray-600 hover:text-gray-800 block py-1.5 px-3" href="#0" onClick={() => setDropdownOpen(false)}>
              <div className="flex items-center justify-between">
                <div className="flex-grow flex items-center truncate">
                  <img className="w-7 h-7 rounded-full mr-2" src={DropdownImage02} width="28" height="28" alt="Channel 02" />
                  <div className="truncate">Acme Limited</div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a className="font-medium text-sm text-gray-600 hover:text-gray-800 block py-1.5 px-3" href="#0" onClick={() => setDropdownOpen(false)}>
              <div className="flex items-center justify-between">
                <div className="flex-grow flex items-center truncate">
                  <img className="w-7 h-7 rounded-full mr-2" src={DropdownImage03} width="28" height="28" alt="Channel 03" />
                  <div className="truncate">Acme Srl</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </Transition>
    </div>
  )
}

export default DropdownSwitch;