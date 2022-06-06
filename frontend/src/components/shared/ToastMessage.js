import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Toast } from 'react-bootstrap';

const ToastMessage = props => {
  const [showA, setShowA] = useState(false);


  useEffect(() => {
    setShowA(props.showToast);
  }, [props.showToast])

  const toggleShowA = () => setShowA(!showA);

  return (<div className="neo-col-lg-4 justify-content-center">
    <Toast show={showA} onClose={toggleShowA} delay={3000} autohide className="bg-success">
      <Toast.Body>{props.responseMessage}</Toast.Body>
    </Toast>
  </div>
  )
};

ToastMessage.propTypes = {
  loadingMessage: PropTypes.string,
};

ToastMessage.defaultProps = {
  loadingMessage: 'Loading ...',
};

export default ToastMessage;
