import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Icons from '../icons';
import Button from '../partials/basic/Button';
import DashboardCard from '../partials/DashboardCard';
import EventCard from '../partials/EventCard';

import '../css/additional-styles/horizontalScrollingMenu.css';

function Dashboard() {
  const onWheel = (apiObj, ev) => {
    // const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 50;

    // if (isThouchpad) {
    //   ev.stopPropagation();
    //   return;
    // }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  };

  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

        {/* Dashboard actions */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">

          <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Dashboard 🚗</h1>
          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            <Button variant="secondary" icon={<Icons.Add />}>Add Event</Button>
          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          <DashboardCard title="Events You May Like">
            <ScrollMenu onWheel={onWheel}>
              <EventCard eventId={1} itemId={1} />
              <EventCard eventId={2} itemId={2} />
              <EventCard eventId={3} itemId={3} />
              <EventCard eventId={4} itemId={4} />
            </ScrollMenu>
          </DashboardCard>
          <DashboardCard title="Events You May Like"><EventCard /></DashboardCard>
        </div>

      </div>
    </main>
  );
}

export default Dashboard;
