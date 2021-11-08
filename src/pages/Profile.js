import React, { useState } from 'react';
import ProfileBody from '../partials/FriendAndProfile/ProfileBody';

export default function Profile() {
  const [friendSidebarOpen, setFriendSidebarOpen] = useState(false);

  return (
    <main>
      <div className="relative flex">
        {/* Profile body */}
        <ProfileBody friendSidebarOpen={friendSidebarOpen} setFriendSidebarOpen={setFriendSidebarOpen} />
      </div>
    </main>
  );
}
