import React from 'react';
import Transition from '../../utils/Transition';

export default function SearchBar(
  { id,
    icon,
    label,
    type,
    required,
    showHelpText = false,
    helpText = null,
    inputValue = '',
    onInputChange,
    onSelectSuggestion,
    onInputBlur,
    showSuggestions = false,
    suggestions = [],
    placeholder,
  },
) {
  return (
    <>
      <div className="relative w-full">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor={id}>
            {label}
            {required
        && <span className="text-red-500">*</span>}
          </label>
          <div className="relative w-full">
            <input
              id={id}
              className={`form-input w-full md:w-72 ${icon ? ' pl-9' : ' pr-9'}`}
              type={type}
              value={inputValue}
              onChange={onInputChange}
              onBlur={onInputBlur}
              autoComplete="off"
              placeholder={placeholder}
            />
            {/* <div className="absolute inset-0 right-auto left-2 flex items-center pointer-events-none">{icon}</div> */}
          </div>
          <div>
            {showHelpText && <div className="text-xs mt-1 text-red-500">{helpText}</div>}
          </div>
        </div>
        <Transition
          show={showSuggestions}
          tag="div"
          className="z-50 absolute top-full left-0 w-full bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
          enter="transition ease-out duration-100 transform"
          enterStart="opacity-0 -translate-y-2"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-out duration-100"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
        >
          <div
            className="font-medium text-sm text-gray-600 divide-y divide-gray-200"
          >
            { suggestions.slice(0, 8).map(suggestion => (
              <button
                key={suggestion.id}
                value={suggestion.id}
                type="button"
                tabIndex="0"
                className="flex items-center justify-between w-full hover:bg-gray-50 py-2 px-3 cursor-pointer"
                onClick={onSelectSuggestion}
              >
                {suggestion.name}
              </button>
            ))}
            {suggestions.length === 0 && (
            <button
              type="button"
              tabIndex="0"
              className="flex items-center justify-between w-full hover:bg-gray-50 py-2 px-3 italic text-gray-400"
              disabled
            >
              <p>Can&apos;t find match</p>
            </button>
            )}
          </div>
        </Transition>
      </div>
    </>
  );
}
