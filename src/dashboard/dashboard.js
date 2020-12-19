import React from 'react';

import { getUserName } from '../utils/userAuthInfo';

const Dashboard = () => {
  const userName = getUserName();
  return (
    <div className="content-wrap">
      <h3 className="content-title">Welcome {userName}</h3>
    </div>
  );
};

export default Dashboard;
