import React from 'react';
import Avatar from './Avatar';

export default function UserItem({ setFriendSidebarOpen, userName, isActive, request }) {
  return (
    <li className="-mx-2 rounded hover:bg-gray-100">
      {request ? (
        <button
          className={`w-full p-2 rounded ${isActive && 'bg-indigo-100'}`}
          onClick={() => setFriendSidebarOpen(false)}
          type="button"
        >
          <div className="flex justify-between group">
            <div className="flex items-center">
              <div className="relative mr-2">
                <Avatar name={userName} />
              </div>
              <div className="truncate">
                <span className="text-sm font-medium text-gray-800">{userName}</span>
              </div>
            </div>
            <div className="hidden group-hover:flex flex items-center">
              <button className="btn-sm border-gray-200 mx-1 hover:border-gray-300">
                <svg className="w-4 h-4 fill-current text-red-500 flex-shrink-0" viewBox="0 0 16 16">
                  <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                </svg>
              </button>
              <button className="btn-sm border-gray-200 hover:border-gray-300">
                <svg className="w-4 h-4 fill-current text-indigo-500 flex-shrink-0" viewBox="0 0 16 16">
                  <path d="M14.3 2.3L5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z" />
                </svg>
              </button>
            </div>
          </div>
        </button>
      ) : (
        <button
          className={`w-full p-2 rounded ${isActive && 'bg-indigo-100'}`}
          onClick={() => setFriendSidebarOpen(false)}
        >
          <div className="flex items-center">
            <div className="relative mr-2">
              <Avatar name={userName} />
            </div>
            <div className="truncate">
              <span className="text-sm font-medium text-gray-800">{userName}</span>
            </div>
          </div>
        </button>
      )}
    </li>
  );
}
