import React from 'react';
import Avatar from '../basic/Avatar';
import Badge from '../basic/Badge';
import FriendAction from '../basic/FriendAction';
// import DashboardCard from '../DashboardCard';
import EventGallery from '../EventGallery';

function FriendBody({ friendSidebarOpen, setFriendSidebarOpen }) {
  return (
    <div
      className={`flex-grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out ${
        friendSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
      }`}
    >
      {/* Profile background */}
      <div className="relative h-24">
        {/* Close button */}
        <button
          className="md:hidden absolute top-4 left-4 sm:left-6 text-white opacity-80 hover:opacity-100"
          onClick={() => setFriendSidebarOpen(!friendSidebarOpen)}
          aria-controls="profile-sidebar"
          aria-expanded={friendSidebarOpen}
        >
          <span className="sr-only">Close sidebar</span>
          <svg className="w-6 h-6 fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="relative px-4 sm:px-6 pb-8">
        {/* Pre-header */}
        <div className="-mt-16 mb-6 sm:mb-3">
          <div className="flex flex-col items-center">
            {/* Avatar */}
            <div className="inline-flex -ml-1 -mt-1 -mb-2 md:-mb-1">
              <Avatar name="icheft" size="profile" />
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="text-center mb-4">
          {/* Name */}
          <div className="inline-flex items-start mb-2">
            <h1 className="text-2xl text-gray-800 font-bold">icheft</h1>
          </div>
          {/* Bio */}
          <div className="text-sm mb-3">Nothing more than a fitness fanatic.</div>
          {/* Meta */}
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 fill-current flex-shrink-0 text-gray-400" viewBox="0 0 16 16">
                <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
              </svg>
              <a
                className="text-sm font-medium whitespace-nowrap text-indigo-500 hover:text-indigo-600 ml-2"
                href="https://www.instagram.com/brian_lxchen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                brian_lxchen
              </a>
            </div>
          </div>
        </header>

        {/* Actions */}
        <div className="relative mb-6 sm:mb-3">
          <div className="absolute bottom-0 w-full h-px bg-gray-200" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <FriendAction action="friend" />
          </div>
        </div>

        {/* Profile content */}
        <div className="flex flex-col xl:flex-row xl:space-x-16">
          {/* Main content */}
          <div className="space-y-5 mb-8 xl:mb-0">
            {/* About Me */}
            <div>
              <h2 className="text-gray-800 font-semibold mb-2">Preferred Sports</h2>
              <div className="text-sm space-y-2">
                <div className="sm:ml-0 mt-2 sm:mt-0">
                  <ul className="flex flex-wrap sm:justify-start -m-1">
                    <li className="m-1">
                      <Badge>Running</Badge>
                    </li>
                    <li className="m-1">
                      <Badge>Workout</Badge>
                    </li>
                    <li className="m-1">
                      <Badge>Tennis</Badge>
                    </li>
                    <li className="m-1">
                      <Badge>Cycling</Badge>
                    </li>
                    <li className="m-1">
                      <Badge>Swimming</Badge>
                    </li>
                    <li className="m-1">
                      <Badge>American Football</Badge>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* About Me */}
            <div>
              <h2 className="text-gray-800 font-semibold mb-2">About Me</h2>
              <div className="text-sm space-y-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor magna aliqua.</p>
              </div>
            </div>

            {/* Departments */}
            <div>
              <h2 className="text-gray-800 font-semibold mb-2">Past Event Joined by icheft</h2>
              {/* Cards */}
              <div className="grid grid-cols-1 gap-6">
                <EventGallery eventIds={[1, 2, 3, 4]} />
                {/* <DashboardCard title="Events You May Like ✨">
                </DashboardCard> */}
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <aside className="xl:min-w-56 xl:w-56 space-y-3">
            <div className="text-sm">
              <h3 className="font-medium text-gray-800">Real Name</h3>
              <div>Brian L. Chen</div>
            </div>
            <div className="text-sm">
              <h3 className="font-medium text-gray-800">Gender</h3>
              <div>Male</div>
            </div>
            <div className="text-sm">
              <h3 className="font-medium text-gray-800">Department</h3>
              <div>Information Management, National Taiwan University</div>
            </div>
            <div className="text-sm">
              <h3 className="font-medium text-gray-800">Birthday</h3>
              <div className="uppercase">Jan 06, 2000</div>
            </div>
            <div className="text-sm">
              <h3 className="font-medium text-gray-800">Joined Date</h3>
              <div>Sep 01, 2021</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default FriendBody;