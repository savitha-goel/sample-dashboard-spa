import React from 'react';

import Dashboard from './dashboard/dashboard';
import Login from './login/login';
import { isUserAuth } from './utils/userAuthInfo';

const Main = () => {
  const isUserLoggedIn = isUserAuth();
  if (isUserLoggedIn) {
    return (
      <div>
        <Dashboard />
      </div>
    );
  } else {
    return (
      <Login/>
    );
  }
};

export default Main;
