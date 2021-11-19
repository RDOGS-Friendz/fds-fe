import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { MdAdd } from 'react-icons/md';
import EventEditCard from '../EventEditCard';

export default function AddEventButton() {
  // const auth = useSelector(state => state.auth);
  // const dispatch = useDispatch();
  const [openEventEditCard, setOpenEventEditCard] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);
  const onClickAddEvent = e => {
    e.stopPropagation();
    setEditingEventId(null);
    setOpenEventEditCard(true);
  };
  // const [, , , , , upcomingReset] = useEventsView(
  //   'upcoming',
  //   '',
  // );

  // const [, , , , , hostByYouReset] = useEventsView('all', [['creator_account_id', auth.userAccountId]], 1);

  return (
    <>
      <div className="relative inline-flex">
        <button
          type="button"
          className=" px-3 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full"
          aria-haspopup="true"
          onClick={onClickAddEvent}
          title="Add Event"
        >
          <span className="pr-1 text-sm">Add Event</span>
          <MdAdd />
        </button>
      </div>
      <EventEditCard
        open={openEventEditCard}
        setOpen={setOpenEventEditCard}
        // resets={[upcomingReset, hostByYouReset]}
        editingEventId={editingEventId}
      />
    </>
  );
}
