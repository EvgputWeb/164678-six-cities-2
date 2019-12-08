import React from 'react';
import PropTypes from 'prop-types';


const withActiveFlag = (Component) => {

  class WithActiveFlag extends React.PureComponent {

    constructor(props) {
      super(props);
      this.state = {isActive: this.props.isActive || false};
      this._handleSwitchState = this._handleSwitchState.bind(this);
    }

    _handleSwitchState() {
      this.setState(({isActive}) => {
        return {isActive: !isActive};
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isActive={this.state.isActive}
          onSwitchState={this._handleSwitchState}
        />
      );
    }
  }

  WithActiveFlag.propTypes = {
    isActive: PropTypes.bool
  };

  return WithActiveFlag;
};

export default withActiveFlag;
