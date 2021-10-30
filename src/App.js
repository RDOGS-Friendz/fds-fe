import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import './css/style.scss';

import { focusHandling } from 'cruip-js-toolkit';

// Import pages
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import PageNotFound from './pages/utility/PageNotFound';

import Sidebar from './partials/Sidebar';
import Header from './partials/Header';
import History from './pages/History';
import Friends from './partials/Friends';

function App() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (

    <Switch>
      <Route path="/signin" component={Signin} />
      <Route path="*">
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
      </Route>
    </Switch>

  );
}

export default App;
