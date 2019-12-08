import ActionTypes from '../action-types';
import {SORT_ORDERS} from '../../constants';

const INITIAL_STATE = SORT_ORDERS[0];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_SORT_ORDER: return action.payload;
  }
  return state;
};

export {reducer as sortOrder};
