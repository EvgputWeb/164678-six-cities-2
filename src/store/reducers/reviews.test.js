import {reviews as reviewsReducer} from './reviews';
import ActionTypes from '../action-types';


const INITIAL_STATE = [];

it(`reviewsReducer should return initial state with empty parameters`, () => {
  expect(reviewsReducer(undefined, {})).toEqual(INITIAL_STATE);
});

it(`reviewsReducer should load reviews correctly`, () => {
  expect(reviewsReducer(
      [],
      {
        type: ActionTypes.LOAD_REVIEWS,
        payload: [`Very good hotel`]
      }
  )).toEqual([`Very good hotel`]);
});

it(`reviewsReducer should not fail with incorrect parameters`, () => {
  expect(reviewsReducer(
      INITIAL_STATE,
      {
        type: `Bla-bla-bla`,
        payload: `Tesla Roadster`
      }
  )).toEqual(INITIAL_STATE);
});
