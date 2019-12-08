import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreator from '../../store/action-creator';
import {ERROR_MESSAGE_HIDE_TIMEOUT} from '../../constants';


const ErrorMessage = ({errorMessage, onClearErrorMessage}) => {

  if (!errorMessage) {
    return null;
  }

  setTimeout(()=>{
    onClearErrorMessage();
  }, ERROR_MESSAGE_HIDE_TIMEOUT);

  return (
    <p><b>{errorMessage}</b></p>
  );
};


ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  onClearErrorMessage: PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
  errorMessage: store.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
  onClearErrorMessage: () => {
    dispatch(ActionCreator.setErrorMessage(``));
  }
});

export {ErrorMessage};
export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
