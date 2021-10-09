import React from 'react';
import { Link } from 'react-router-dom';

function ApplicationCard03(props) {

  const handleIcon = (id) => {
    switch (id) {
      case 0:
        return (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path className="text-indigo-300" d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z" />
            <path className="text-indigo-600" d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z" />
            <path className="text-indigo-500" d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z" />
          </svg>
        );
      case 1:
        return (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <circle className="text-light-blue-200" cx="15" cy="15" r="9" fillRule="nonzero" />
            <circle className="text-light-blue-400" cx="9" cy="9" r="9" />
          </svg>
        );
      case 2:
        return (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path className="text-green-400" d="M23.864 4.45L19.553.139l-2.337 4.663 1.98 1.98zM4.802 6.784l1.979-1.979L4.45.136.139 4.447z" />
            <path className="text-green-200" d="M4 15.385V8.619L0 6.614v10.769z" />
            <path className="text-green-500" d="M8.414 6L6 8.414v7.172L8.414 18h7.172L18 15.586V8.414L15.586 6z" />
            <path className="text-green-200" d="M8.615 4h6.766l2.005-4H6.617z" />
            <path className="text-green-400" d="M6.784 19.198l-1.98-1.98L.136 19.55l4.311 4.311z" />
            <path className="text-green-200" d="M20 8.615v6.766l4 2.005V6.617z" />
            <path className="text-green-400" d="M19.198 17.216l-1.979 1.979 2.331 4.669 4.311-4.311z" />
            <path className="text-green-200" d="M15.385 20H8.619l-2.005 4h10.769z" />
          </svg>
        );
      case 3:
        return (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path className="text-red-100" d="M12 10l12 7-12 7-12-7z" />
            <path className="text-red-300" d="M12 5l12 7-12 7-12-7z" />
            <path className="text-red-500" d="M12 0l12 7-12 7L0 7z" />
          </svg>
        );
      default:
        return;
    }
  };

  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="flex flex-col h-full text-center p-5">
        <div className="flex-grow mb-1">
          <div className="inline-flex justify-center items-center w-12 h-12 bg-gray-100 rounded-full mb-2">
            {handleIcon(props.id)}
          </div>
          <h3 className="text-lg text-gray-800 font-semibold mb-1">{props.title}</h3>
        </div>
        <div>
          <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600" to={props.link}>Explore -&gt;</Link>
        </div>
      </div>
    </div>
  );
}

export default ApplicationCard03;