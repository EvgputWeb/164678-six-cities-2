import ActionTypes from '../action-types';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_REVIEWS: {
      const hotelReviews = state.filter((item) => item.hotelId === action.payload.hotelId);
      return (hotelReviews.length === 0) ?
        ([...state, action.payload]) :
        ([...(state.filter((item) => item.hotelId !== action.payload.hotelId)), action.payload]);
    }
  }
  return state;
};

export {reducer as reviews};
