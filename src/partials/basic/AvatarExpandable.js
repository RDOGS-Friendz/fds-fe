import React, { useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import TruncatedList from 'react-truncate-list';
import AvatarAndName from './AvatarAndName';

import 'react-truncate-list/dist/styles.css';
import '../../css/additional-styles/expandable-list.css';

export default function AvatarExpandable({ names }) {
  const [expanded, setExpanded] = useState(false);
  const expand = () => setExpanded(true);
  const collapse = () => setExpanded(false);
  return (
    <TruncatedList
      className={`list expandable ${expanded ? 'expanded' : ''} `}
      alwaysShowTruncator
      renderTruncator={({ hiddenItemsCount }) => {
        if (hiddenItemsCount > 0) {
          return (
            <button onClick={expand} className="expand-button">
              <MdExpandMore />
            </button>
          );
        }
        if (names.length <= 3) {
          return <div className="mb-0" />;
        }
        return (
          <button onClick={collapse} className="expand-button">
            <MdExpandLess />
          </button>
        );
      }}
    >
      {names.map(item => <AvatarAndName key={item} name={item} />)}
    </TruncatedList>
  );
}
