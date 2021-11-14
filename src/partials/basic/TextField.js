import React from 'react';

export default function TextField({
  label,
  type,
  id,
  value,
  onChange,
  onFocus,
  onBlur,
  required = false,
  showHelpText = false,
  helpText = null,
  icon = null,
  wrapperClassName = '',
  inputClassName = '',
  rows = 1,
}) {
  return (
    <>
      <div className={`w-full ${wrapperClassName}`}>
        <label className="block text-sm font-medium mb-1" htmlFor={id}>
          {label}
          {required
        && <span className="text-red-500">*</span>}
        </label>
        <div className="relative w-full">
          {rows === 1
            ? <input id={id} className={`form-input w-70 ${icon ? 'pl-9' : 'pr-9'} ${inputClassName}`} type={type} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
            : <textarea id={id} className={`form-input w-70 ${icon ? 'pl-9' : 'pr-9'} ${inputClassName}`} type={type} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} rows={rows} />}
          <div className="absolute inset-0 right-auto left-2 flex items-center pointer-events-none">{icon}</div>
        </div>
      </div>
      <div>
        {showHelpText && <div className="text-xs mt-1 text-red-500">{helpText}</div>}
      </div>
    </>
  );
}
