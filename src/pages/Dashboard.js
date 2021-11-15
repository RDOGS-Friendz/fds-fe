import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { RiPencilFill } from 'react-icons/ri';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, deleteBookmark } from '../slices/eventsSlice';

import '../css/additional-styles/horizontalScrollingMenu.css';

import useEventsView from '../hooks/useEventsView';
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

  const [
    suggestedEvents,
    suggestedTotalCount,
    suggestedLoading,
    suggestedFetchMore,,
    suggestedReset,
  ] = useEventsView('suggested', '');

  const [
    upcomingEvents,
    upcomingTotalCount,
    upcomingLoading,
    upcomingFetchMore,,
    upcomingReset,
  ] = useEventsView('upcoming', '');

  const [
    joinedByFriendsEvents,
    joinedByFriendsTotalCount,
    joinedByFriendsLoading,
    joinedByFriendsFetchMore,
  ] = useEventsView('joined-by-friend', '');

  const [
    bookmarkedEvents,
    bookmarkedTotalCount,
    bookmarkedLoading,
    bookmarkedFetchMore,
    bookmarkedError,
  ] = useEventsView('bookmarked', '', 10);

  const [
    hostByYouEvents,
    hostByYouTotalCount,
    hostByYouLoading,
    hostByYouFetchMore,
    hostByYouError,
    hostByYouReset,
  ] = useEventsView('all', [['creator_account_id', auth.userAccountId]], 10);

  const onClickAddEvent = e => {
    e.stopPropagation();
    setOpenEventEditCard(true);
  };

  const getOnEditEvent = event => e => {
    e.stopPropagation();
    setEditingEventId(event.id);
    setOpenEventEditCard(true);
  };

  const getOnBookmarkEvent = event => e => {
    e.stopPropagation();
    if (event.bookmarked) {
      dispatch(deleteBookmark({ authToken: auth.token, event_id: event.id }));
    } else {
      dispatch(addBookmark({ authToken: auth.token, event_id: event.id }));
    }
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
              <EventGallery
                events={suggestedEvents}
                totalCount={suggestedTotalCount}
                loading={suggestedLoading}
                fetchMore={suggestedFetchMore}
                joinReset={[upcomingReset]}
              />
            </DashboardCard>

            <DashboardCard title="Your Upcoming Event ➡️️">
              <EventGallery
                events={upcomingEvents}
                totalCount={upcomingTotalCount}
                loading={upcomingLoading}
                fetchMore={upcomingFetchMore}
                joinReset={[upcomingReset]}
              />
            </DashboardCard>

            <DashboardCard title="Bookmarked Events 📌">
              <EventTable
                events={bookmarkedEvents}
                totalCount={bookmarkedTotalCount}
                loading={bookmarkedLoading}
                fetchMore={bookmarkedFetchMore}
                error={bookmarkedError}
                joinReset={[upcomingReset]}
                numItems={10}
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
              <EventGallery
                events={joinedByFriendsEvents}
                totalCount={joinedByFriendsTotalCount}
                loading={joinedByFriendsLoading}
                fetchMore={joinedByFriendsFetchMore}
                joinReset={[upcomingReset]}
              />
            </DashboardCard>

            <DashboardCard title="Events You Host 📣">
              <EventTable
                events={hostByYouEvents}
                totalCount={hostByYouTotalCount}
                loading={hostByYouLoading}
                fetchMore={hostByYouFetchMore}
                error={hostByYouError}
                joinReset={[upcomingReset]}
                numItems={10}
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
            <EventEditCard
              open={openEventEditCard}
              setOpen={setOpenEventEditCard}
              resets={[upcomingReset, hostByYouReset]}
            />
          </div>
        </div>

      </main>
    </>
  );
}

export default Dashboard;
