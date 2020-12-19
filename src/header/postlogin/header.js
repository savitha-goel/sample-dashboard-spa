import React from 'react';
import { useHistory } from 'react-router-dom';

import { getUserName, clearAuth } from '../../utils/userAuthInfo';
import Sidebar from '../../sidebar/sidebar';

const HeaderPostLogin = () => {
  const loggedInUser = getUserName();
  const history = useHistory();

  const onLogout = () => {
    clearAuth();
    history.push('/login');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-purple ">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" onClick={() => onLogout()}>Logout {loggedInUser}</a>
          </li>
        </ul>
      </nav>
      <div id="content" className="swrapper">
        <div className="nav-side-menu" id="sidebar">
          <Sidebar/>
        </div>
      </div>
    </div>
  );
};

export default HeaderPostLogin;
