import { useState } from 'react';
import { useSelector } from 'react-redux';
import { browseEvent } from '../slices/eventsSlice';

export default function useEventCardsView(view = 'all', search = [], authToken) {
  const limit = 5;
  const events = useSelector(state => state.events);
  const [eventIds, setEventIds] = useState({});
  const [numPagesFetched, setNumPagesFetched] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchMore = async () => {
    setLoading(true);
    await browseEvent({
      authToken,
      view,
      search,
      limit,
      offset: numPagesFetched * limit,
      reportEventIds: fetchedEventIds => {
        setEventIds(state => fetchedEventIds.reduce((acc, item, index) => ({ ...acc, [numPagesFetched * limit + index]: item }), state));
      },
    });
    setNumPagesFetched(state => state + limit);
    setLoading(false);
  };
  return [(Array(numPagesFetched).fill(1).map((_, i) => events[eventIds[i]])), numPagesFetched, loading, fetchMore];
}
