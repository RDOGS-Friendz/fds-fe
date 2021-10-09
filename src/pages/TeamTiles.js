import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import SearchForm from '../partials/actions/SearchForm';
import TeamTilesCard from '../partials/team/TeamTilesCard';
import PaginationNumeric from '../partials/PaginationNumeric';

import Image01 from '../images/user-64-01.jpg';
import Image02 from '../images/user-64-02.jpg';
import Image03 from '../images/user-64-03.jpg';
import Image04 from '../images/user-64-04.jpg';
import Image05 from '../images/user-64-05.jpg';
import Image06 from '../images/user-64-06.jpg';
import Image07 from '../images/user-64-07.jpg';
import Image08 from '../images/user-64-08.jpg';
import Image09 from '../images/user-64-09.jpg';
import Image10 from '../images/user-64-10.jpg';
import Image11 from '../images/user-64-11.jpg';
import Image12 from '../images/user-64-12.jpg';

function TeamTiles() {

  const items = [
    {
      id: 0,
      name: 'Dominik McNeail',
      image: Image01,
      link: '#0',
      location: '🇮🇹',
      content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    },
    {
      id: 1,
      name: 'Ivan Mesaros',
      image: Image02,
      link: '#0',
      location: '🇫🇷',
      content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    },
    {
      id: 2,
      name: 'Tisha Yanchev',
      image: Image03,
      link: '#0',
      location: '🇩🇪',
      content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    },
    {
      id: 3,
      name: 'Sergio Gonnelli',
      image: Image04,
      link: '#0',
      location: '🇮🇹',
      content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    },
    {
      id: 4,
      name: 'Jerzy Wierzy',
      image: Image05,
      link: '#0',
      location: '🇪🇸',
      content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    },
    {
      id: 5,
      name: 'Mirko Grubisic',
      image: Image06,
      link: '#0',
      location: '🇩🇪',
      content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    },
    {
      id: 6,
      name: 'Alisha Acharya',
      image: Image07,
      link: '#0',
      location: '🇬🇧',
      content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    },
    {
      id: 7,
      name: 'Brian Halligan',
      image: Image08,
      link: '#0',
      location: '🇺🇸',
      content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    },
    {
      id: 8,
      name: 'Patricia Semklo',
      image: Image09,
      link: '#0',
      location: '🇮🇳',
      content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    },
    {
      id: 9,
      name: 'Maria Martinez',
      image: Image10,
      link: '#0',
      location: '🇮🇹',
      content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    },
    {
      id: 10,
      name: 'Vedad Siljak',
      image: Image11,
      link: '#0',
      location: '🇮🇹🇨🇦',
      content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    },
    {
      id: 11,
      name: 'Dominik Lamakani',
      image: Image12,
      link: '#0',
      location: '🇧🇪',
      content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */} 
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">Acme Inc. Team ✨</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <SearchForm />
                {/* Add member button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 flex-shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add Member</span>
                </button>
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {
                items.map(item => {
                  return (
                    <TeamTilesCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      link={item.link}
                      location={item.location}
                      content={item.content}
                    />
                  )
                })
              }
            </div>

            {/* Pagination */}
            <div className="mt-8">
              <PaginationNumeric />
            </div>

          </div>
        </main>

      </div>
      
    </div>
  );
}

export default TeamTiles;