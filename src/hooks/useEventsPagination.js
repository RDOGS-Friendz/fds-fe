import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { browseEvent, browseEventByAccount } from '../slices/eventsSlice';

export default function useEventsPagination(view = 'all', search = [], itemsPerPage = 5, byAccount = false, accountId = null) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const events = useSelector(state => state.events);

  const [privateOnly, setPrivateOnly] = useState(false);

  const [eventIds, setEventIds] = useState({});
  const [totalCount, setTotalCount] = useState(Infinity);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const reportEventIds = (fetchedEventIds, fetchedTotalCount, offset) => {
    setEventIds(state => fetchedEventIds.reduce((acc, item, index) => ({ ...acc, [offset + index]: item }), state));
    setTotalCount(fetchedTotalCount);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        if (Array(itemsPerPage)
          .fill()
          .filter((_, i) => currentPageIndex * itemsPerPage + i < totalCount)
          .reduce((acc, _, i) => acc || eventIds[currentPageIndex * itemsPerPage + i] === undefined, false)) { // some eventId is unknown, fetch needed
          if (!loading) {
            setLoading(true);

            if (byAccount && accountId) {
              await dispatch(browseEventByAccount({
                authToken: auth.token,
                account_id: accountId,
                view,
                limit: itemsPerPage,
                offset: itemsPerPage * currentPageIndex,
                reportEventIds,
              })).unwrap();
            } else {
              await dispatch(browseEvent({
                authToken: auth.token,
                view,
                search: [].concat(search, privateOnly ? [['is_private', 'true']] : []),
                limit: itemsPerPage,
                offset: itemsPerPage * currentPageIndex,
                reportEventIds,
              })).unwrap();
            }
            setLoading(false);
          }
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchEvents();
  }, [accountId, auth.token, byAccount, currentPageIndex, dispatch, eventIds, itemsPerPage, loading, privateOnly, search, totalCount, view]);

  const switchPage = async pageIndex => {
    setCurrentPageIndex(pageIndex);
  };

  const reset = pri => {
    setPrivateOnly(pri);
    setLoading(false);
    setEventIds({});
    setTotalCount(Infinity);
    setCurrentPageIndex(0);
    setError(null);
  };

  useEffect(() => {
    if (currentPageIndex >= (totalCount === Infinity ? 1 : Math.ceil(totalCount / itemsPerPage))) {
      setCurrentPageIndex(totalCount === Infinity ? 1 : Math.max(Math.ceil(totalCount / itemsPerPage) - 1, 1));
    }
  }, [currentPageIndex, itemsPerPage, totalCount]);

  useEffect(() => {
    reset();
  }, [accountId]);

  return {
    displayItems: (Array(itemsPerPage)
      .fill()
      .map((_, i) => events.entities[eventIds[i + itemsPerPage * currentPageIndex]]))
      .filter(item => item !== undefined),
    initialized: totalCount === Infinity,
    currentPageIndex,
    totalNumberOfPage: totalCount === Infinity ? 1 : Math.max(Math.ceil(totalCount / itemsPerPage), 1),
    switchPage,
    loading,
    error,
    reset,
    privateOnly,
  };
}
