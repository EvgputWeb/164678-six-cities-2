import ActionTypes from '../action-types';

const INITIAL_STATE = ``;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CITY: return action.payload;
  }
  return state;
};

export {reducer as city};
