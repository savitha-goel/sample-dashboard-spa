import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RouteWithLayout from './common/routeWithLayout';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import UserList from './user/userList';
import ProductList from './product/productList';
import Main from './main';
import Home from './home';
import Footer from './footer/footer';
import UnauthorizedErr from './error/unauthorizedErr';
import Prelogin from './login/prelogin';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <RouteWithLayout exact path="/login" component={Login} layout={Prelogin}/>
            <Route exact path="/home" component={Home}/>
            <RouteWithLayout exact path="/dashboard" component={Dashboard} layout={Home}/>
            <RouteWithLayout exact path="/products" component={ProductList} layout={Home}/>
            <RouteWithLayout exact path="/users" component={UserList} layout={Home}/>
            <Route path="/unauthorized" component={UnauthorizedErr} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}
App.propTypes = {
  component: PropTypes.object
};

export default App;
