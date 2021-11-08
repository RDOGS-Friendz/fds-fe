import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import TableSimple from './TableSimple/TableSimple';
import TableSimpleRow from './TableSimple/TableSimpleRow';
import EventDetail from './EventDetail';
import TableSimpleCell from './TableSimple/TableSimpleCell';

export default function EventTable({
  numItems = 5,
  footerButton = null,
  getEventActionButton = () => null,
  emptyMessage = 'Oops. There’s nothing to show.',
  emptyActionButton = null,
  events,
  totalCount,
  loading,
  fetchMore,
  error,
}) {
  const locations = useSelector(state => state.locations);
  const categories = useSelector(state => state.categories);

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
          <div className="flex justify-center mt-3">
            {emptyActionButton}
          </div>
        </div>
      )
      : (
        <>
          <TableSimple columns={['TITLE', 'CAT.', 'LOCATION', 'DATE', '']}>
            {events.map((event, index) => (
              <TableSimpleRow key={event.id} onClick={e => onOpenEventDetail(e, index)}>
                <TableSimpleCell>{event?.title}</TableSimpleCell>
                <TableSimpleCell>{categories.entities[event?.category_id]?.name}</TableSimpleCell>
                <TableSimpleCell>{locations.entities[event?.location_id]?.name}</TableSimpleCell>
                <TableSimpleCell>{moment(event?.start_time).format('MMM D YYYY')}</TableSimpleCell>
                <TableSimpleCell>
                  {getEventActionButton(event)}
                </TableSimpleCell>
              </TableSimpleRow>
            ))}
          </TableSimple>
          {events.map((event, index) => (
            <EventDetail key={event.id} event={event} open={detailModalOpen[index]} setOpen={setDetailModalOpenByIndex(index)} />
          ))}
          <div className="flex justify-center mt-3">
            {footerButton}
          </div>
        </>
      )
  );
}
