import React from 'react';
import { MdAdd } from 'react-icons/md';
import { useSelector } from 'react-redux';

import '../css/additional-styles/horizontalScrollingMenu.css';

import Button from '../partials/basic/Button';
import DashboardCard from '../partials/DashboardCard';
import EventGallery from '../partials/EventGallery';
import EventTable from '../partials/EventTable';

function Dashboard() {
  const auth = useSelector(state => state.auth);
  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        {/* Dashboard actions */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Dashboard 🚗</h1>
          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {/* <Button variant="secondary" icon={<Icons.Add />}>Add Event</Button> */}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          <DashboardCard title="Events You May Like ✨">
            <EventGallery view="suggested" />
          </DashboardCard>

          <DashboardCard title="Your Upcoming Event ➡️️">
            <EventGallery view="upcoming" />
          </DashboardCard>

          <DashboardCard title="Bookmarked Events 📌">
            <EventTable numItems={5} action="bookmark" view="bookmarked" />
          </DashboardCard>

          <DashboardCard title="Event Joined by Friends 👥️">
            <EventGallery view="joined-by-friend" />
          </DashboardCard>

          <DashboardCard title="Events You Host 📣">
            <EventTable
              numItems={4}
              search={[['creator_account_id', auth.userAccountId]]}
              footerButton={<Button icon={<MdAdd />}>Add Event</Button>}
              emptyActionButton={<Button icon={<MdAdd />}>Add Event</Button>}
            />
          </DashboardCard>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
