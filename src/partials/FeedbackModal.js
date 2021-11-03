import React from 'react';
import ModalBlank from './ModalBlank';

export default function FeedbackModal({
  open, setOpen, buttons = null, variant, content,
}) {
  const renderIcon = () => {
    switch (variant) {
      case 'success': {
        return (
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-green-100">
            <svg className="w-4 h-4 flex-shrink-0 fill-current text-green-500" viewBox="0 0 16 16">
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
            </svg>
          </div>
        ); }
      case 'danger': {
        return (
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-red-100">
            <svg className="w-4 h-4 flex-shrink-0 fill-current text-red-500" viewBox="0 0 16 16">
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
            </svg>
          </div>
        ); }
      case 'info': {
        return (
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-indigo-100">
            <svg className="w-4 h-4 flex-shrink-0 fill-current text-indigo-500" viewBox="0 0 16 16">
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
            </svg>
          </div>
        ); }
      default: { return (
        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-indigo-100">
          <svg className="w-4 h-4 flex-shrink-0 fill-current text-indigo-500" viewBox="0 0 16 16">
            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
          </svg>
        </div>
      ); }
    }
  };

  return (
    <ModalBlank id="success-modal" modalOpen={open} setModalOpen={setOpen}>
      <div className="p-5 flex space-x-4">
        {/* Icon */}
        { renderIcon() }
        {/* Content */}
        <div>
          {/* Modal header */}
          <div className="mb-2">
            <div className="text-lg font-semibold text-gray-800">Upgrade your Subscription?</div>
          </div>
          {/* Modal content */}
          <div className="text-sm mb-10">
            <div className="space-y-2">
              <p>{ content }</p>
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex flex-wrap justify-end space-x-2">
            { buttons }
          </div>
        </div>
      </div>
    </ModalBlank>
  );
}
