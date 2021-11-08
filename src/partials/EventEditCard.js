import React, { useState } from 'react';
import { GoClock } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import ModalBlank from './basic/ModalBlank';
import TextField from './basic/TextField';
import Datepicker from './basic/DatePicker';
import Button from './basic/Button';
import SearchBar from './basic/SearchBar';
import useLocationSearch from '../hooks/useLocationSearch';
import useCategorySearch from '../hooks/useCategorySearch';
import DropdownClassic from './basic/DropdownClassic';
import { addEvent } from '../slices/eventsSlice';

export default function EventEditCard({ newEvent = true, open, setOpen, resets }) {
  const intensityOptions = [
    { value: 'LOW', label: 'Low' },
    { value: 'INTERMEDIATE', label: 'Intermediate' },
    { value: 'HIGH', label: 'High' },
  ];
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [date, setDate] = useState(Date());

  const [startTime, setStartTime] = useState(moment().format('h:mm a'));
  const [endTime, setEndTime] = useState(moment().add(1, 'h').format('h:mm a'));
  const [title, setTitle] = useState('');

  const [
    locationInputValue,
    selectedLocationId,
    locationOnInputChange,
    locationOnSelectSuggestion,
    locationOnBlur,
    locationShowSuggestions,
    locationSuggestions,
    locationReset,
  ] = useLocationSearch();

  const [
    categoryInputValue,
    selectedCategoryId,
    categoryOnInputChange,
    categoryOnSelectSuggestion,
    categoryOnBlur,
    categoryShowSuggestions,
    categorySuggestions,
    categoryReset,
  ] = useCategorySearch();

  const [startTimeValue, setStartTimeValue] = useState(moment());
  const [endTimeValue, setEndTimeValue] = useState(moment().add(1, 'h'));
  const [isPrivate, setIsPrivate] = useState(false);
  const [selectedIntensityIndex, setSelectedIntensityIndex] = useState(0);
  const [numberOfPeopleNeeded, setNumberOfPeopleNeeded] = useState(6);
  const [description, setDescription] = useState('');

  const [showTitleHelpTexts, setShowTitleHelpTexts] = useState(false);
  const [showLocationHelpTexts, setShowLocationHelpTexts] = useState(false);
  const [showCategoryHelpTexts, setShowCategoryHelpTexts] = useState(false);
  const [showNumberOfPeopleHelpTexts, setShowNumberOfPeopleHelpTexts] = useState(false);

  const onStartTimeBlur = e => {
    e.preventDefault();
    const parsed = moment(e.target.value, ['HHmm', 'HH:mm', 'Hmm', 'H:mm', 'hhmm a', 'hh:mm a', 'hmm a', 'h:mm a']);

    if (parsed.isValid()) {
      setStartTimeValue(parsed);
      setStartTime(parsed.format('h:mm a'));
    } else {
      setStartTime(startTimeValue.format('h:mm a'));
    }
  };

  const onEndTimeBlur = e => {
    e.preventDefault();
    const parsed = moment(e.target.value, ['HHmm', 'HH:mm', 'Hm', 'H:m']);

    if (parsed.isValid()) {
      setEndTimeValue(parsed);
      setEndTime(parsed.format('h:mm a'));
    } else {
      setEndTime(endTimeValue.format('h:mm a'));
    }
  };

  const handleClose = () => {
    locationReset();
    categoryReset();
    setDate(Date());
    setStartTime(moment().format('h:mm a'));
    setEndTime(moment().add(1, 'h').format('h:mm a'));
    setStartTimeValue(moment());
    setEndTimeValue(moment().add(1, 'h'));
    setTitle('');
    setIsPrivate(false);
    setSelectedIntensityIndex(0);
    setNumberOfPeopleNeeded(6);
    setDescription('');
    setOpen(false);
  };

  const handleSubmit = async () => {
    let valid = true;

    if (title.trim() === '') {
      setShowTitleHelpTexts(true);
      valid = false;
    } else {
      setShowTitleHelpTexts(false);
    }

    if (!selectedLocationId) {
      setShowLocationHelpTexts(true); valid = false;
    } else {
      setShowLocationHelpTexts(false);
    }

    if (!selectedCategoryId) {
      setShowCategoryHelpTexts(true);
      valid = false;
    } else {
      setShowCategoryHelpTexts(false);
    }

    if (Number.isNaN(Number.parseInt(numberOfPeopleNeeded, 10))) {
      setShowNumberOfPeopleHelpTexts(true);
      valid = false;
    } else {
      setShowNumberOfPeopleHelpTexts(false);
    }

    if (valid) {
      const composedStartTime = moment(date)
        .set('hour', startTimeValue.get('hour'))
        .set('minute', startTimeValue.get('minute'));

      const composedEndTime = (startTimeValue < endTimeValue
        ? moment(date)
        : moment(date).add(1, 'd')) // end on next day
        .set('hour', endTimeValue.get('hour'))
        .set('minute', endTimeValue.get('minute'));

      await dispatch(addEvent({
        authToken: auth.token,
        title,
        is_private: isPrivate,
        location_id: selectedLocationId,
        category_id: selectedCategoryId,
        intensity: intensityOptions[selectedIntensityIndex].value,
        start_time: composedStartTime.toISOString(),
        end_time: composedEndTime.toISOString(),
        num_people_wanted: Number.parseInt(numberOfPeopleNeeded, 10),
        description,
      }));

      resets.map(reset => reset());
      handleClose();
    }
  };

  return (
    <ModalBlank
      id="success-modal"
      modalOpen={open}
      setModalOpen={setOpen}
    >
      <div className="p-5 flex space-x-4">
        {/* Content */}
        <div className="w-full">

          {/* Modal content */}
          <div className="mb-4">
            <Datepicker icon={<GoClock />} label="Date" mode="single" setValue={setDate} />
          </div>
          <div className="mb-4">
            <TextField
              icon={<GoClock />}
              label="Start Time"
              value={startTime}
              onChange={e => setStartTime(e.target.value)}
              onFocus={e => e.target.select()}
              onBlur={onStartTimeBlur}
            />
          </div>

          <div className="mb-4">
            <TextField
              icon={<GoClock />}
              label="End Time"
              value={endTime}
              onChange={e => setEndTime(e.target.value)}
              onFocus={e => e.target.select()}
              onBlur={onEndTimeBlur}
            />
            {
              endTimeValue < startTimeValue
              && <span className="text-sm italic">On the next day</span>
            }
          </div>

          <div className="mb-4">
            <TextField
              label="Title"
              required
              helpText="This is required."
              showHelpText={showTitleHelpTexts}
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <SearchBar
              id="location"
              label="Location"
              helpText="Please select a valid location."
              required
              showHelpText={showLocationHelpTexts}
              inputValue={locationInputValue}
              onInputChange={locationOnInputChange}
              onInputBlur={locationOnBlur}
              onSelectSuggestion={locationOnSelectSuggestion}
              showSuggestions={locationShowSuggestions}
              suggestions={locationSuggestions}
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center">
              <label className="block text-sm font-medium mr-6" htmlFor="switch-1">
                Private Event
              </label>
              <div className="text-sm text-gray-400 italic mr-2">{ isPrivate ? 'On' : 'Off' }</div>
              <div className="form-switch focus-within:outline-blue">
                <input type="checkbox" id="switch-1" className="sr-only" checked={isPrivate} onChange={() => setIsPrivate(!isPrivate)} />
                <label className="bg-gray-400" htmlFor="switch-1">
                  <span className="bg-white shadow-sm" aria-hidden="true" />
                  <span className="sr-only">Switch label</span>
                </label>
              </div>
            </div>
            <span className="text-sm">
              {isPrivate
                ? 'The event will only be visible to your friends.'
                : 'The event will be visible to everyone.'}
            </span>
          </div>

          <div className="mb-4">
            <SearchBar
              id="sports"
              label="Sports"
              helpText="Please select a valid sport category."
              required
              showHelpText={showCategoryHelpTexts}
              inputValue={categoryInputValue}
              onInputChange={categoryOnInputChange}
              onInputBlur={categoryOnBlur}
              onSelectSuggestion={categoryOnSelectSuggestion}
              showSuggestions={categoryShowSuggestions}
              suggestions={categorySuggestions}
            />
          </div>

          <div className="mb-4">
            <DropdownClassic
              label="Intensity"
              selected={selectedIntensityIndex}
              setSelected={setSelectedIntensityIndex}
              options={intensityOptions}
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Number of People Needed"
              value={numberOfPeopleNeeded}
              required
              helpText="Please enter a valid integer."
              showHelpText={showNumberOfPeopleHelpTexts}
              onChange={e => {
                if (!Number.isNaN(parseInt(e.target.value, 10))) {
                  setNumberOfPeopleNeeded(parseInt(e.target.value, 10));
                } else if (e.target.value.trim() === '') {
                  setNumberOfPeopleNeeded('');
                }
              }}
            />
          </div>

          <div className="mb-4 w-full">
            <TextField
              inputClassName="w-full"
              label="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          {/* Modal footer */}
          <div className="flex flex-wrap justify-end space-x-2">
            {
              newEvent
                ? (
                  <>
                    <Button variant="tertiary" onClick={handleClose}>Discard</Button>
                    <Button onClick={handleSubmit}>Publish</Button>
                  </>
                ) : <></>
            }
            {/* <button className="btn-sm border-gray-200 hover:border-gray-300 text-gray-600" onClick={e => { e.stopPropagation(); setSuccessModalOpen(false); }}>Cancel</button>
            <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Yes, Upgrade it</button> */}
          </div>
        </div>
      </div>
    </ModalBlank>
  );
}
