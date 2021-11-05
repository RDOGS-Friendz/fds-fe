import { useEffect, useState } from 'react';
import { browseEvent } from '../slices/eventsSlice';

export default function useEventCardsView(view = 'all', search = [], authToken) {
  const limit = 5;

  const [eventIds, setEventIds] = useState({});
  const [numPagesFetched, setNumPagesFetched] = useState(0);

  const fetchMore = async () => {
    try {
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
    } catch (error) {}
  };

  useEffect(() => {

  });
}
