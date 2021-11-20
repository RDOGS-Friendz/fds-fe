import React from 'react';

export default function Select({
  label, id, value, onChange, options, required = false, showHelpText = false, helpText = null, inputClassName = '',
}) {
  return (
    <>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor={id}>
          {label}
          {required
          && <span className="text-red-500">*</span>}
        </label>
        <select id={id} className={`form-select w-full md:w-72 ${inputClassName}`} value={value} onChange={onChange}>
          {options.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
      </div>
      <div>
        {showHelpText && <div className="text-xs mt-1 text-red-500">{helpText}</div>}
      </div>
    </>
  );
}
