import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useEventsView from '../hooks/useEventsView';
import EventTable from '../partials/HistoryTable';
import { readAccountProfile } from '../slices/accountsSlice';

export default function History() {
  const auth = useSelector(state => state.auth);
  const { accountId: accountIdParam } = useParams();
  const dispatch = useDispatch();

  const [accountId, setAccountId] = useState(null);
  const [
    pastEvents,
    pastTotalCount,
    pastLoading,
    pastFetchMore,
    pastError,
  ] = useEventsView('all', [], 10, true, accountId);

  useEffect(() => {
    setAccountId(auth.userAccountId);
  }, [auth.userAccountId, accountIdParam]);

  useEffect(() => {
    if (accountId) {
      dispatch(readAccountProfile({ authToken: auth.token, accountId }));
    }
  }, [accountId, auth.token, dispatch]);

  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">History 🏯</h1>
        </div>

        {/* Cards */}
        <div className="mb-2">
          <EventTable
            events={pastEvents}
            totalCount={pastTotalCount}
            loading={pastLoading}
            fetchMore={pastFetchMore}
            error={pastError}
            numItems={10}
          />
        </div>
      </div>
    </main>
  );
}
