/* eslint-disable react/jsx-props-no-spreading */
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
    case 'tertiary-default': {
      return 'btn bg-gray-50 border-gray-200 hover:border-gray-300 active:border-gray-400 text-gray-600';
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
  className,
  notHidden,
  ...rest
}) {
  return (
    <button
      className={`${getClassNames(
        variant,
        color,
      )} disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed shadow-none ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      <span className={`${notHidden && 'mr-2'}`}>{icon}</span>
      <span className={`${icon && children && !notHidden && 'hidden xs:block ml-2'}`}>{children}</span>
    </button>
  );
}
