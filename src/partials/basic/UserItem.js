import React from 'react';
import Avatar from './Avatar';
import Button from './Button';
import Trashcan from '../../icons/Trashcan';
import Check from '../../icons/Check';

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
              <Button icon={<Trashcan />} type="button" variant="secondary" color="danger" className="px-1.5 py-1.5 ml-1 my-0" />
              <Button icon={<Check />} type="button" variant="secondary" color="default" className="px-1.5 py-1.5 ml-1 my-0" />
            </div>
          </div>
        </button>
      ) : (
        <button
          type="button"
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
