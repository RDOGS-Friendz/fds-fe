import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Avatar from '../basic/Avatar';
import Badge from '../basic/Badge';
import FriendAction from '../basic/FriendAction';
// import DashboardCard from '../DashboardCard';
import useEventsView from '../../hooks/useEventsView';
import EventGallery from '../EventGallery';
import LinkIcon from '../../icons/LinkIcon';
import PageNotFound from '../../pages/utility/PageNotFound';
import { readAccountProfile } from '../../slices/accountsSlice';
import genderTypeTransform from '../../functions/genderTypeTransform';

function ProfileBody({ friendSidebarOpen, setFriendSidebarOpen }) {
  const auth = useSelector(state => state.auth);
  const { accountId } = useParams();
  const accounts = useSelector(state => state.accounts);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const [action, setAction] = useState('not-friend');

  const [
    upcomingEvents,
    upcomingTotalCount,
    upcomingLoading,
    upcomingFetchMore,
  ] = useEventsView('upcoming', '');

  useEffect(() => {
    if (accountId) {
      dispatch(readAccountProfile({ authToken: auth.token, accountId }));
    }
  }, [accountId, auth.token, dispatch]);

  useEffect(() => {
    if (accounts.entities[auth.userAccountId].friendAccountIds?.includes(Number(accountId))) {
      setAction('friend');
    } else if (accounts.entities[auth.userAccountId].friendRequestAccountIds?.includes(Number(accountId))) {
      setAction('request');
    } else if (accounts.entities[auth.userAccountId].pendingFriendRequestAccountIds?.includes(Number(accountId))) {
      setAction('request-sent');
    } else if (auth.userAccountId === accountId) {
      setAction('self');
    } else {
      setAction('not-friend');
    }
  }, [accountId, accounts.entities, auth.userAccountId]);

  if (!accountId) {
    return (
      <div
        className={`flex flex-col w-full items-center justify-center ${
          friendSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
        }`}
      >
        <h2 className="text-gray-800 font-semibold text-4xl mb-3">🔍</h2>
        <h2 className="text-gray-800 font-semibold">Select a friend or friend request to view here.</h2>

      </div>
    );
  }

  if (!accounts.entities[accountId]) { return (<PageNotFound />); }

  return (
    <div
      className={`flex-grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out ${
        friendSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
      }`}
    >
      {/* Profile background */}
      <div className="relative h-24">
        {/* Close button */}
        <button
          type="button"
          className="md:hidden absolute top-4 left-4 sm:left-6 text-white opacity-80 hover:opacity-100"
          onClick={() => setFriendSidebarOpen(!friendSidebarOpen)}
          aria-controls="profile-sidebar"
          aria-expanded={friendSidebarOpen}
        >
          <span className="sr-only">Close sidebar</span>
          <svg className="w-6 h-6 fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="relative px-4 sm:px-6 pb-8">
        {/* Pre-header */}
        <div className="-mt-16 mb-6 sm:mb-3">
          <div className="flex flex-col items-center">
            {/* Avatar */}
            <div className="inline-flex -ml-1 -mt-1 -mb-2 md:-mb-1">
              <Avatar name={accounts.entities[accountId].real_name} size="profile" />
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="text-center mb-3">
          {/* Name */}
          <div className="inline-flex items-start mb-2">
            <h1 className="text-2xl text-gray-800 font-bold">{accounts.entities[accountId].username}</h1>
          </div>
          {/* Bio */}

          {accounts.entities[accountId].tagline !== ''
            && (
            <div className="text-sm mb-2">
              {accounts.entities[accountId].tagline || <Skeleton />}
            </div>
            )}
          {/* Meta */}
          {
            accounts.entities[accountId]?.social_media_acct
            && (
            <div className="flex flex-wrap justify-center space-x-4">
              <div className="flex items-center">
                <LinkIcon extraClass="text-gray-400" />
                <a
                  className="text-sm font-medium whitespace-nowrap text-indigo-500 hover:text-indigo-600 ml-2"
                  href={`https://www.instagram.com/${accounts.entities[accountId]?.social_media_acct}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {accounts.entities[accountId]?.social_media_acct}
                </a>
              </div>
            </div>
            )
          }
        </header>

        {/* Actions */}
        <div className="relative mb-6 sm:mb-3">
          <div className="absolute bottom-0 w-full h-px bg-gray-200" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <FriendAction action={action} accountId={accountId} />
          </div>
        </div>

        {/* Profile content */}
        <div className="flex flex-col xl:flex-row xl:space-x-16 justify-between px-3">
          {/* Main content */}
          <div className="space-y-5 mb-8 xl:mb-0">
            {/* About Me */}
            <div>
              <h2 className="text-gray-800 font-semibold mb-2">Preferred Sports</h2>
              <div className="text-sm space-y-2">
                <div className="sm:ml-0 mt-2 sm:mt-0">
                  <ul className="flex flex-wrap sm:justify-start -m-1">
                    {
                      accounts.entities[accountId].preferred_category_id?.map(id => (
                        <li key={id} className="m-1">
                          <Badge>{categories.entities[id]?.name}</Badge>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>

            {/* About Me */}
            <div>
              <h2 className="text-gray-800 font-semibold mb-2">About Me</h2>
              <div className="text-sm space-y-2">
                {accounts.entities[accountId].about}
              </div>
            </div>

            <div>
              <h2 className="text-gray-800 font-semibold mb-2">
                Past Event Joined by
                {' '}
                {accounts.entities[accountId].username}
              </h2>
              {/* Cards */}
              <div className="grid grid-cols-1 gap-6">
                <EventGallery
                  events={upcomingEvents}
                  totalCount={upcomingTotalCount}
                  loading={upcomingLoading}
                  fetchMore={upcomingFetchMore}
                />
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <aside className="xl:min-w-56 xl:w-56 space-y-3">
            <div className="text-sm">
              <h3 className="font-medium text-gray-800">Real Name</h3>
              <div>{accounts.entities[accountId].real_name}</div>
            </div>
            <div className="text-sm">
              <h3 className="font-medium text-gray-800">Gender</h3>
              <div>{genderTypeTransform(accounts.entities[accountId].gender)}</div>
            </div>
            <div className="text-sm">
              <h3 className="font-medium text-gray-800">Department</h3>
              <div>{accounts.entities[accountId].department}</div>
            </div>
            <div className="text-sm">
              <h3 className="font-medium text-gray-800">Birthday</h3>
              <div className="uppercase">{moment(accounts.entities[accountId].birthday).format('MMM DD, YYYY')}</div>
            </div>
            <div className="text-sm">
              <h3 className="font-medium text-gray-800 ">Joined Date</h3>
              <div className="uppercase">{moment(accounts.entities[accountId].joined_date).format('MMM DD, YYYY')}</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ProfileBody;
