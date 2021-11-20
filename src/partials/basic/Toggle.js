/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export default function Toggle({
  id,
  checked,
  onChange,
  DisplayName,
  AltName,
  onValue,
  offValue,
  showOnOffValue = true,
  ...rest
}) {
  return (
    <>
      <div className="flex items-center">
        <div className="text-sm text-gray-500">{DisplayName}</div>
        {showOnOffValue && <div className="text-sm text-gray-400 italic mr-2 ml-2">{checked ? onValue : offValue}</div>}
        <div className="form-switch focus-within:outline-blue">
          <input
            type="checkbox"
            id={id}
            className="sr-only"
            checked={checked}
            onChange={onChange}
          />
          <label className="bg-gray-400" htmlFor={id}>
            <span className="bg-white shadow-sm" aria-hidden="true" />
            <span className="sr-only">{AltName}</span>
          </label>
        </div>
      </div>
    </>
  );
}
