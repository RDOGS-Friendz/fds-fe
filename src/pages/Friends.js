import React, { useState } from 'react';
import FriendSidebar from '../partials/FriendAndProfile/FriendSidebar';
import ProfileBody from '../partials/FriendAndProfile/ProfileBody';

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
