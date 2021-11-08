import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { PulseLoader } from 'react-spinners';
import EventCard from './EventCard';
import useDrag from '../hooks/useDrag';

export default function EventGallery({
  emptyMessage = 'Oops. There’s nothing to show.',
  emptyActionButton = null,
  events,
  totalCount,
  loading,
  fetchMore,
  joinReset,
  bookmarkReset,
}) {
  const {
    dragStart, dragStop, dragMove, dragging,
  } = useDrag();

  const handleDrag = ({ scrollContainer }) => ev => dragMove(ev, posDiff => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += posDiff;
    }
  });

  const onWheel = (apiObj, ev) => {
    // const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 50;

    // if (isThouchpad) {
    //   ev.stopPropagation();
    //   return;
    // }

    if (ev.deltaX > 0) {
      apiObj.scrollNext();
    } else if (ev.deltaX < 0) {
      apiObj.scrollPrev();
    }
  };

  const onUpdate = apiObj => {
    if (((apiObj.isLastItemVisible) && !loading) || totalCount === Infinity) {
      fetchMore();
    }
  };

  return (
    totalCount === 0
      ? (
        <div className="flex flex-col justify-center w-full h-full">
          <div className="font-semibold text-gray-800 mx-auto my-auto">
            {emptyMessage}
          </div>
          {emptyActionButton}
        </div>
      )
      : (
        <ScrollMenu
          scrollContainerClassName="items-stretch"
          onUpdate={onUpdate}
          onWheel={onWheel}
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
        >
          {events.map(item => (
            <EventCard
              event={item}
              itemId={item.id}
              key={item.id}
              dragging={dragging}
              joinReset={joinReset}
              bookmarkReset={bookmarkReset}
            />
          ))}
          {(totalCount !== events.length)
            && (
            <div id="loader" role="presentation" className="bg-white hover:bg-gray-50 active:bg-gray-100 cursor-pointer shadow-md rounded-sm border border-gray-200 p-4 mx-2 w-36 h-full select-none overflow-visible flex flex-row items-center justify-center">
              {/* Body */}
              <PulseLoader speedMultiplier={loading ? 1 : 0} size={6} color="gray" />
            </div>
            )}
        </ScrollMenu>

      )
  );
}
