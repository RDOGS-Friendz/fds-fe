import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import DropdownEditMenu from '../../components/DropdownEditMenu';
import { sendFriendRequest, acceptFriendRequest, declineFriendRequest, deleteFriend } from '../../slices/accountsSlice';

export default function FriendAction({ action = 'friend', accountId }) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const onClickUnfriend = () => {
    dispatch(deleteFriend({ authToken: auth.token, accountId: auth.userAccountId, friendAccountId: accountId }));
  };

  const onClickSendFriendRequest = () => {
    dispatch(sendFriendRequest({ authToken: auth.token, accountId: auth.userAccountId, otherAccountId: accountId }));
  };

  const onClickAcceptFriendRequest = () => {
    dispatch(acceptFriendRequest({ authToken: auth.token, accountId: auth.userAccountId, otherAccountId: accountId }));
  };

  const onClickDeclineFriendRequest = () => {
    dispatch(declineFriendRequest({ authToken: auth.token, accountId: auth.userAccountId, otherAccountId: accountId }));
  };

  /* Actions */
  switch (action) {
    case 'friend':
      return (
        <div className="flex space-x-2 mb-5">
          <Button icon="🙌" notHidden>
            Friend
          </Button>
          <DropdownEditMenu className="relative inline-flex">
            <li>
              <a
                className="font-medium text-sm text-red-500 hover:text-red-700 flex py-1 px-3"
                href="#0"
                onClick={onClickUnfriend}
              >
                ❌ Unfriend
              </a>
            </li>
          </DropdownEditMenu>
        </div>
      );
    case 'request':
      return (
        <div className="flex space-x-2 mb-5">
          <Button variant="secondary" color="danger" onClick={onClickDeclineFriendRequest}>
            Decline
          </Button>
          <Button onClick={onClickAcceptFriendRequest}>
            Accept
          </Button>
        </div>
      );
    case 'request-sent':
      return (
        <div className="flex space-x-2 mb-5">
          <Button disabled>Pending</Button>
        </div>
      );
    case 'not-friend':
      return (
        <div className="flex space-x-2 mb-5">
          <Button icon="📩" variant="secondary" notHidden onClick={onClickSendFriendRequest}>
            Add Friend
          </Button>
        </div>
      );
    case 'self':
      return (
        <div className="flex space-x-2 mb-5">
          <Button icon="👀" variant="secondary" notHidden disabled>
            This is how your profile looks like to Friends
          </Button>
        </div>
      );
    default:
      break;
  }
}
