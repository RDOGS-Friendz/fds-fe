import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import Dashboard from './Dashboard';
import Events from './Events';
import PageNotFound from './utility/PageNotFound';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import History from './History';
import Friends from './Friends';
import { resumeSignIn } from '../slices/authSlice';

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const history = useHistory();

  useEffect(() => {
    const resumeSignInFromLocalStorage = async (token, account_id) => {
      try {
        await dispatch(resumeSignIn({ token, account_id })).unwrap();
      } catch (error) {
        history.push('/signin');
      }
    };

    if (!auth.signedIn) {
      const savedSignInInfoExpirationTime = localStorage.getItem('signInInfoExpirationTime');
      if (savedSignInInfoExpirationTime && moment(savedSignInInfoExpirationTime) > moment()) { // not expired yet
        const savedAuthToken = localStorage.getItem('authToken');
        const savedUserAccountId = localStorage.getItem('userAccountId');
        resumeSignInFromLocalStorage(savedAuthToken, savedUserAccountId);
      } else {
        history.push('/signin');
      }
    }
  }, [auth.signedIn, dispatch, history]);

  return (
    auth.signedIn
      ? (
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* Content area */}
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {/*  Site header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/events" component={Events} />
              <Route path="/history" component={History} />
              <Route path="/friends" component={Friends} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </div>
        </div>
      ) : (
        // loading screen
        <div className="h-screen flex flex-col justify-center">
          <div className="flex flex-row justify-center my-auto">
            <PulseLoader size={10} color="gray" />
          </div>
        </div>
      ));
}
