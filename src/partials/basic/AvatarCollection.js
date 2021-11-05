import React from 'react';
import Avatar from './Avatar';

export default function AvatarCollection({ names }) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row -space-x-2">
        {names?.slice(0, 3).map(item => <Avatar key={item} name={item} size="sm" />)}
      </div>
    </div>
  );
}
