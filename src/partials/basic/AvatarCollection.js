import React from 'react';
import Avatar from './Avatar';

export default function AvatarCollection({ accounts = [] }) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row -space-x-2">
        {accounts.slice(0, 3).map(item => <Avatar key={item.account_id} name={item.real_name} size="sm" />)}
      </div>
    </div>
  );
}
