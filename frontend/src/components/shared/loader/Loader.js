import React from 'react';
import PropTypes from 'prop-types';

const Loader = props => (
  <div className="neo-col-lg-4 justify-content-center">
    <div className="loading-spinner" />
    <p>{props.loadingMessage}</p>
  </div>
);

Loader.propTypes = {
  loadingMessage: PropTypes.string,
};

Loader.defaultProps = {
  loadingMessage: 'Loading ...',
};

export default Loader;
