import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import TableSimple from './TableFull/TableSimple';
import TableSimpleRow from './TableFull/TableSimpleRow';
import EventDetail from './EventDetail';
import TableSimpleCell from './TableFull/TableSimpleCell';
import Badge from './basic/Badge';

export default function EventTable({
  numItems = 5,
  footerButton = null,
  getEventActionButton = () => null,
  emptyMessage = 'Pfft. There’s nothing to show. Find your buddies and join them in action 🏃🏽‍♂️',
  emptyActionButton = null,
  events,
  totalCount,
  loading,
  fetchMore,
  error,
}) {
  const locations = useSelector(state => state.locations);
  const categories = useSelector(state => state.categories);
  const getIntensityBadgeText = intensity => {
    switch (intensity) {
      case 'LOW':
        return 'Low Intensity';
      case 'INTERMEDIATE':
        return 'Intermediate Intensity';
      case 'HIGH':
        return 'High Intensity';
      default:
        return 'Unknown Intensity';
    }
  };

  const [detailModalOpen, setDetailModalOpen] = useState(Array(numItems).fill(false));

  const setDetailModalOpenByIndex = index => value => setDetailModalOpen(state => state.map((item, itemIndex) => (index === itemIndex ? value : state[itemIndex])));

  const onOpenEventDetail = (e, index) => {
    e.stopPropagation();
    setDetailModalOpenByIndex(index)(true);
  };

  useEffect(() => {
    if (totalCount === Infinity && loading === false && error === null) { fetchMore(); }
  }, [error, fetchMore, loading, totalCount]);

  if (error) {
    return (
      <div className="flex flex-col justify-center w-full h-full">
        <div className="font-semibold text-gray-800 mx-auto my-auto">
          Oops. Some error occurred.
        </div>
      </div>
    );
  }

  return (
    totalCount === 0
      ? (
        <div className="flex flex-col justify-center w-full h-full">
          <div className="font-semibold text-gray-800 mx-auto my-auto">
            {emptyMessage}
          </div>
        </div>
      )
      : (
        <div className="bg-white shadow-lg rounded-sm border border-gray-200 relative">
          <TableSimple columns={['DATE', 'TIME', 'LOCATION', 'TITLE', 'CATEGORY', 'INTENSITY', 'JOINED PEOPLE']}>
            {events.map((event, index) => (
              <TableSimpleRow key={event.id} onClick={e => onOpenEventDetail(e, index)}>
                <TableSimpleCell>{moment(event?.start_time).format('MMM D YYYY')}</TableSimpleCell>
                <TableSimpleCell>
                  {moment(event?.start_time).format('h:mm a')}
                  {' '}
                  -
                  {' '}
                  {moment(event?.end_time).format('h:mm a')}
                </TableSimpleCell>
                <TableSimpleCell>{locations.entities[event?.location_id]?.name}</TableSimpleCell>
                <TableSimpleCell>{event?.title}</TableSimpleCell>
                <TableSimpleCell><Badge>{categories.entities[event?.category_id]?.name}</Badge></TableSimpleCell>
                <TableSimpleCell><Badge>{getIntensityBadgeText(event?.intensity)}</Badge></TableSimpleCell>
                <TableSimpleCell>{event?.participant_ids.length}</TableSimpleCell>
              </TableSimpleRow>
            ))}
          </TableSimple>
          {events.map((event, index) => (
            <EventDetail key={event.id} event={event} open={detailModalOpen[index]} setOpen={setDetailModalOpenByIndex(index)} />
          ))}
          <div className="flex justify-center mt-3">
            {footerButton}
          </div>
        </div>
      )
  );
}
