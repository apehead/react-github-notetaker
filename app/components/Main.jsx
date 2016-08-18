import React, { PropTypes } from 'react';

import SearchGithub from './SearchGithub';

const Main = ({ children }) => (
  <div className="main-comtainer">
    <nav className="navbar navbar-default" role="navigation">
      <div className="col-sm-7 col-sm-offset-2" style={{ marginTop: 15 }}>
        <SearchGithub />
      </div>
    </nav>
    <div className="container">
      {children}
    </div>
  </div>
);

Main.propTypes = {
  children: PropTypes.object.isRequired
};

export default Main;
