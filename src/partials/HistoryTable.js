import React, { useState } from 'react'; // numItemsPerPage
import moment from 'moment';
import { useSelector } from 'react-redux';
import TableFull from './TableFull/TableFull';
import TableFullRow from './TableFull/TableFullRow';
import TableFullCell from './TableFull/TableFullCell';
import EventDetail from './EventDetail';
import Badge from './basic/Badge';

export default function HistoryTable({
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
          <TableFull columns={['DATE', 'TIME', 'LOCATION', 'TITLE', 'CATEGORY', 'INTENSITY', 'JOINED PEOPLE']}>
            {events.map((event, index) => (
              <TableFullRow key={event.id} onClick={e => onOpenEventDetail(e, index)}>
                <TableFullCell>{moment(event?.start_time).format('MMM D YYYY')}</TableFullCell>
                <TableFullCell>
                  {moment(event?.start_time).format('h:mm a')}
                  {' '}
                  -
                  {' '}
                  {moment(event?.end_time).format('h:mm a')}
                </TableFullCell>
                <TableFullCell>{locations.entities[event?.location_id]?.name}</TableFullCell>
                <TableFullCell>{event?.title}</TableFullCell>
                <TableFullCell><Badge>{categories.entities[event?.category_id]?.name}</Badge></TableFullCell>
                <TableFullCell><Badge>{getIntensityBadgeText(event?.intensity)}</Badge></TableFullCell>
                <TableFullCell>{event?.participant_ids.length}</TableFullCell>
              </TableFullRow>
            ))}
          </TableFull>
          {events.map((event, index) => (
            <EventDetail key={event.id} event={event} open={detailModalOpen[index]} setOpen={setDetailModalOpenByIndex(index)} />
          ))}
          <div className="flex justify-center mt-1">
            {footerButton}
          </div>
        </div>
      )
  );
}
