import React from 'react';
import PropTypes from 'prop-types';

import HeaderPrelogin from '../header/prelogin/header';

const Prelogin = (props) => {
  return (
    <div className="content">
      <HeaderPrelogin/>
      {props.children}
    </div>
  );
};
Prelogin.propTypes = {
  children: PropTypes.object
};

export default Prelogin;
