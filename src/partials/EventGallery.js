import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { PulseLoader } from 'react-spinners';
import EventCard from './EventCard';
import useDrag from '../hooks/useDrag';
import useEventCardsView from '../hooks/useEventsView';

export default function EventGallery({
  view,
  search,
  emptyMessage = 'Oops. There’s nothing to show.',
  emptyActionButton = null,
}) {
  // const [apiRef] = useHookWithRefCallback({ current: { isLastItemVisible: false } });
  const {
    dragStart, dragStop, dragMove, dragging,
  } = useDrag();

  const [events, totalCount, loading, fetchMore] = useEventCardsView(view, search);
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
    // console.log(apiObj);
    if ((apiObj.isLastItemVisible) && !loading) {
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
      // apiRef={apiRef}
          onUpdate={onUpdate}
          onWheel={onWheel}
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
        >
          {events.map(item => <EventCard event={item} itemId={item.id} key={item.id} dragging={dragging} />)}
          {(totalCount === Infinity || loading) && <PulseLoader size={6} color="gray" />}
        </ScrollMenu>
      )
  );
}
