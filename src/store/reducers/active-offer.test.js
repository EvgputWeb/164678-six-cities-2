import {activeOffer as activeOfferReducer} from './active-offer';
import ActionTypes from '../action-types';
import MOCK_OFFER from '../../mocks/mock-offer';

const INITIAL_STATE = {};

it(`activeOfferReducer should return initial state with empty parameters`, () => {
  expect(activeOfferReducer(undefined, {})).toEqual(INITIAL_STATE);
});

it(`activeOfferReducer should change active offer correctly`, () => {
  expect(activeOfferReducer(
      {},
      {
        type: ActionTypes.CHANGE_ACTIVE_OFFER,
        payload: MOCK_OFFER
      }
  )).toEqual(MOCK_OFFER);
});

it(`activeOfferReducer should not fail with incorrect parameters`, () => {
  expect(activeOfferReducer(
      INITIAL_STATE,
      {
        type: `Bla-bla-bla`,
        payload: `Tesla Roadster`
      }
  )).toEqual(INITIAL_STATE);
});

