import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import HistoryTable from '../partials/HistoryTable';
import { readAccountProfile } from '../slices/accountsSlice';
import PaginationNumeric from '../partials/basic/PaginationNumeric';
import useEventsPagination from '../hooks/useEventsPagination';

export default function History() {
  const auth = useSelector(state => state.auth);
  // const { accountId: accountIdParam } = useParams();
  const dispatch = useDispatch();
  const [accountId, setAccountId] = useState(null);

  useEffect(() => {
    setAccountId(auth.userAccountId);
  }, [auth.userAccountId]);

  useEffect(() => {
    if (accountId) {
      dispatch(readAccountProfile({ authToken: auth.token, accountId }));
    }
  }, [accountId, auth.token, dispatch]);

  const [numItemsPerPage, setNumItemsPerPage] = useState(5);

  const {
    displayItems,
    initialized,
    totalNumberOfPage,
    currentPageIndex,
    switchPage,
    loading,
    error,
    privateOnly,
    totalCount,
  } = useEventsPagination('history', [], numItemsPerPage, true, accountId);

  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">History 🏯</h1>
        </div>
        <div className="mb-2">
          <HistoryTable
            events={displayItems}
            totalCount={totalCount}
            loading={loading}
            error={error}
            numItems={numItemsPerPage}
          />
        </div>
        <div className="text-sm text-gray-500 text-center sm:text-right">
          Showing
          {' '}
          <span className="font-medium text-gray-600">{currentPageIndex * numItemsPerPage + 1}</span>
          {' '}
          to
          {' '}
          <span className="font-medium text-gray-600">{(currentPageIndex + 1) * numItemsPerPage > totalCount ? totalCount : (currentPageIndex + 1) * numItemsPerPage}</span>
          {' '}
          of
          {' '}
          <span className="font-medium text-gray-600">{totalCount}</span>
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
