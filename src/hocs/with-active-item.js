import React from 'react';
import PropTypes from 'prop-types';


const withActiveItem = (Component) => {

  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.props.activeItem || null
      };

      this._handleActivateItem = this._handleActivateItem.bind(this);
      this._handleDeactivateItem = this._handleDeactivateItem.bind(this);
    }

    _handleActivateItem(item) {
      this.setState({activeItem: item});
    }

    _handleDeactivateItem() {
      this.setState({activeItem: null});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onActivateItem={this._handleActivateItem}
          onDeactivateItem={this._handleDeactivateItem}
        />
      );
    }

  }

  WithActiveItem.propTypes = {
    activeItem: PropTypes.any
  };

  return WithActiveItem;
};

export default withActiveItem;
