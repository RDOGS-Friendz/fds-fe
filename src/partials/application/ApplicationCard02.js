import React from 'react';
import { Link } from 'react-router-dom';

function ApplicationCard02(props) {
  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-gray-200 overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Image */}
        <img className="w-full" src={props.image} width="286" height="160" alt={props.name} />
        {/* Card Content */}
        <div className="flex-grow flex flex-col p-5">
          {/* Card body */}
          <div className="flex-grow">
            {/* Header */}
            <header className="mb-2">
              <h3 className="text-lg text-gray-800 font-semibold mb-1">{props.title}</h3>
              <div className="text-sm">{props.content}</div>
            </header>
            {/* Price */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="inline-flex text-sm font-medium bg-green-100 text-green-600 rounded-full text-center px-2.5 py-0.5">{props.deal}</div>
              <div className="inline-flex text-sm font-medium text-gray-500 line-through">{props.price}</div>
            </div>
          </div>
          {/* Card footer */}
          <div>
            <Link className="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white" to={props.link}>Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationCard02;