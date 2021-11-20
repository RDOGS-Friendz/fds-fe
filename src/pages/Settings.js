import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';
// import Datepicker from '../partials/basic/DatePicker';
import MultiSelect from '../partials/basic/MultiSelect';
import Select from '../partials/basic/Select';
import TextField from '../partials/basic/TextField';
import Button from '../partials/basic/Button';

import { readAccountProfile, editAccountProfile } from '../slices/accountsSlice';
import { browseAllCategory } from '../slices/categoriesSlice';
import genderTypeTransform from '../functions/genderTypeTransform';

import 'react-datepicker/dist/react-datepicker.css';

const departments = [
  { label: 'Information Management', value: 'Information Management' },
  { label: 'Chinese Literature', value: 'Chinese Literature' },
  { label: 'Foreign Languages & Literatures', value: 'Foreign Languages & Literatures' },
  { label: 'History', value: 'History' },
  { label: 'Philosophy', value: 'Philosophy' },
  { label: 'Anthropology', value: 'Anthropology' },
  { label: 'Library & Information Science', value: 'Library & Information Science' },
  { label: 'Japanese Language & Literature', value: 'Japanese Language & Literature' },
  { label: 'Drama & Theatre', value: 'Drama & Theatre' },
  { label: 'Mathematics', value: 'Mathematics' },
  { label: 'Physics', value: 'Physics' },
  { label: 'Chemistry', value: 'Chemistry' },
  { label: 'Geosciences', value: 'Geosciences' },
  { label: 'Psychology', value: 'Psychology' },
  { label: 'Geography', value: 'Geography' },
  { label: 'Atmospheric Sciences', value: 'Atmospheric Sciences' },
  { label: 'Political Science', value: 'Political Science' },
  { label: 'Economics', value: 'Economics' },
  { label: 'Sociology', value: 'Sociology' },
  { label: 'Social work', value: 'Social work' },
  { label: 'Clinical Laboratory Sciences & Medical Biotechnology', value: 'Clinical Laboratory Sciences & Medical Biotechnology' },
  { label: 'Dentistry', value: 'Dentistry' },
  { label: 'Pharmacy', value: 'Pharmacy' },
  { label: 'Civil Engineering', value: 'Civil Engineering' },
  { label: 'Mechanical Engineering', value: 'Mechanical Engineering' },
  { label: 'Chemical Engineering', value: 'Chemical Engineering' },
  { label: 'Engineering Science & Ocean Engineering', value: 'Engineering Science & Ocean Engineering' },
  { label: 'Materials Science & Engineering', value: 'Materials Science & Engineering' },
  { label: 'Biomedical Engineering', value: 'Biomedical Engineering' },
  { label: 'Veterinary Medicine', value: 'Veterinary Medicine' },
  { label: 'Agronomy', value: 'Agronomy' },
  { label: 'Bioenvironmental Systems Engineering', value: 'Bioenvironmental Systems Engineering' },
  { label: 'Agricultural Chemistry', value: 'Agricultural Chemistry' },
  { label: 'Animal Science & Technology', value: 'Animal Science & Technology' },
  { label: 'Agricultural Economics', value: 'Agricultural Economics' },
  { label: 'Horticulture & Landscape Architecture', value: 'Horticulture & Landscape Architecture' },
  { label: 'Bio-industry Communication & Development', value: 'Bio-industry Communication & Development' },
  { label: 'Biomechatronics Engineering', value: 'Biomechatronics Engineering' },
  { label: 'Entomology', value: 'Entomology' },
  { label: 'Plant Pathology & Microbiology', value: 'Plant Pathology & Microbiology' },
  { label: 'Business Administration', value: 'Business Administration' },
  { label: 'Accounting', value: 'Accounting' },
  { label: 'Finance', value: 'Finance' },
  { label: 'International Business', value: 'International Business' },
  { label: 'Public Health', value: 'Public Health' },
  { label: 'Electrical Engineering', value: 'Electrical Engineering' },
  { label: 'Computer Science & Information Engineering', value: 'Computer Science & Information Engineering' },
  { label: 'Law', value: 'Law' },
  { label: 'Life Science', value: 'Life Science' },
  { label: 'Biochemical Science & Technology', value: 'Biochemical Science & Technology' },
  { label: 'Athletics', value: 'Athletics' },
  { label: 'IM', value: 'IM' },
];

