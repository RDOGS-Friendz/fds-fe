import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { browseEvent, browseEventByAccount } from '../slices/eventsSlice';

export default function useEventsPagination(view = 'all', search = [], itemsPerPage = 5, byAccount = false, accountId = null) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const events = useSelector(state => state.events);

  const [eventIds, setEventIds] = useState({});
  const [totalCount, setTotalCount] = useState(Infinity);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const reportEventIds = (offset, fetchedEventIds, fetchedTotalCount) => {
    setEventIds(state => fetchedEventIds.reduce((acc, item, index) => ({ ...acc, [offset + index]: item }), state));
    setTotalCount(fetchedTotalCount);
  };

  const switchPage = async pageIndex => {
    try {
      if (Array(itemsPerPage)
        .fill()
        .filter((_, i) => pageIndex * itemsPerPage + i < totalCount)
        .reduce((acc, _, i) => acc || eventIds[pageIndex * itemsPerPage + i] === undefined, false)) { // some eventId is unknown, fetch needed
        if (!loading) {
          setLoading(true);

          if (byAccount && accountId) {
            await dispatch(browseEventByAccount({
              authToken: auth.token,
              account_id: accountId,
              view,
              limit: itemsPerPage,
              offset: itemsPerPage * pageIndex,
              reportEventIds,
            })).unwrap();
          } else {
            await dispatch(browseEvent({
              authToken: auth.token,
              view,
              search,
              limit: itemsPerPage,
              offset: itemsPerPage * pageIndex,
              reportEventIds,
            })).unwrap();
          }
          setLoading(false);
          setCurrentPageIndex(pageIndex);
        }
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(false);
    setEventIds({});
    setTotalCount(Infinity);
    setCurrentPageIndex(0);
    setError(null);
  };

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
    totalNumberOfPage: totalCount === Infinity ? 1 : Math.ceil(totalCount / itemsPerPage),
    switchPage,
    loading,
    error,
    reset,
  };
}
