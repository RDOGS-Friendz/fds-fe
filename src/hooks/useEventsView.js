import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { browseEvent } from '../slices/eventsSlice';

export default function useEventsView(view = 'all', search = [], limit = 5) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const events = useSelector(state => state.events);

  const [eventIds, setEventIds] = useState({});
  const [numItemsFetched, setNumItemsFetched] = useState(0);
  const [totalCount, setTotalCount] = useState(Infinity);
  const [moreToFetch, setMoreToFetch] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMore = async () => {
    try {
      if (moreToFetch && !loading) {
        setLoading(true);
        await dispatch(browseEvent({
          authToken: auth.token,
          view,
          search,
          limit,
          offset: numItemsFetched,
          reportEventIds: (fetchedEventIds, fetchedTotalCount) => {
            setEventIds(state => fetchedEventIds.reduce((acc, item, index) => ({ ...acc, [numItemsFetched + index]: item }), state));
            setTotalCount(fetchedTotalCount);
            setNumItemsFetched(state => state + fetchedEventIds.length);
          },
        })).unwrap();
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(false);
    setEventIds({});
    setNumItemsFetched(0);
    setTotalCount(Infinity);
    setError(null);
  };

  useEffect(() => {
    setMoreToFetch(numItemsFetched < totalCount);
  }, [numItemsFetched, totalCount]);

  return [
    (Array(numItemsFetched).fill().map((_, i) => events.entities[eventIds[i]])).filter(item => item !== undefined),
    totalCount,
    loading,
    fetchMore,
    error,
    reset,
  ];
}
