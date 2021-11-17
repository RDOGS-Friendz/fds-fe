/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Select, { components } from 'react-select';

const customInput = props => (
  <components.Input {...props} inputClassName="outline-none border-none shadow-none focus:ring-transparent" />
);

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    '*': {
      boxShadow: 'none !important',
    },
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05);',

    borderColor: state.isFocused ? 'rgba(165, 180, 252)' : 'rgba(229, 231, 235)',
    '&:hover': {
      borderColor: state.isFocused ? 'rgba(165, 180, 252)' : 'rgba(209, 213, 219)',
    },
  }),
};

export default function MultiSelect({ label, id, name, placeholder = 'Select...', value, options, onChange, required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1" htmlFor={id}>
        {label}
        {required
        && <span className="text-red-500">*</span>}
      </label>
      <Select
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        options={options}
        closeMenuOnSelect={false}
        onChange={onChange}
        components={{ customInput }}
        isMulti
        isSearchable
        styles={customStyles}
      />
    </div>
  );
}
