import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FriendSidebar from '../partials/FriendAndProfile/FriendSidebar';
import ProfileBody from '../partials/FriendAndProfile/ProfileBody';
import { readAccountFriendRequests, readAccountFriends } from '../slices/accountSlice';

export default function Friends() {
  const [friendSidebarOpen, setFriendSidebarOpen] = useState(false);
  const [activeFriendAccountId, setActiveFriendAccountId] = useState(null);

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  // const accounts = useSelector(state => state.accounts);

  useEffect(() => {
    dispatch(readAccountFriends({ authToken: auth.token, accountId: auth.userAccountId }));
    dispatch(readAccountFriendRequests({ authToken: auth.token, accountId: auth.userAccountId }));
  }, [auth.token, auth.userAccountId, dispatch]);

  return (
    <main>
      <div className="relative flex">
        {/* Profile sidebar */}
        <FriendSidebar
          friendSidebarOpen={friendSidebarOpen}
          setFriendSidebarOpen={setFriendSidebarOpen}
          activeAccountId={activeFriendAccountId}
          setActiveAccountId={setActiveFriendAccountId}
        />

        {/* Profile body */}
        <ProfileBody
          friendSidebarOpen={friendSidebarOpen}
          setFriendSidebarOpen={setFriendSidebarOpen}
          activeAccountId={activeFriendAccountId}
          action="friend"
        />
      </div>
    </main>
  );
}
