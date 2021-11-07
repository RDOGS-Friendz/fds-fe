import React from 'react';
// import Avatar from '../basic/Avatar';
import UserItem from '../basic/UserItem';

function FriendSidebar({ friendSidebarOpen, setFriendSidebarOpen }) {
  return (
    <div
      id="profile-sidebar"
      className={`absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transform transition-transform duration-200 ease-in-out ${
        friendSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="sticky top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar flex-shrink-0 border-r border-gray-200 md:w-72 xl:w-80 h-[calc(100vh-64px)]">
        {/* Profile group */}
        <div>
          {/* Group body */}
          <div className="px-5 py-4">
            {/* Search form */}
            <form className="relative">
              <label htmlFor="profile-search" className="sr-only">
                Search
              </label>
              <input
                id="profile-search"
                className="form-input w-full pl-9 focus:border-gray-300"
                type="search"
                placeholder="Search…"
              />
              <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                <svg
                  className="w-4 h-4 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 mr-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
            {/* Request */}
            <div className="mt-4">
              <div className="text-xs font-semibold text-gray-400 uppercase mb-3">Requests (3)</div>
              <ul className="mb-6">
                <UserItem setFriendSidebarOpen={setFriendSidebarOpen} userName="cooking_hamster" request />
                <UserItem setFriendSidebarOpen={setFriendSidebarOpen} userName="garyhu" request />
                <UserItem setFriendSidebarOpen={setFriendSidebarOpen} userName="oppa_derek" request />
              </ul>
            </div>
            {/* Friends */}
            <div className="mt-4">
              <div className="text-xs font-semibold text-gray-400 uppercase mb-3">Friends (7)</div>
              <ul className="mb-6">
                <UserItem setFriendSidebarOpen={setFriendSidebarOpen} userName="icheft" isActive />
                <UserItem setFriendSidebarOpen={setFriendSidebarOpen} userName="dododofk" />
                <UserItem setFriendSidebarOpen={setFriendSidebarOpen} userName="dofk" />
                <UserItem setFriendSidebarOpen={setFriendSidebarOpen} userName="donotfk" />
                <UserItem setFriendSidebarOpen={setFriendSidebarOpen} userName="brainchen" />
                <UserItem setFriendSidebarOpen={setFriendSidebarOpen} userName="st_vincent" />
                <UserItem setFriendSidebarOpen={setFriendSidebarOpen} userName="taiwan_no_one" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendSidebar;