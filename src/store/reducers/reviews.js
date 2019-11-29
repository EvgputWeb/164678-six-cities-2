import ActionTypes from '../action-types';

const INITIAL_STATE = [];


const reviewExistsInArray = (review, revArr) => {
  return (revArr.filter((item)=> item.id === review.id)).length > 0;
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_REVIEWS: {
      const hotelReviews = state.filter((item) => item.hotelId === action.payload.hotelId);
      if (hotelReviews.length === 0) {
        return [...state, action.payload];
      } else {
        let reviews = [...hotelReviews[0].reviews];
        const payloadReviews = action.payload.reviews;
        payloadReviews.forEach((review) => {
          if (!reviewExistsInArray(review, reviews)) {
            reviews.push(review);
          }
        });
        return [...(state.filter((item)=> item.hotelId !== action.payload.hotelId)),
          {hotelId: action.payload.hotelId, reviews}
        ];
      }
    }

  }
  return state;
};

export {reducer as reviews};
