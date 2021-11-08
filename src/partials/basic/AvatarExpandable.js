import React, { useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import TruncatedList from 'react-truncate-list';
import AvatarAndName from './AvatarAndName';

import 'react-truncate-list/dist/styles.css';
import '../../css/additional-styles/expandable-list.css';

export default function AvatarExpandable({ participants }) {
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
        if (participants.length <= 3) {
          return <div className="mb-0" />;
        }
        return (
          <button onClick={collapse} className="expand-button">
            <MdExpandLess />
          </button>
        );
      }}
    >
      {participants.map(({ id, real_name, username }) => (
        <AvatarAndName key={id} real_name={real_name} username={username} />
      ))}
    </TruncatedList>
  );
}
