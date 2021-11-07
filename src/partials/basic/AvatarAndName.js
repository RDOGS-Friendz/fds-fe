import React from 'react';
import Avatar from './Avatar';

export default function AvatarAndName({ real_name, username }) {
  return (
    <div className="inline-flex justify-center items-center group">
      <Avatar name={real_name} />
      <span className="truncate ml-2 text-sm font-medium group-hover:text-gray-800">{username}</span>
    </div>
  );
}
