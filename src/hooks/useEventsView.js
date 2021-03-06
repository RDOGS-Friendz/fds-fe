import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { browseEvent, browseEventByAccount } from '../slices/eventsSlice';

export default function useEventsView(view = 'all', search = [], limit = 5, byAccount = false, accountId = null) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const events = useSelector(state => state.events);

  const [eventIds, setEventIds] = useState({});
  const [numItemsFetched, setNumItemsFetched] = useState(0);
  const [totalCount, setTotalCount] = useState(Infinity);
  const [moreToFetch, setMoreToFetch] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const reportEventIds = (fetchedEventIds, fetchedTotalCount, offset) => {
    // console.log(eventIds, numItemsFetched, fetchedEventIds, fetchedTotalCount);
    setEventIds(state => fetchedEventIds.reduce((acc, item, index) => ({ ...acc, [numItemsFetched + index]: item }), state));
    setTotalCount(fetchedTotalCount);
    setNumItemsFetched(offset + fetchedEventIds.length);
  };

  const fetchMore = async () => {
    // console.log('fetch more', moreToFetch, loading);
    try {
      if (moreToFetch && !loading) {
        setLoading(true);

        if (byAccount && accountId) {
          await dispatch(browseEventByAccount({
            authToken: auth.token,
            account_id: accountId,
            view,
            limit,
            offset: numItemsFetched,
            reportEventIds,
          })).unwrap();
        } else {
          await dispatch(browseEvent({
            authToken: auth.token,
            view,
            search,
            limit,
            offset: numItemsFetched,
            reportEventIds,
          })).unwrap();
        }
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
    // console.log([numItemsFetched, totalCount]);
    setMoreToFetch(numItemsFetched < totalCount);
  }, [numItemsFetched, totalCount]);

  useEffect(() => {
    if (accountId) { reset(); }
  }, [accountId]);

  return [
    (Array(numItemsFetched).fill().map((_, i) => events.entities[eventIds[i]])).filter(item => item !== undefined),
    totalCount,
    loading,
    fetchMore,
    error,
    reset,
  ];
}
