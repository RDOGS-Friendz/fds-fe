import React, { useState, useEffect, useRef } from 'react';
import { PulseLoader } from 'react-spinners';
import TextField from '../partials/basic/TextField';
import SearchBar from '../partials/basic/SearchBar';
import DateRangePicker from '../partials/basic/DateRangePicker';
import useCategorySearch from '../hooks/useCategorySearch';
import useWindowDimensions from '../hooks/useWindowDimensions';
import Button from '../partials/basic/Button';
import Badge from '../partials/basic/Badge';
import useEventsPagination from '../hooks/useEventsPagination';
import EventCard from '../partials/EventCard';
import PaginationNumeric from '../partials/basic/PaginationNumeric';

export default function Events() {
  const intensityOptions = {
    LOW: 'Low',
    INTERMEDIATE: 'Intermediate',
    HIGH: 'High',
  };

  const dayTimeOptions = {
    MORNING: 'Morning (5-12)',
    AFTERNOON: 'Afternoon (12-18)',
    EVENING: 'Evening (18-23)',
    NIGHT: 'Night (23-5)',
  };

  const durationOptions = {
    SHORT: '< 30 mins',
    MEDIUM: '30-90 mins',
    LONG: '> 90 mins',
  };

  const { width } = useWindowDimensions();

  const [searchInputValue, setSearchInputValue] = useState('');
  const [selectedIntensityValue, setSelectedIntensityValue] = useState(null);
  const [selectedDayTimeValue, setSelectedDayTimeValue] = useState(null);
  const [selectedDurationValue, setSelectedDurationValue] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);

  const [eventSearch, setEventSearch] = useState([]);

  const [numItemsPerPage, setNumItemsPerPage] = useState(9);

  const dateRangePickerRef = useRef(null);

  const [
    categoryInputValue,
    selectedCategoryId,
    categoryOnInputChange,
    categoryOnSelectSuggestion,
    categoryOnBlur,
    categoryShowSuggestions,
    categorySuggestions,
  ] = useCategorySearch();

  useEffect(() => {
    setEventSearch(
      [
        ['title', searchInputValue],
        ['category_id', selectedCategoryId],
        ['intensity', selectedIntensityValue],
        ['day_time', selectedDayTimeValue],
        ['duration', selectedDurationValue],
        ['start_date', dateRange[0]?.toISOString()],
        ['end_date', dateRange[1]?.toISOString()],
      ].filter(item => item[1] !== null && item[1] !== undefined && item[1] !== ''),
    );
  }, [dateRange, searchInputValue, selectedCategoryId, selectedDayTimeValue, selectedDurationValue, selectedIntensityValue]);

  useEffect(() => {
    if (width < 768) {
      setNumItemsPerPage(5);
    } else if (width < 1280) {
      setNumItemsPerPage(6);
    } else if (width < 1536) {
      setNumItemsPerPage(9);
    } else {
      setNumItemsPerPage(12);
    }
  }, [width]);

  const {
    displayItems,
    initialized,
    totalNumberOfPage,
    currentPageIndex,
    switchPage,
    loading,
    error,
    reset,
    privateOnly,
    totalCount,
  } = useEventsPagination('all', eventSearch, numItemsPerPage);

  const handleClickIntensityOption = value => {
    if (selectedIntensityValue === value) {
      setSelectedIntensityValue(null);
    } else {
      setSelectedIntensityValue(value);
    }
  };

  const handleClickDayTimeOption = value => {
    if (selectedDayTimeValue === value) {
      setSelectedDayTimeValue(null);
    } else {
      setSelectedDayTimeValue(value);
    }
  };

  const handleClickDurationOption = value => {
    if (selectedDurationValue === value) {
      setSelectedDurationValue(null);
    } else {
      setSelectedDurationValue(value);
    }
  };

  const handleClear = () => {
    setSearchInputValue('');
    setSelectedIntensityValue(null);
    setSelectedDayTimeValue(null);
    setSelectedDurationValue(null);
    setDateRange([null, null]);
    dateRangePickerRef.current.flatpickr.clear();
  };

  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

        <div className="sm:flex sm:justify-between sm:items-center mb-8">

          <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Find Events ✨</h1>
          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            <TextField value={searchInputValue} onChange={e => setSearchInputValue(e.target.value)} />
            <button type="button" className="btn bg-indigo-500 hover:bg-indigo-600 text-white" onClick={reset}>
              <span className="hidden xs:block">Search</span>
            </button>
          </div>

        </div>

        <div className="flex flex-col col-span-full bg-white rounded-sm border border-gray-200 px-10 py-5 gap-6 mb-5">
          <div className="flex flex-row flex-wrap justify-between gap-x-4 gap-y-4 lg:gap-x-6">
            <div className="">
              <h2 className="font-semibold text-gray-800 mb-2">Sport</h2>
              <div className="mb-4">
                <SearchBar
                  placeholder="Search / Select"
                  id="sports"
                  inputValue={categoryInputValue}
                  onInputChange={categoryOnInputChange}
                  onInputBlur={categoryOnBlur}
                  onSelectSuggestion={categoryOnSelectSuggestion}
                  showSuggestions={categoryShowSuggestions}
                  suggestions={categorySuggestions}
                />
              </div>
            </div>
            <div className="">
              <h2 className="font-semibold text-gray-800 mb-3">Intensity</h2>
              {Object.keys(intensityOptions)
                .map(key => ({ value: key, label: intensityOptions[key] }))
                .map(({ value, label }) => (
                  <div key={value} className={`flex flex-row items-center mb-2 hover:opacity-70 active:opacity-50 transition-all ${selectedIntensityValue === value && 'text-indigo-500'}`}>
                    <button type="button" onClick={() => handleClickIntensityOption(value)}>
                      {label}
                    </button>
                    <svg className={`ml-2 flex-shrink-0 fill-current text-indigo-500 ${selectedIntensityValue !== value && 'invisible'}`} width="12" height="9" viewBox="0 0 12 9">
                      <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                    </svg>
                  </div>
                ))}
            </div>
            <div className="">
              <h2 className="font-semibold text-gray-800 mb-3">Time</h2>
              {Object.keys(dayTimeOptions)
                .map(key => ({ value: key, label: dayTimeOptions[key] }))
                .map(({ value, label }) => (
                  <div key={value} className={`flex flex-row items-center mb-2 hover:opacity-70 active:opacity-50 transition-all ${selectedDayTimeValue === value && 'text-indigo-500'}`}>
                    <button type="button" onClick={() => handleClickDayTimeOption(value)}>
                      {label}
                    </button>
                    <svg className={`ml-2 flex-shrink-0 fill-current text-indigo-500 ${selectedDayTimeValue !== value && 'invisible'}`} width="12" height="9" viewBox="0 0 12 9">
                      <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                    </svg>
                  </div>
                ))}
            </div>
            <div className="">
              <h2 className="font-semibold text-gray-800 mb-3">Duration</h2>
              {Object.keys(durationOptions)
                .map(key => ({ value: key, label: durationOptions[key] }))
                .map(({ value, label }) => (
                  <div key={value} className={`flex flex-row items-center mb-2 hover:opacity-70 active:opacity-50 transition-all ${selectedDurationValue === value && 'text-indigo-500'}`}>
                    <button type="button" onClick={() => handleClickDurationOption(value)}>
                      {label}
                    </button>
                    <svg className={`ml-2 flex-shrink-0 fill-current text-indigo-500 ${selectedDurationValue !== value && 'invisible'}`} width="12" height="9" viewBox="0 0 12 9">
                      <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                    </svg>
                  </div>
                ))}
            </div>
            <div className="">
              <h2 className="font-semibold text-gray-800 mb-3">Date</h2>
              <DateRangePicker setValue={setDateRange} ref={dateRangePickerRef} />
            </div>
          </div>
          <div className="flex justify-end flex-wrap space-x-2">
            <Button variant="tertiary" onClick={handleClear}>Clear</Button>
            <Button variant="secondary" onClick={reset}>Apply</Button>
          </div>
        </div>

        <div className="flex flex-shrink-0 space-x-2 col-span-full mb-5">
          <Badge
            color={privateOnly ? 'plain' : 'active'}
            onClick={() => {
              if (privateOnly) { reset(false); }
            }}
          >
            View All

          </Badge>
          <Badge
            color={!privateOnly ? 'plain' : 'active'}
            onClick={() => {
              if (!privateOnly) { reset(true); }
            }}
          >
            Private Only

          </Badge>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-6 xl:grid-cols-9 2xl:grid-cols-12 gap-6 justify-items-center mb-5">
          {
          loading
            ? (
              <div className="col-span-full row-span-full h-96 flex items-center align-middle">
                <PulseLoader size={6} color="gray" />
              </div>
            )
            : displayItems.map(item => <EventCard key={item.id} event={item} />)
}
        </div>

        <div className="flex flex-shrink-0 justify-center col-span-full">
          <PaginationNumeric setPageIndex={switchPage} pageIndex={currentPageIndex} numOfPage={totalNumberOfPage} />
        </div>

      </div>
    </main>
  );
}
