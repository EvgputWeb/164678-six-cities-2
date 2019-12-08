import React from 'react';
import PropTypes from 'prop-types';
import {isObjectEmpty} from '../utils';


const withFormState = (Component) => {

  class WithFormState extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = (isObjectEmpty(this.props.formState)) ? ({}) : (this.props.formState);
      this._handleFieldChange = this._handleFieldChange.bind(this);
      this._clearFormState = this._clearFormState.bind(this);
    }

    _handleFieldChange(name, value) {
      this.setState((prevState) => Object.assign({}, prevState, {[name]: value}));
    }

    _clearFormState() {
      let emptyState = {};
      Object.keys(this.state).forEach((key) => (emptyState[key] = null));
      this.setState(emptyState);
    }

    render() {
      return (
        <Component
          {...this.props}
          formState={this.state}
          onFieldChange={this._handleFieldChange}
          onClearFormState={this._clearFormState}
        />
      );
    }
  }

  WithFormState.propTypes = {
    formState: PropTypes.object,
    onFieldChange: PropTypes.func,
    onClearFormState: PropTypes.func,
  };

  return WithFormState;
};

export default withFormState;
