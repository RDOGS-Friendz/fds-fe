import React from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs';
import ModalBasic from './basic/ModalBasic';
import Badge from './basic/Badge';
import Button from './basic/Button';
import AvatarAndName from './basic/AvatarAndName';

export default function EventDetail({ open, setOpen }) {
  return (
    <ModalBasic modalOpen={open} setModalOpen={setOpen}>
      <div className="px-5 pt-4 pb-1">
        <div className="mb-3">
          {/* Info */}
          <div className="flex space-x-4 text-sm mb-2">
            <div>
              <a className="font-medium text-gray-500" href="#0">
                ⏰ 09:30 am - 11:30 am
              </a>
            </div>
            <div>
              <a className="font-medium text-gray-500" href="#0">
                📅 OCT 20 2022
              </a>
            </div>
            <div>
              <a className="font-medium text-gray-500" href="#0">
                ⏳ 120 mins
              </a>
            </div>
          </div>
          {/* Title */}
          <h2 className="font-semibold text-xl text-gray-800">公館水岸夜跑</h2>
          <a className="font-light text-pink-600" href="#0">
            公館水岸三號水門入口處
          </a>
        </div>
        <div className="mb-5">
          <div className="flex flex-shrink-0 space-x-1 mb-3">
            <Badge color="purple">Running</Badge>
            <Badge color="green">High Intensity</Badge>
            <Badge color="yellow">Male Only</Badge>
          </div>
          <div className="mb-3">
            <h3 className="font-medium mb-2 text-gray-500" href="#0">
              Creator
            </h3>
            <AvatarAndName name="dodofk" />
          </div>
          <div className="mb-3 flex flex-col">
            <h3 className="font-medium mb-2 text-gray-500" href="#0">
              5/7 Joined
            </h3>
            <ul className="space-y-2">
              <li>
                <AvatarAndName name="dodofk" />
              </li>
              <li>
                <AvatarAndName name="dodofk1" />
              </li>
              <li>
                <AvatarAndName name="dodofk2" />
              </li>
              <li>
                <AvatarAndName name="dodofk3" />
              </li>
              <li>
                <AvatarAndName name="dodofk4" />
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-3 flex flex-col">
          <h3 className="font-semibold mb-1 text-gray-500" href="#0">
            Description
          </h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </span>
        </div>
      </div>
      <div className="px-5 mb-2">
        <div className="flex flex-row space-x-1 w-full mb-1">
          <Button className="w-full">JOIN</Button>
          <Button icon={<BsFillBookmarkFill />} className="w-15" variant="tertiary" />
        </div>
        <span>Still need 2 people</span>
      </div>
      <div className="px-5 mb-3 text-sm">
        <span>
          Created on
          {' '}
          <span className="uppercase">AUG 8 2021</span>
        </span>
      </div>
    </ModalBasic>
  );
}
