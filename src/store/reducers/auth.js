import ActionTypes from '../action-types';

const INITIAL_STATE = true;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.NEED_AUTH: return action.payload;
  }
  return state;
};

export {reducer as isAuthorizationRequired};
