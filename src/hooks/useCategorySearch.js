import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { browseAllCategory } from '../slices/categoriesSlice';

export default function useCategorySearch() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestedCategoryIds, setSuggestedCategoryIds] = useState([]);

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const categories = useSelector(state => state.categories);

  const reportCategoryIds = reportedCategories => {
    setSuggestedCategoryIds(reportedCategories.map(item => item.id));
  };

  const setState = (input, selectedId) => {
    setInputValue(input);
    setSelectedCategoryId(selectedId);
  };

  const onInputChange = async e => {
    setShowSuggestions(true);
    setInputValue(e.target.value);

    await dispatch(browseAllCategory({ authToken: auth.token, search: e.target.value.trim(), reportCategoryIds }));
  };

  const onSelectSuggestion = e => {
    e.stopPropagation();
    setInputValue(categories.entities[e.target.value]?.name ?? '');
    setSelectedCategoryId(e.target.value);
    setShowSuggestions(false);
  };

  const onBlur = () => {
    // setInputValue('');
    // setSelectedCategoryId(null);
    setShowSuggestions(false);
  };

  const onCancel = e => {
    e.stopPropagation();
    setInputValue('');
    setSelectedCategoryId(null);
    setShowSuggestions(false);
  };

  const reset = () => {
    setSelectedCategoryId(null);
    setInputValue(null);
    setSuggestedCategoryIds([]);
    setShowSuggestions(false);
  };

  return [
    inputValue,
    selectedCategoryId,
    onInputChange,
    onSelectSuggestion,
    onBlur,
    showSuggestions,
    suggestedCategoryIds.map(id => categories.entities[id]).filter(item => item !== undefined),
    reset,
    setState,
    onCancel,
  ];
}
