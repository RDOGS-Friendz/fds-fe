import React, { useEffect, useState } from 'react';
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
import { addEvent, deleteEvent, editEvent } from '../slices/eventsSlice';

export default function EventEditCard({ open, setOpen, resets, editingEventId = null }) {
  const intensityOptions = {
    LOW: 'Low',
    INTERMEDIATE: 'Intermediate',
    HIGH: 'High',
  };
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const events = useSelector(state => state.events);
  const locations = useSelector(state => state.locations);
  const categories = useSelector(state => state.categories);

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
    setLocation,
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
    setCategory,
  ] = useCategorySearch();

  const [startTimeValue, setStartTimeValue] = useState(moment());
  const [endTimeValue, setEndTimeValue] = useState(moment().add(1, 'h'));
  const [isPrivate, setIsPrivate] = useState(false);
  const [selectedIntensityValue, setSelectedIntensityValue] = useState('LOW');
  const [numberOfPeopleNeeded, setNumberOfPeopleNeeded] = useState(6);
  const [description, setDescription] = useState('');

  const [showTitleHelpTexts, setShowTitleHelpTexts] = useState(false);
  const [showLocationHelpTexts, setShowLocationHelpTexts] = useState(false);
  const [showCategoryHelpTexts, setShowCategoryHelpTexts] = useState(false);
  const [showNumberOfPeopleHelpTexts, setShowNumberOfPeopleHelpTexts] = useState(false);

  useEffect(() => {
    if (editingEventId && events.entities[editingEventId]) { // initialize when editing event
      const editingEvent = events.entities[editingEventId];
      setDate(Date(editingEvent.start_time));
      setStartTime(moment(editingEvent.start_time).format('h:mm a'));
      setEndTime(moment(editingEvent.end_time).format('h:mm a'));
      setTitle(editingEvent.title);
      setLocation(locations.entities[editingEvent.location_id].name, editingEvent.location_id);
      setCategory(categories.entities[editingEvent.category_id].name, editingEvent.category_id);
      setStartTimeValue(moment(editingEvent.start_time));
      setEndTimeValue(moment(editingEvent.end_time));
      setIsPrivate(editingEvent.is_private);
      setSelectedIntensityValue(editingEvent.intensity);
      setNumberOfPeopleNeeded(editingEvent.num_people_wanted);
      setDescription(editingEvent.description);
    }
  }, [categories.entities, editingEventId, events.entities, locations.entities, setCategory, setLocation]);

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
    setSelectedIntensityValue('LOW');
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

      if (editingEventId) {
        await dispatch(editEvent({
          authToken: auth.token,
          event_id: editingEventId,
          title,
          is_private: isPrivate,
          location_id: selectedLocationId,
          category_id: selectedCategoryId,
          intensity: selectedIntensityValue,
          start_time: composedStartTime.toISOString(),
          end_time: composedEndTime.toISOString(),
          num_people_wanted: Number.parseInt(numberOfPeopleNeeded, 10),
          description,
        }));
      } else {
        await dispatch(addEvent({
          authToken: auth.token,
          title,
          is_private: isPrivate,
          location_id: selectedLocationId,
          category_id: selectedCategoryId,
          intensity: selectedIntensityValue,
          start_time: composedStartTime.toISOString(),
          end_time: composedEndTime.toISOString(),
          num_people_wanted: Number.parseInt(numberOfPeopleNeeded, 10),
          description,
        }));
      }

      resets.map(reset => reset());
      handleClose();
    }
  };

  const handleDelete = () => {
    dispatch(deleteEvent({ authToken: auth.token, event_id: editingEventId }));
    handleClose();
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
            <Datepicker icon={<GoClock />} label="Date" setValue={setDate} />
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
              selected={selectedIntensityValue}
              setSelected={setSelectedIntensityValue}
              options={Object.keys(intensityOptions).map(key => ({ value: key, label: intensityOptions[key] }))}
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
          <div className="flex flex-wrap justify-between">
            {
              editingEventId
                ? (
                  <>
                    <div>
                      <Button color="danger" variant="secondary" onClick={handleDelete}>Delete Event</Button>
                    </div>
                    <div className="flex flex-wrap space-x-2">
                      <Button variant="tertiary" onClick={handleClose}>Discard Changes</Button>
                      <Button onClick={handleSubmit}>Save</Button>
                    </div>
                  </>
                )

                : (
                  <>
                    {/* New Event */}
                    <div />
                    <div className="flex flex-wrap space-x-2">
                      <Button variant="tertiary" onClick={handleClose}>Discard</Button>
                      <Button onClick={handleSubmit}>Publish</Button>
                    </div>
                  </>
                )
            }
            {/* <button className="btn-sm border-gray-200 hover:border-gray-300 text-gray-600" onClick={e => { e.stopPropagation(); setSuccessModalOpen(false); }}>Cancel</button>
            <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Yes, Upgrade it</button> */}
          </div>
        </div>
      </div>
    </ModalBlank>
  );
}
