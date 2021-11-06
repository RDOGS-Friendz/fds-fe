import React, { useState } from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs';
import AvatarCollection from './basic/AvatarCollection';
import Badge from './basic/Badge';
import Button from './basic/Button';
import EventDetail from './EventDetail';

export default function EventCard({ eventId, itemId, dragging }) {
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const toggleDetailModalOpen = e => {
    e.stopPropagation();
    setDetailModalOpen(true);
  };

  const onJoinEvent = e => {
    e.stopPropagation();
  };

  const onBookmarkEvent = e => {
    e.stopPropagation();
  };

  return (
    <>

      <div id={eventId} role="presentation" className="bg-white hover:bg-gray-50 active:bg-gray-100 cursor-pointer shadow-md rounded-sm border border-gray-200 p-4 pt-2 mx-2 w-80 mb-4 select-none overflow-visible" onClick={toggleDetailModalOpen}>
        {/* Body */}
        <div className="mb-3">
          {/* Info */}
          <div className="flex justify-between text-sm mb-2">
            <div>
              <a className="font-medium text-gray-800" href="#0">⏰ 09:30 am - 11:30 am</a>
            </div>
            <div>
              <a className="font-medium text-gray-800" href="#0">📅 OCT 20 2022</a>
            </div>
          </div>
          {/* Title */}
          <h2 className="font-semibold text-xl text-gray-800">Design new diagrams</h2>
          <a className="font-light text-red-600" href="#0">09:30 am - 11:30 am</a>
        </div>
        <div className="flex flex-shrink-0 space-x-1 mb-3">
          <Badge>Swimming</Badge>
          <Badge>Basketball</Badge>
          <Badge>Ball</Badge>
        </div>
        <div className="mb-3 flex flex-row">
          <AvatarCollection names={['Derek Lu', 'Timmy Chen', 'RDOGS', 'Brian Chen']} />
          <div className="ml-1">
            <span className="text-gray-800 hover:underline text-sm align-middle" href="#0">3/4 joined</span>
          </div>
        </div>
        <div className="flex flex-row space-x-1 w-full">
          <Button className="w-full" onClick={onJoinEvent}>JOIN</Button>
          <Button icon={<BsFillBookmarkFill />} className="w-15" onClick={onBookmarkEvent} variant="tertiary" />
        </div>
      </div>

      <EventDetail open={detailModalOpen} setOpen={setDetailModalOpen} />
    </>
  );
}
