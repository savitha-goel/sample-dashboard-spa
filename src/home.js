import React from 'react';
import PropTypes from 'prop-types';

import HeaderPostlogin from './header/postlogin/header';

const Home = (props) => {
  return (
    <div className="content">
      <HeaderPostlogin/>
      {props.children}
    </div>
  );
};
Home.propTypes = {
  children: PropTypes.object
};

export default Home;
