import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';


const withAuth = (Component) => {

  class WithAuth extends React.PureComponent {

    constructor(props) {
      super(props);
    }

    render() {
      return (this.props.isAuthorizationRequired) ?
        (<Redirect to="/login" />) :
        (<Component {...this.props} />);
    }
  }

  WithAuth.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired
  };

  const mapStateToProps = (store) => ({
    isAuthorizationRequired: store.isAuthorizationRequired
  });

  return connect(mapStateToProps)(WithAuth);
};

export default withAuth;
