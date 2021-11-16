import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import FriendSidebar from '../partials/FriendAndProfile/FriendSidebar';
import ProfileBody from '../partials/FriendAndProfile/ProfileBody';
import { readAccountFriendRequests, readAccountFriends } from '../slices/accountSlice';

export default function Friends() {
  const [friendSidebarOpen, setFriendSidebarOpen] = useState(false);
  const [activeFriendAccountId, setActiveFriendAccountId] = useState(null);

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const accounts = useSelector(state => state.accounts);

  useEffect(() => {
    dispatch(readAccountFriends({ authToken: auth.token, accountId: auth.userAccountId }));
    dispatch(readAccountFriendRequests({ authToken: auth.token, accountId: auth.userAccountId }));
  }, [auth.token, auth.userAccountId, dispatch]);

  useEffect(() => {
    if (
      location.pathname === '/friends'
      && accounts.entities[auth.userAccountId].friendAccountIds
      && accounts.entities[auth.userAccountId].friendAccountIds.length !== 0
    ) {
      history.push(`/friends/${accounts.entities[auth.userAccountId].friendAccountIds[0]}`);
    }
  }, [accounts.entities, auth.userAccountId, history, location.pathname]);

  return (
    <main>
      <div className="relative flex">

        {/* Profile body */}
        <Switch>
          <Route path="/friends/:accountId">
            {/* Profile sidebar */}
            <FriendSidebar
              friendSidebarOpen={friendSidebarOpen}
              setFriendSidebarOpen={setFriendSidebarOpen}
              activeAccountId={activeFriendAccountId}
              setActiveAccountId={setActiveFriendAccountId}
            />
            <ProfileBody
              friendSidebarOpen={friendSidebarOpen}
              setFriendSidebarOpen={setFriendSidebarOpen}
              activeAccountId={activeFriendAccountId}
              action="friend"
            />
          </Route>
          <Route path="/friends">
            {/* Profile sidebar */}
            <FriendSidebar
              friendSidebarOpen={friendSidebarOpen}
              setFriendSidebarOpen={setFriendSidebarOpen}
              activeAccountId={activeFriendAccountId}
              setActiveAccountId={setActiveFriendAccountId}
            />
            <div
              className={`flex flex-col w-full items-center justify-center ${
                friendSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
              }`}
            >
              <h2 className="text-gray-800 font-semibold text-4xl mb-3">🔍</h2>
              <h2 className="text-gray-800 font-semibold">Select a friend or friend request to view here.</h2>

            </div>
          </Route>
        </Switch>
      </div>
    </main>
  );
}
