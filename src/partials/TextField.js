import React from 'react';

export default function TextField({
  label, type, id, value, onChange, required = false, showHelpText = false, helpText = null,
}) {
  return (
    <>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor={id}>
          {label}
          {required
        && <span className="text-red-500">*</span>}
        </label>
        <input id={id} className="form-input w-full" type={type} value={value} onChange={(e) => onChange(e)} />
      </div>
      <div>
        {showHelpText && <div className="text-xs mt-1 text-red-500">{helpText}</div>}
      </div>
    </>
  );
}
