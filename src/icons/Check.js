import React from 'react';

export default function Check({ extraClass }) {
  return (
    <svg className={`w-4 h-4 fill-current flex-shrink-0 ${extraClass}`} viewBox="0 0 16 16">
      <path d="M14.3 2.3L5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z" />
    </svg>
  );
}
