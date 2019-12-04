import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import history from '../history';


const withAuth = (Component) => {

  class WithAuth extends React.PureComponent {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      if (this.props.isAuthorizationRequired) {
        history.push(`/login`);
      }
    }

    render() {
      return (<Component {...this.props} />);
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
