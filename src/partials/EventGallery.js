import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import EventCard from './EventCard';
import useDrag from '../hooks/useDrag';

export default function EventGallery({ eventIds }) {
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

  return (
    <ScrollMenu
      onWheel={onWheel}
      onMouseDown={() => dragStart}
      onMouseUp={() => dragStop}
      onMouseMove={handleDrag}
    >
      {eventIds.map((item, index) => <EventCard eventId={item} itemId={`${item}-${index}`} key={item} dragging={dragging} />)}
    </ScrollMenu>
  );
}
