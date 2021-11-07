import React, { useState } from 'react';
import FriendSidebar from '../partials/friend/FriendSidebar';
import FriendBody from '../partials/friend/FriendBody';

export default function Friends() {
  const [friendSidebarOpen, setFriendSidebarOpen] = useState(false);

  return (
    <main>
      <div className="relative flex">
        {/* Profile sidebar */}
        <FriendSidebar friendSidebarOpen={friendSidebarOpen} setFriendSidebarOpen={setFriendSidebarOpen} />

        {/* Profile body */}
        <FriendBody friendSidebarOpen={friendSidebarOpen} setFriendSidebarOpen={setFriendSidebarOpen} />
      </div>
    </main>
  );
}
