import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { RiPencilFill } from 'react-icons/ri';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, deleteBookmark, readEvent } from '../slices/eventsSlice';

import '../css/additional-styles/horizontalScrollingMenu.css';

import Button from '../partials/basic/Button';
import DashboardCard from '../partials/DashboardCard';
import EventEditCard from '../partials/EventEditCard';
import EventGallery from '../partials/EventGallery';
import EventTable from '../partials/EventTable';

function Dashboard() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [openEventEditCard, setOpenEventEditCard] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);

  const onClickAddEvent = e => {
    e.stopPropagation();
    setOpenEventEditCard(true);
  };

  const getOnEditEvent = event => e => {
    e.stopPropagation();
    setEditingEventId(event.id);
    setOpenEventEditCard(true);
  };

  const getOnBookmarkEvent = event => async e => {
    e.stopPropagation();
    if (event.bookmarked) {
      await dispatch(deleteBookmark({ authToken: auth.token, event_id: event.id }));
    } else {
      await dispatch(addBookmark({ authToken: auth.token, event_id: event.id }));
    }

    await dispatch(readEvent({ authToken: auth.token, event_id: event.id }));
  };

  return (
    <>
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
              <EventTable
                numItems={5}
                view="bookmarked"
                getEventActionButton={
                  event => (
                    <Button
                      onClick={getOnBookmarkEvent(event)}
                      variant={`${event.bookmarked ? 'secondary' : 'tertiary'}`}
                      icon={<BsFillBookmarkFill />}
                    />
                  )
                }
              />
            </DashboardCard>

            <DashboardCard title="Event Joined by Friends 👥️">
              <EventGallery view="joined-by-friend" />
            </DashboardCard>

            <DashboardCard title="Events You Host 📣">
              <EventTable
                numItems={4}
                search={[['creator_account_id', auth.userAccountId]]}
                getEventActionButton={
                  event => (
                    <Button
                      onClick={getOnEditEvent(event)}
                      variant="tertiary"
                      icon={<RiPencilFill />}
                    />
                  )
                }
                footerButton={<Button onClick={onClickAddEvent} icon={<MdAdd />}>Add Event</Button>}
                emptyActionButton={<Button onClick={onClickAddEvent} icon={<MdAdd />}>Add Event</Button>}
              />
            </DashboardCard>
            <EventEditCard open={openEventEditCard} setOpen={setOpenEventEditCard} />
          </div>
        </div>

      </main>
    </>
  );
}

export default Dashboard;