function Settings() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const accounts = useSelector(state => state.accounts);
  const categories = useSelector(state => state.categories);

  const [categoryOptions, setCategoryOptions] = useState([]);

  const [showRealName, setShowRealName] = useState(false);
  const [dept, setDept] = useState('Information Management');
  const [showBday, setShowBday] = useState(false);
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState('');
  const [tagline, setTagline] = useState('');
  const [socialMediaLink, setSocialMediaLink] = useState('');
  const [preferredCategory, setPreferredCategory] = useState([]);

  const [suggestedCategoryIds, setSuggestedCategoryIds] = useState([]);

  const reportCategoryIds = reportedCategories => {
    setSuggestedCategoryIds(reportedCategories.map(item => item.id));
  };

  const handleEdit = async () => {
    // await dispatch(editAccountPrivacy({
    //   authToken: auth.token,
    //   accountId: auth.userAccountId,
    //   displayRealName: showRealName,
    //   displayBirthday: showBday,
    // }));
    await dispatch(editAccountProfile({
      authToken: auth.token,
      account_id: auth.userAccountId,
      tagline,
      department: dept || '',
      social_media_acct: socialMediaLink,
      birthday: moment(date).toISOString() ? date : '',
      preferred_category_id: preferredCategory.map((item => item.value)),
      about: description,
    }));
    dispatch(readAccountProfile({ authToken: auth.token, accountId: auth.userAccountId }));
    setDate(accounts.entities[auth.userAccountId].birthday ? new Date(accounts.entities[auth.userAccountId].birthday) : '');
  };

  const handleCancel = () => {
    setDept(accounts.entities[auth.userAccountId].department);
    setDate(accounts.entities[auth.userAccountId].birthday ? new Date(accounts.entities[auth.userAccountId].birthday) : null);
    setDescription(accounts.entities[auth.userAccountId].about);
    setTagline(accounts.entities[auth.userAccountId].tagline);
    setSocialMediaLink(accounts.entities[auth.userAccountId].social_media_acct);
    setPreferredCategory(accounts.entities[auth.userAccountId].preferred_category_id?.map(id => {
      if (categories.entities[id]) {
        return ({ label: categories.entities[id].name, value: id });
      }
      return ({ label: '', value: id });
    }));
  };

  useEffect(() => {
    dispatch(readAccountProfile({ authToken: auth.token, accountId: auth.userAccountId }));
  }, [auth.token, auth.userAccountId, dispatch]);

  useEffect(() => {
    dispatch(browseAllCategory({ authToken: auth.token, search: '', reportCategoryIds }));
  }, [auth.token, dispatch]);

  useEffect(() => {
    setDept(accounts.entities[auth.userAccountId].department ? accounts.entities[auth.userAccountId].department : 'Information Management');
    setDate(accounts.entities[auth.userAccountId].birthday ? new Date(accounts.entities[auth.userAccountId].birthday) : null);
    setDescription(accounts.entities[auth.userAccountId].about);
    setTagline(accounts.entities[auth.userAccountId].tagline);
    setSocialMediaLink(accounts.entities[auth.userAccountId].social_media_acct);
    setPreferredCategory(accounts.entities[auth.userAccountId].preferred_category_id?.map(id => {
      if (categories.entities[id]) {
        return ({ label: categories.entities[id].name, value: id });
      }
      return ({ label: '', value: id });
    }));
  }, [accounts.entities, auth.userAccountId, categories.entities]);

  useEffect(() => {
    setCategoryOptions(suggestedCategoryIds.map(id => {
      if (categories.entities[id]) return ({ label: categories.entities[id].name, value: id });
      return ({ label: '', value: id });
    }));
  }, [categories.entities, suggestedCategoryIds]);

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
                      <div className="mb-3">
                        <label className="block text-sm font-medium mb-1" htmlFor="name">
                          Username
                        </label>
                        {accounts.entities[auth.userAccountId].username}
                      </div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium mb-1" htmlFor="real_name">
                          Real Name
                        </label>
                        {accounts.entities[auth.userAccountId].real_name}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">
                          Gender
                        </label>
                        {genderTypeTransform(accounts.entities[auth.userAccountId].gender)}
                      </div>
                    </section>
                    {/* Business Profile */}
                    <section>
                      <h2 className="text-xl text-gray-800 font-bold mb-1">User Profile</h2>
                      <div className="text-sm mb-3">Modify the content so that friends can know you better.</div>
                      <div className="mb-3">
                        <TextField
                          inputClassName="w-full"
                          label="Tagline"
                          value={tagline}
                          onChange={e => setTagline(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <TextField
                          inputClassName="w-full"
                          label="Instagram  Username"
                          value={socialMediaLink}
                          onChange={e => setSocialMediaLink(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <Select
                          label="Department"
                          id="dept"
                          value={dept}
                          options={departments}
                          onChange={e => setDept(e.target.value)}
                          inputClassName="w-full"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        {/* {typeof moment(date).format('MMM D, YYYY').toLocaleString()}
                        {typeof moment(accounts.entities[auth.userAccountId]?.birthday).format('MMM D, YYYY').toLocaleString()} */}
                        {/* selected={startDate} onChange={(date) => setStartDate(date) */}
                        <label className="block text-sm font-medium mb-1">
                          Birthday
                        </label>
                        <div className="w-full">
                          <DatePicker className="form-input pl-9 text-gray-500 hover:text-gray-600 font-medium focus:border-gray-300 w-full md:w-72" selected={date} onChange={d => setDate(d)} />
                          <div className="absolute inset-0 right-auto top-6 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 fill-current text-gray-500 ml-3" viewBox="0 0 16 16">
                              <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                            </svg>
                          </div>
                        </div>
                        {/* <Datepicker label="Birthday" inputClassName="w-full" mode="single" setValue={setDate} date={moment(date).format('MMM D, YYYY').toLocaleString()} /> */}
                        {/* {
                          (moment(date).format('MMM D, YYYY').toLocaleString().localeCompare(moment(accounts.entities[auth.userAccountId]?.birthday).format('MMM D, YYYY').toLocaleString()))
                            ? <Datepicker label="Birthday" inputClassName="w-full" mode="single" setValue={setDate} date={moment(date).format('MMM D, YYYY').toLocaleString()} /> : <Datepicker label="Birthday" inputClassName="w-full" mode="single" setValue={setDate} date="Jan 1, 2000" />
                        } */}
                      </div>
                      <div className="mb-3">
                        <MultiSelect
                          label="Preferred Sports"
                          id="preference"
                          name="preference"
                          placeholder="Select..."
                          value={preferredCategory}
                          options={categoryOptions}
                          onChange={setPreferredCategory}
                        />
                      </div>
                      <div>
                        <TextField
                          inputClassName="w-full md:w-full h-40"
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
                        <Button variant="secondary" onClick={() => handleCancel()}>Cancel</Button>
                        <Button onClick={() => handleEdit()}>Save Changes</Button>
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
