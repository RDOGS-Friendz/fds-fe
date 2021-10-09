import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import { focusHandling } from 'cruip-js-toolkit';
import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Customers from './pages/ecommerce/Customers';
import Orders from './pages/ecommerce/Orders';
import Invoices from './pages/ecommerce/Invoices';
import Shop from './pages/ecommerce/Shop';
import Shop2 from './pages/ecommerce/Shop2';
import Product from './pages/ecommerce/Product';
import Cart from './pages/ecommerce/Cart';
import Cart2 from './pages/ecommerce/Cart2';
import Pay from './pages/ecommerce/Pay';
import Campaigns from './pages/Campaigns';
import TeamTabs from './pages/team/TeamTabs';
import TeamTiles from './pages/team/TeamTiles';
import Messages from './pages/Messages';
import Tasks from './pages/Tasks';
import Account from './pages/settings/Account';
import Notifications from './pages/settings/Notifications';
import Apps from './pages/settings/Apps';
import Plans from './pages/settings/Plans';
import Billing from './pages/settings/Billing';
import Feedback from './pages/settings/Feedback';
import Changelog from './pages/utility/Changelog';
import Roadmap from './pages/utility/Roadmap';
import Faqs from './pages/utility/Faqs';
import EmptyState from './pages/utility/EmptyState';
import PageNotFound from './pages/utility/PageNotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import ButtonPage from './pages/component/ButtonPage';
import FormPage from './pages/component/FormPage';
import DropdownPage from './pages/component/DropdownPage';
import AlertPage from './pages/component/AlertPage';
import ModalPage from './pages/component/ModalPage';
import PaginationPage from './pages/component/PaginationPage';
import TabsPage from './pages/component/TabsPage';
import BreadcrumbPage from './pages/component/BreadcrumbPage';
import BadgePage from './pages/component/BadgePage';
import AvatarPage from './pages/component/AvatarPage';
import TooltipPage from './pages/component/TooltipPage';
import AccordionPage from './pages/component/AccordionPage';
import IconsPage from './pages/component/IconsPage';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/analytics">
          <Analytics />
        </Route>
        <Route exact path="/ecommerce/customers">
          <Customers />
        </Route>
        <Route exact path="/ecommerce/orders">
          <Orders />
        </Route>
        <Route exact path="/ecommerce/invoices">
          <Invoices />
        </Route>
        <Route exact path="/ecommerce/shop">
          <Shop />
        </Route>
        <Route exact path="/ecommerce/shop-2">
          <Shop2 />
        </Route>
        <Route exact path="/ecommerce/product">
          <Product />
        </Route>
        <Route exact path="/ecommerce/cart">
          <Cart />
        </Route>
        <Route exact path="/ecommerce/cart-2">
          <Cart2 />
        </Route>
        <Route exact path="/ecommerce/pay">
          <Pay />
        </Route>
        <Route exact path="/campaigns">
          <Campaigns />
        </Route>
        <Route exact path="/team/team-tabs">
          <TeamTabs />
        </Route>
        <Route exact path="/team/team-tiles">
          <TeamTiles />
        </Route>
        <Route exact path="/messages">
          <Messages />
        </Route>
        <Route exact path="/tasks">
          <Tasks />
        </Route>
        <Route exact path="/settings/account">
          <Account />
        </Route>
        <Route exact path="/settings/notifications">
          <Notifications />
        </Route>
        <Route exact path="/settings/apps">
          <Apps />
        </Route>
        <Route exact path="/settings/plans">
          <Plans />
        </Route>
        <Route exact path="/settings/billing">
          <Billing />
        </Route>
        <Route exact path="/settings/feedback">
          <Feedback />
        </Route>
        <Route exact path="/utility/changelog">
          <Changelog />
        </Route>
        <Route exact path="/utility/roadmap">
          <Roadmap />
        </Route>
        <Route exact path="/utility/faqs">
          <Faqs />
        </Route>
        <Route exact path="/utility/empty-state">
          <EmptyState />
        </Route>
        <Route exact path="/utility/404">
          <PageNotFound />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/reset-password">
          <ResetPassword />
        </Route>
        <Route exact path="/component/button">
          <ButtonPage />
        </Route>
        <Route exact path="/component/form">
          <FormPage />
        </Route>
        <Route exact path="/component/dropdown">
          <DropdownPage />
        </Route>
        <Route exact path="/component/alert">
          <AlertPage />
        </Route>
        <Route exact path="/component/modal">
          <ModalPage />
        </Route>
        <Route exact path="/component/pagination">
          <PaginationPage />
        </Route>
        <Route exact path="/component/tabs">
          <TabsPage />
        </Route>
        <Route exact path="/component/breadcrumb">
          <BreadcrumbPage />
        </Route>
        <Route exact path="/component/badge">
          <BadgePage />
        </Route>
        <Route exact path="/component/avatar">
          <AvatarPage />
        </Route>
        <Route exact path="/component/tooltip">
          <TooltipPage />
        </Route>
        <Route exact path="/component/accordion">
          <AccordionPage />
        </Route>
        <Route exact path="/component/icons">
          <IconsPage />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
