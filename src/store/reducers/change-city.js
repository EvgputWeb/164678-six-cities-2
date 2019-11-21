import ActionTypes from '../action-types';

const initialState = ``;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CITY: return action.payload;
  }
  return state;
};

export {reducer as city};
