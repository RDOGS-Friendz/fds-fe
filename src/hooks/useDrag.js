import { useState, useCallback, useRef } from 'react';

export default function useDrag() {
  const [clicked, setClicked] = useState(false);
  const [dragging, setDragging] = useState(false);
  const position = useRef(0);

  const dragStart = useCallback(ev => {
    position.current = ev.clientX;
    setClicked(true);
  }, []);

  const dragStop = useCallback(
    () => window.requestAnimationFrame(() => {
      setDragging(false);
      setClicked(false);
    }),
    [],
  );

  const dragMove = (ev, cb) => {
    const newDiff = position.current - ev.clientX;

    const movedEnough = Math.abs(newDiff) > 5;

    if (clicked && movedEnough) {
      setDragging(true);
    }

    if (dragging && movedEnough) {
      position.current = ev.clientX;
      cb(newDiff);
    }
  };

  return {
    dragStart,
    dragStop,
    dragMove,
    dragging,
    position,
    setDragging,
  };
}
