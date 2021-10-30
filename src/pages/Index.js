import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Dashboard from './Dashboard';
import Events from './Events';
import PageNotFound from './utility/PageNotFound';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import History from './History';
import Friends from '../partials/Friends';

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  if (!auth.signedIn) {
    return <Redirect to="/signin" />;
  }

  return (
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
  );
}
