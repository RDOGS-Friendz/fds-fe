import React from 'react';

const getClassNames = (variant, color) => {
  switch (`${variant}-${color}`) {
    case 'primary-default': {
      return 'btn bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-800 text-white';
    }
    case 'secondary-default': {
      return 'btn bg-white border-gray-200 hover:border-gray-300 active:border-gray-400 text-indigo-500';
    }
    case 'primary-danger': {
      return 'btn bg-red-500 hover:bg-red-600 active:bg-indigo-800 text-white';
    }
    case 'secondary-danger': {
      return 'btn bg-white border-gray-200 hover:border-gray-300 active:border-gray-400 text-red-500';
    }
    default: {
      return 'btn border-gray-200 hover:border-gray-300 active:border-gray-400 text-gray-600';
    }
  }
};

export default function Button({
  children,
  icon,
  variant = 'primary',
  color = 'default',
  type = 'button',
  disabled,
  onClick,
}) {
  return (
    <button className={`${getClassNames(variant, color)} disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed shadow-none`} type={type} disabled={disabled} onClick={onClick}>
      {icon}
      <span className={`${icon && 'hidden xs:block ml-2'}`}>
        {children}
      </span>
    </button>
  );
}
