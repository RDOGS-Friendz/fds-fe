import React from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import ModalBasic from './basic/ModalBasic';
import Button from './basic/Button';
import Badge from './basic/Badge';
import AvatarAndName from './basic/AvatarAndName';
import AvatarExpandable from './basic/AvatarExpandable';
import {
  joinEvent, cancelJoinEvent, addBookmark, deleteBookmark,
} from '../slices/eventsSlice';

export default function EventDetail({ open, setOpen, event }) {
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

  const onJoinEvent = e => {
    e.stopPropagation();
    dispatch(joinEvent({ authToken: auth.token, event_id: event.id }));
  };

  const onCancelJoinedEvent = e => {
    e.stopPropagation();
    dispatch(cancelJoinEvent({ authToken: auth.token, event_id: event.id }));
  };

  const onBookmarkEvent = e => {
    e.stopPropagation();
    dispatch(addBookmark({ authToken: auth.token, event_id: event.id }));
  };

  const onDeleteBookmarkEvent = e => {
    e.stopPropagation();
    dispatch(deleteBookmark({ authToken: auth.token, event_id: event.id }));
  };

  return (
    <ModalBasic modalOpen={open} setModalOpen={setOpen}>
      <div className="px-5 pt-4 pb-1">
        <div className="mb-3">
          {/* Info */}
          <div className="flex space-x-4 text-sm mb-2">
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
            <div>
              <a className="font-medium text-gray-800" href="#0">{`⏳ ${moment(event?.end_time).subtract(moment(event?.start_time)).format('m')} mins`}</a>
            </div>
          </div>
          {/* Title */}
          <h2 className="font-semibold text-2xl text-gray-800">{event?.title}</h2>
          <a className="font-light text-red-600" href="#0">{locations.entities[event?.location_id]?.name}</a>
        </div>
        <div className="mb-5">
          <div className="flex flex-shrink-0 space-x-1 mb-3">
            <Badge>{categories.entities[event?.category_id]?.name ?? ''}</Badge>
            <Badge>{getIntensityBadgeText(event?.intensity)}</Badge>
          </div>
          <div className="mb-3">
            <h3 className="font-medium mb-2 text-gray-500" href="#0">Creator</h3>
            <AvatarAndName real_name={accounts.entities[event?.creator_account_id]?.real_name} username={accounts.entities[event?.creator_account_id]?.username} />
          </div>
          <div className="mb-3 flex flex-col">
            <h3 className="font-medium mb-2 text-gray-500" href="#0">{`${event?.participant_ids.length}/${event?.max_participant_count} joined`}</h3>
            {event?.participant_ids && <AvatarExpandable participants={event?.participant_ids.map(id => accounts.entities[id])} />}
          </div>
        </div>
        <div className="mb-3 flex flex-col">
          <h3 className="font-semibold mb-1 text-gray-500" href="#0">Description</h3>
          <span>{event?.description}</span>
        </div>
      </div>
      <div className="px-5 mb-2">
        <div className="flex flex-row space-x-1 w-full mb-1">
          {
            event?.participant_ids.includes(Number(auth.userAccountId))
              ? <Button className="w-full" variant="tertiary" onClick={onCancelJoinedEvent}>JOINED</Button>
              : <Button className="w-full" onClick={onJoinEvent}>JOIN</Button>
          }
          {
            event?.bookmarked
              ? <Button icon={<BsFillBookmarkFill />} className="w-15" onClick={onDeleteBookmarkEvent} variant="secondary" />
              : <Button icon={<BsFillBookmarkFill />} className="w-15" onClick={onBookmarkEvent} variant="tertiary" />
          }
        </div>
        <span>{`Still need ${Math.max(event?.max_participant_count - event?.participant_ids.length, 0)} people`}</span>
      </div>
      <div className="text-sm px-5 mb-3">
        <span>{`Created on ${moment(event?.create_time).format('MMM D YYYY')}`}</span>
      </div>
    </ModalBasic>
  );
}
