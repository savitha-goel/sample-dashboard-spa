import React from 'react';

import './_sidebar.css';

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <a href="/dashboard"><h6>Home</h6></a>
      </div>
      <ul className="list-unstyled">
        <li className="sidebar-menu">
          <a href="/users">Users</a>
        </li>
        <li className="sidebar-menu">
          <a href="/products">Products</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
