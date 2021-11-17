import React, { useState } from 'react';
import Datepicker from '../partials/basic/DatePicker';
import MultiSelect from '../partials/basic/MultiSelect';
import Select from '../partials/basic/Select';
import TextField from '../partials/basic/TextField';
import Button from '../partials/basic/Button';
import Toggle from '../partials/basic/Toggle';

const sports_categories = [
  { label: 'Running', value: '1' },
  { label: 'Walking', value: '2' },
  { label: 'Swimming', value: '3' },
  { label: 'Cycling', value: '4' },
  { label: 'Triathlon', value: '5' },
  { label: 'Tennis', value: '12' },
  { label: 'Soft Tennis', value: '13' },
  { label: 'Table Tennis', value: '14' },
];

const departments = [
  { label: 'Information Management', value: '1' },
  { label: 'Chinese Literature', value: '2' },
  { label: 'Computer Science', value: '3' },
  { label: 'International Business', value: '4' },
];

function Settings() {
  const [showRealName, setShowRealName] = useState(false);
  const [dept, setDept] = useState('');
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
                          <Toggle
                            id="real-name"
                            checked={showRealName}
                            onChange={() => setShowRealName(!showRealName)}
                            DisplayName="Display My Real Name"
                            AltName="Show Real Name"
                            onValue="On"
                            offValue="Off"
                          />
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
                        <Select
                          label="Department"
                          id="dept"
                          value={dept}
                          options={departments}
                          onChange={e => setDept(e.target.value)}
                          inputClassName="w-80"
                        />
                      </div>
                      <div className="flex justify-between items-center pb-3">
                        {/* Left */}
                        <div>
                          <Datepicker label="Birthday" inputClassName="w-80" mode="single" setValue={setDate} />
                        </div>
                        {/* Right */}
                        <div>
                          {/* Display My Real Name */}
                          <Toggle
                            id="bday"
                            checked={showBday}
                            onChange={() => setShowBday(!showBday)}
                            DisplayName="Display My Birthday"
                            AltName="Show Birthday"
                            onValue="On"
                            offValue="Off"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <MultiSelect
                          label="Preferred Sports"
                          id="preference"
                          name="preference"
                          placeholder="Select..."
                          value={preferredCategory}
                          options={sports_categories}
                          onChange={setPreferredCategory}
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
                      <div className="flex self-end space-x-2">
                        <Button variant="secondary">Cancel</Button>
                        <Button>Save Changes</Button>
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
