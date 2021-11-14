/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Select, { components } from 'react-select';
import Datepicker from '../partials/basic/DatePicker';
import TextField from '../partials/basic/TextField';

const Input = props => (
  <components.Input {...props} inputClassName="outline-none border-none shadow-none focus:ring-transparent" />
);

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    '*': {
      boxShadow: 'none !important',
    },
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05);',
    // className="text-sm text-gray-800 bg-white border rounded leading-5 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm"
    borderColor: state.isFocused ? 'rgba(165, 180, 252)' : 'rgba(229, 231, 235)',
    '&:hover': {
      borderColor: state.isFocused ? 'rgba(165, 180, 252)' : 'rgba(209, 213, 219)',
    },
  }),
};

const options = [
  { label: 'Running', value: '1' },
  { label: 'Walking', value: '2' },
  { label: 'Swimming', value: '3' },
  { label: 'Cycling', value: '4' },
  { label: 'Triathlon', value: '5' },
  { label: 'Tennis', value: '12' },
  { label: 'Soft Tennis', value: '13' },
  { label: 'Table Tennis', value: '14' },
];

function Settings() {
  const [showRealName, setShowRealName] = useState(false);
  const [showBday, setShowBday] = useState(false);
  const [date, setDate] = useState(Date());
  const [description, setDescription] = useState('');
  const [preferredCategory, setPreferredCategory] = useState([]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="mb-8">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">Settings ⚙️</h1>
            </div>

            {/* Content */}
            <div className="bg-white shadow-lg rounded-sm mb-8">
              <div className="flex flex-col md:flex-row md:-mr-px">
                <div className="flex-grow">
                  {/* Panel body */}
                  <div className="p-6 space-y-6">
                    {/* Picture */}
                    <section className="border-b border-gray-200 pb-3">
                      <h2 className="text-xl text-gray-800 font-bold mb-1">Static Profile</h2>
                      <div className="text-sm mb-3">You cannot change the value under this section.</div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">
                          Username
                        </label>
                        icheft
                      </div>
                      <div className="flex justify-between items-center py-3">
                        {/* Left */}
                        <div>
                          <div className="text-sm font-medium mb-1">Real Name</div>
                          我的真名字
                        </div>
                        {/* Right */}
                        <div>
                          {/* Display My Real Name */}
                          <div className="flex items-center ml-4">
                            <div className="text-sm text-gray-500 mr-2 ">Display My Real Name</div>
                            <div className="text-sm text-gray-400 italic mr-2 ml-2">{showRealName ? 'On' : 'Off'}</div>
                            <div className="form-switch focus-within:outline-blue">
                              <input
                                type="checkbox"
                                id="real-name"
                                className="sr-only"
                                checked={showRealName}
                                onChange={() => setShowRealName(!showRealName)}
                              />
                              <label className="bg-gray-400" htmlFor="real-name">
                                <span className="bg-white shadow-sm" aria-hidden="true" />
                                <span className="sr-only">Show Real Name</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">
                          Gender
                        </label>
                        Male
                      </div>
                    </section>
                    {/* Business Profile */}
                    <section>
                      <h2 className="text-xl text-gray-800 font-bold mb-1">User Profile</h2>
                      <div className="text-sm mb-3">Modify the content so that friends can know you better.</div>
                      <div className="mb-3">
                        <TextField inputClassName="w-80" label="Tagline" value="PM of IM3008" />
                      </div>
                      <div className="mb-3">
                        <TextField inputClassName="w-80" label="Instagram  Username" value="icheft" />
                      </div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium mb-1" htmlFor="country">
                          Department
                        </label>
                        <select id="country" className="form-select w-80">
                          <option>Information Management</option>
                          <option>Chinese Literature</option>
                          <option>Accounting</option>
                        </select>
                      </div>
                      <div className="flex justify-between items-center pb-3">
                        {/* Left */}
                        <div>
                          <Datepicker label="Birthday" inputClassName="w-80" mode="single" setValue={setDate} />
                        </div>
                        {/* Right */}
                        <div>
                          {/* Display My Real Name */}
                          <div className="flex items-center ml-4">
                            <div className="text-sm text-gray-500 mr-2">Display My Birthday</div>
                            <div className="text-sm text-gray-400 italic mr-2 ml-2">{showBday ? 'On' : 'Off'}</div>
                            <div className="form-switch focus-within:outline-blue">
                              <input
                                type="checkbox"
                                id="bday"
                                className="sr-only"
                                checked={showBday}
                                onChange={() => setShowBday(!showBday)}
                              />
                              <label className="bg-gray-400" htmlFor="bday">
                                <span className="bg-white shadow-sm" aria-hidden="true" />
                                <span className="sr-only">Show Birthday</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium mb-1" htmlFor="country">
                          Preferred Sports
                        </label>
                        <Select
                          name="preference"
                          placeholder="Select..."
                          value={preferredCategory}
                          options={options}
                          closeMenuOnSelect={false}
                          onChange={setPreferredCategory}
                          components={{ Input }}
                          isMulti
                          isSearchable
                          styles={customStyles}
                        />
                      </div>
                      <div>
                        <TextField
                          inputClassName="w-full h-40"
                          label="Description"
                          value={description}
                          onChange={e => setDescription(e.target.value)}
                          rows={3}
                        />
                      </div>
                    </section>
                  </div>
                  {/* Panel footer */}
                  <footer>
                    <div className="flex flex-col px-6 py-5 border-t border-gray-200">
                      <div className="flex self-end">
                        <button className="btn border-gray-200 hover:border-gray-300 text-gray-600">Cancel</button>
                        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">Save Changes</button>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Settings;
