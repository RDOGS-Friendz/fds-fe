import React, { useState } from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { RiPencilFill } from 'react-icons/ri';
import TableSimple from './TableSimple/TableSimple';
import TableSimpleRow from './TableSimple/TableSimpleRow';
import EventDetail from './EventDetail';
import TableSimpleCell from './TableSimple/TableSimpleCell';
import Button from './basic/Button';

export default function EventTable({ numItems = 5, action }) {
  const getActionIcon = () => {
    switch (action) {
      case 'bookmark': return <BsFillBookmarkFill />;
      case 'edit': return <RiPencilFill />;
      default: return <BsFillBookmarkFill />;
    }
  };

  const [detailModalOpen, setDetailModalOpen] = useState(Array(numItems).fill(false));

  const setDetailModalOpenByIndex = index => value => setDetailModalOpen(state => state.map((item, itemIndex) => (index === itemIndex ? value : state[itemIndex])));

  const onOpenEventDetail = (e, index) => {
    e.stopPropagation();
    setDetailModalOpenByIndex(index)(true);
  };

  return (
    <>
      <TableSimple columns={['TITLE', 'CAT.', 'LOCATION', 'DATE', '']}>
        {Array(numItems).fill().map((item, index) => (

          <TableSimpleRow key={item} onClick={e => onOpenEventDetail(e, index)}>
            <TableSimpleCell>公館水岸跑</TableSimpleCell>
            <TableSimpleCell>Running</TableSimpleCell>
            <TableSimpleCell>水岸</TableSimpleCell>
            <TableSimpleCell>DEC 12 2022</TableSimpleCell>
            <TableSimpleCell><Button variant="tertiary" icon={getActionIcon()} /></TableSimpleCell>
          </TableSimpleRow>
        ))}
      </TableSimple>
      {Array(numItems).fill().map((item, index) => (
        <EventDetail key={item} open={detailModalOpen[index]} setOpen={setDetailModalOpenByIndex(index)} />
      ))}
    </>
  );
}
