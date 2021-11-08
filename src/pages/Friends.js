import React, { useState } from 'react';
import FriendSidebar from '../partials/friend/FriendSidebar';
import ProfileBody from '../partials/friend/ProfileBody';

export default function Friends() {
  const [friendSidebarOpen, setFriendSidebarOpen] = useState(false);

  return (
    <main>
      <div className="relative flex">
        {/* Profile sidebar */}
        <FriendSidebar friendSidebarOpen={friendSidebarOpen} setFriendSidebarOpen={setFriendSidebarOpen} />

        {/* Profile body */}
        <ProfileBody friendSidebarOpen={friendSidebarOpen} setFriendSidebarOpen={setFriendSidebarOpen} />
      </div>
    </main>
  );
}
