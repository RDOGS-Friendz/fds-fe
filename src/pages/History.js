import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useEventsView from '../hooks/useEventsView';
import HistoryTable from '../partials/HistoryTable';
import { readAccountProfile } from '../slices/accountsSlice';
import PaginationNumeric from '../partials/basic/PaginationNumeric';
import useEventsPagination from '../hooks/useEventsPagination';

export default function History() {
  const auth = useSelector(state => state.auth);
  const { accountId: accountIdParam } = useParams();
  const dispatch = useDispatch();

  const [accountId, setAccountId] = useState(null);
  const [pastEvents, pastTotalCount, pastLoading, pastFetchMore, pastError] = useEventsView(
    'all',
    [],
    10,
    true,
    accountId,
  );

  const [numItemsPerPage, setNumItemsPerPage] = useState(9);
  const [eventSearch, setEventSearch] = useState([]);
  const {
    displayItems,
    initialized,
    totalNumberOfPage,
    currentPageIndex,
    switchPage,
    loading,
    error,
    reset,
    privateOnly,
  } = useEventsPagination('all', eventSearch, numItemsPerPage);

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

        <div className="mb-2">
          <HistoryTable
            events={pastEvents}
            totalCount={pastTotalCount}
            loading={pastLoading}
            fetchMore={pastFetchMore}
            error={pastError}
            numItems={10}
          />
        </div>
        <div className="text-sm text-gray-500 text-center sm:text-right">
          Showing
          {' '}
          <span className="font-medium text-gray-600">1</span>
          {' '}
          to
          {' '}
          <span className="font-medium text-gray-600">10</span>
          {' '}
          of
          {' '}
          <span className="font-medium text-gray-600">467</span>
          {' '}
          results
        </div>
        <div className="mt-4">
          <div className="flex flex-shrink-0 justify-center col-span-full">
            <PaginationNumeric setPageIndex={switchPage} pageIndex={currentPageIndex} numOfPage={totalNumberOfPage} />
          </div>
        </div>
      </div>
    </main>
  );
}
