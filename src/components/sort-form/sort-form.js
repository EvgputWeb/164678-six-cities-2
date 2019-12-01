import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreator from '../../store/action-creator';
import {SORT_ORDERS} from '../../constants';
import withActiveFlag from '../../hocs/with-active-flag';


const SortForm = ({currentSortOrder, changeSortOrderAction, isActive, onSwitchState}) => {

  const handleTitleClick = () => onSwitchState();

  const handleItemClick = (sortOrderName) => () => {
    changeSortOrderAction(sortOrderName);
    onSwitchState();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span className="places__sorting-type" tabIndex="0" onClick={handleTitleClick}>
        {currentSortOrder}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isActive && `places__options--opened`}`}>
        {SORT_ORDERS.map((item) => (
          <li
            key={item}
            onClick={handleItemClick(item)}
            className={`places__option` + ((item === currentSortOrder) ? (` places__option--active`) : (``))}
            tabIndex="0">
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
};

SortForm.propTypes = {
  currentSortOrder: PropTypes.string.isRequired,
  changeSortOrderAction: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  onSwitchState: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  currentSortOrder: store.sortOrder
});

const mapDispatchToProps = (dispatch) => ({
  changeSortOrderAction: (sortOrder) => {
    dispatch(ActionCreator.changeSortOrder(sortOrder));
  }
});

export {SortForm};
export default connect(mapStateToProps, mapDispatchToProps)(withActiveFlag(SortForm));
