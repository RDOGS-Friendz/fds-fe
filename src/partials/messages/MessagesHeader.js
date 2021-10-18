import React from 'react';

import User01 from '../../images/user-32-01.jpg';
import User02 from '../../images/user-32-07.jpg';

function MessagesHeader({
  msgSidebarOpen,
  setMsgSidebarOpen,
}) {
  return (
    <div className="sticky top-16">
      <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 sm:px-6 md:px-5 h-16">
        {/* People */}
        <div className="flex items-center">
          {/* Close button */}
          <button
            type="button"
            className="md:hidden text-gray-400 hover:text-gray-500 mr-4"
            onClick={() => setMsgSidebarOpen(!msgSidebarOpen)}
            aria-controls="messages-sidebar"
            aria-expanded={msgSidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* People list */}
          <div className="flex -space-x-3 -ml-px">
            <a className="block" href="#0">
              <img className="rounded-full border-2 border-white box-content" src={User01} width="32" height="32" alt="User 01" />
            </a>
            <a className="block" href="#0">
              <img className="rounded-full border-2 border-white box-content" src={User02} width="32" height="32" alt="User 04" />
            </a>
          </div>
        </div>
        {/* Buttons on the right side */}
        <div className="flex">
          <button type="button" className="p-1.5 flex-shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2">
            <svg className="w-4 h-4 fill-current text-gray-400" viewBox="0 0 16 16">
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
            </svg>
          </button>
          <button type="button" className="p-1.5 flex-shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2">
            <svg className="w-4 h-4 fill-current text-indigo-500" viewBox="0 0 16 16">
              <path d="M14.3 2.3L5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessagesHeader;
