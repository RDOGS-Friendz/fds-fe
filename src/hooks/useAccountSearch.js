import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { browseAllAccount } from '../slices/accountsSlice';

export default function useAccountSearch() {
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestedAccountIds, setSuggestedAccountIds] = useState([]);

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const accounts = useSelector(state => state.accounts);

  const reportAccountIds = reportedCategories => {
    setSuggestedAccountIds(reportedCategories.map(item => item.account_id));
  };

  const onInputChange = async e => {
    setInputValue(e.target.value);

    if (e.target.value.length >= 2) { // search only when >= 2 character
      setShowSuggestions(true);
      await dispatch(browseAllAccount({ authToken: auth.token, search: e.target.value.trim(), reportAccountIds }));
    } else {
      setShowSuggestions(false);
    }
  };

  return [
    inputValue,
    onInputChange,
    showSuggestions,
    suggestedAccountIds.map(id => accounts.entities[id]).filter(item => item !== undefined),
  ];
}
