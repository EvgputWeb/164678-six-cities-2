import React from 'react';
import PropTypes from 'prop-types';

const withList = (Component) => {

  class WithList extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {list: []};
      this._setList = this._setList.bind(this);
      this._clearList = this._clearList.bind(this);
    }

    _setList(list) {
      this.setState({list});
    }

    _clearList() {
      this.setState({list: []});
    }

    render() {
      return (
        <Component
          {...this.props}
          list={this.state.list}
          onSetList={this._setList}
          onClearList={this._clearList}
        />
      );
    }
  }

  WithList.propTypes = {
    list: PropTypes.array,
    onSetList: PropTypes.func,
    onClearList: PropTypes.func,
  };

  return WithList;
};

export default withList;
