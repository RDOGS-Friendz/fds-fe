import React from 'react';
import Avatar from './Avatar';

export default function AvatarAndName({ name }) {
  return (
    <div className="inline-flex justify-center items-center group">
      <Avatar name={name} />
      <span className="truncate ml-2 text-sm font-medium group-hover:text-gray-800">{name}</span>
    </div>
  );
}
