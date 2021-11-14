import React from 'react';
import Button from './Button';
import DropdownEditMenu from '../../components/DropdownEditMenu';

export default function FriendAction({ action = 'friend' }) {
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
              <a className="font-medium text-sm text-red-500 hover:text-red-700 flex py-1 px-3" href="#0">
                ❌ Unfriend
              </a>
            </li>
          </DropdownEditMenu>
        </div>
      );
    case 'request':
      return (
        <div className="flex space-x-2 mb-5">
          <Button variant="secondary" color="danger">
            Decline
          </Button>
          <Button>Accept</Button>
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
          <Button icon="📩" variant="secondary" notHidden>
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
