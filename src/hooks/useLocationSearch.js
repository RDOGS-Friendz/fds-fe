import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { browseAllLocation } from '../slices/locationsSlice';

export default function useLocationSearch() {
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestedLocationIds, setSuggestedLocationIds] = useState([]);

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const locations = useSelector(state => state.locations);

  const reportLocationIds = reportedLocations => {
    setSuggestedLocationIds(reportedLocations.map(item => item.id));
  };

  const setState = (input, selectedId) => {
    setInputValue(input);
    setSelectedLocationId(selectedId);
  };

  const onInputChange = async e => {
    setShowSuggestions(true);
    setInputValue(e.target.value);

    await dispatch(browseAllLocation({ authToken: auth.token, search: e.target.value.trim(), reportLocationIds }));
  };

  const onSelectSuggestion = e => {
    e.stopPropagation();
    setInputValue(locations.entities[e.target.value]?.name ?? '');
    setSelectedLocationId(e.target.value);
    setShowSuggestions(false);
  };

  const onBlur = () => {
    // e.stopPropagation();
    // setInputValue(locations.entities[selectedLocationId]?.name ?? '');
    // setShowSuggestions(false);
  };

  const reset = () => {
    setSelectedLocationId(null);
    setInputValue(null);
    setSuggestedLocationIds([]);
    setShowSuggestions(false);
  };

  return [
    inputValue,
    selectedLocationId,
    onInputChange,
    onSelectSuggestion,
    onBlur,
    showSuggestions,
    suggestedLocationIds.map(id => locations.entities[id]).filter(item => item !== undefined),
    reset,
    setState,
  ];
}
