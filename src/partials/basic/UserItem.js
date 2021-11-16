import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from './Avatar';
import Button from './Button';
import Trashcan from '../../icons/Trashcan';
import Check from '../../icons/Check';

import { acceptFriendRequest, declineFriendRequest } from '../../slices/accountsSlice';

export default function UserItem({ setFriendSidebarOpen, onClick, accountId, username = '', real_name = '', isActive, request }) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const accounts = useSelector(state => state.accounts);

  const onClickAcceptFriendRequest = () => {
    dispatch(acceptFriendRequest({ authToken: auth.token, accountId: accounts.entities[auth.userAccountId], friendAccountId: accountId }));
  };

  const onClickDeclineFriendRequest = () => {
    dispatch(declineFriendRequest({ authToken: auth.token, accountId: accounts.entities[auth.userAccountId], friendAccountId: accountId }));
  };

  return (
    <li className="-mx-2 rounded hover:bg-gray-100">
      {request ? (
        <button
          className={`w-full p-2 rounded ${isActive && 'bg-indigo-100'}`}
          onClick={() => { setFriendSidebarOpen(false); onClick(); }}
          type="button"
        >
          <div className="flex justify-between group">
            <div className="flex items-center">
              <div className="relative mr-2">
                <Avatar name={real_name} />
              </div>
              <div className="truncate">
                <span className="text-sm font-medium text-gray-800">{username}</span>
              </div>
            </div>
            <div className="hidden group-hover:flex flex items-center">
              <Button
                icon={<Trashcan />}
                type="button"
                variant="secondary"
                color="danger"
                className="px-1.5 py-1.5 ml-1 my-0"
                onClick={onClickDeclineFriendRequest}
              />
              <Button
                icon={<Check />}
                type="button"
                variant="secondary"
                color="default"
                className="px-1.5 py-1.5 ml-1 my-0"
                onClick={onClickAcceptFriendRequest}
              />
            </div>
          </div>
        </button>
      ) : (
        <button
          type="button"
          className={`w-full p-2 rounded ${isActive && 'bg-indigo-100'}`}
          onClick={() => { setFriendSidebarOpen(false); onClick(); }}
        >
          <div className="flex items-center">
            <div className="relative mr-2">
              <Avatar name={real_name} />
            </div>
            <div className="truncate">
              <span className="text-sm font-medium text-gray-800">{username}</span>
            </div>
          </div>
        </button>
      )}
    </li>
  );
}
