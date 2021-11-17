import React, { useState } from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import AvatarCollection from './basic/AvatarCollection';
import Badge from './basic/Badge';
import Button from './basic/Button';
import {
  joinEvent, cancelJoinEvent, addBookmark, deleteBookmark,
} from '../slices/eventsSlice';
import EventDetail from './EventDetail';

export default function EventCard({ event, dragging, joinReset = [], bookmarkReset = [] }) {
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const locations = useSelector(state => state.locations);
  const categories = useSelector(state => state.categories);
  const accounts = useSelector(state => state.accounts);

  const getIntensityBadgeText = intensity => {
    switch (intensity) {
      case 'LOW': return 'Low Intensity';
      case 'INTERMEDIATE': return 'Intermediate Intensity';
      case 'HIGH': return 'High Intensity';
      default: return 'Unknown Intensity';
    }
  };

  const onOpenEventDetail = e => {
    if (!dragging) {
      e.stopPropagation();
      setDetailModalOpen(true);
    }
  };

  const onJoinEvent = e => {
    e.stopPropagation();
    dispatch(joinEvent({ authToken: auth.token, event_id: event.id }));

    joinReset.map(f => f());
  };

  const onCancelJoinEvent = e => {
    e.stopPropagation();
    dispatch(cancelJoinEvent({ authToken: auth.token, event_id: event.id }));

    joinReset.map(f => f());
  };

  const onBookmarkEvent = e => {
    e.stopPropagation();
    dispatch(addBookmark({ authToken: auth.token, event_id: event.id }));

    bookmarkReset.map(f => f());
  };

  const onDeleteBookmarkEvent = e => {
    e.stopPropagation();
    dispatch(deleteBookmark({ authToken: auth.token, event_id: event.id }));

    bookmarkReset.map(f => f());
  };

  return (
    <>

      <div id={event.id} role="presentation" className="bg-white col-span-3 hover:bg-gray-50 active:bg-gray-100 cursor-pointer shadow-md rounded-sm border border-gray-200 p-4 pt-2 mx-2 w-80 h-full select-none overflow-visible" onClick={onOpenEventDetail}>
        {/* Body */}
        <div className="mb-3">
          {/* Info */}
          <div className="flex justify-between text-sm mb-2">
            <div>
              <a className="font-medium text-gray-800" href="#0">
                {`⏰ ${moment(event?.start_time).format('h:mm a')} - ${moment(event?.end_time).format('h:mm a')} `}
              </a>
            </div>
            <div>
              <a className="font-medium text-gray-800" href="#0">
                {`📅 ${moment(event?.start_time).format('MMM D YYYY')}`}
              </a>
            </div>
          </div>
          {/* Title */}
          <h2 className="font-semibold text-xl text-gray-800">{event?.title}</h2>
          <a className="text-red-600" href="#0">{locations.entities[event?.location_id]?.name}</a>
        </div>
        <div className="flex flex-shrink-0 space-x-1 mb-3">
          <Badge>{categories.entities[event?.category_id]?.name ?? ''}</Badge>
          <Badge>{getIntensityBadgeText(event?.intensity)}</Badge>
        </div>
        <div className="mb-3 flex flex-row">
          <AvatarCollection accounts={event?.participant_ids.map(id => accounts.entities[id])} />
          <div className="ml-1">
            <span className="text-gray-800 hover:underline text-sm align-middle" href="#0">{`${event?.participant_ids.length}/${event?.max_participant_count} joined`}</span>
          </div>
        </div>
        <div className="flex flex-row space-x-1 w-full">
          {
            event?.participant_ids.includes(Number(auth.userAccountId))
              ? <Button className="w-full" variant="tertiary" onClick={onCancelJoinEvent}>JOINED</Button>
              : <Button className="w-full" onClick={onJoinEvent}>JOIN</Button>
          }
          {
            event?.bookmarked
              ? <Button icon={<BsFillBookmarkFill />} className="w-15" onClick={onDeleteBookmarkEvent} variant="secondary" />
              : <Button icon={<BsFillBookmarkFill />} className="w-15" onClick={onBookmarkEvent} variant="tertiary" />
          }
        </div>
      </div>

      <EventDetail event={event} open={detailModalOpen} setOpen={setDetailModalOpen} />
    </>
  );
}
