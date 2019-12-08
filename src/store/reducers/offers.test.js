import {allOffers as allOffersReducer} from './offers';
import ActionTypes from '../action-types';
import MOCK_OFFER from '../../mocks/mock-offer';


const INITIAL_STATE = [];

it(`allOffersReducer should return initial state with empty parameters`, () => {
  expect(allOffersReducer(undefined, {})).toEqual(INITIAL_STATE);
});

it(`allOffersReducer should load offers correctly`, () => {
  expect(allOffersReducer(
      [],
      {
        type: ActionTypes.LOAD_ALL_OFFERS,
        payload: [MOCK_OFFER]
      }
  )).toEqual([MOCK_OFFER]);
});

it(`allOffersReducer should not fail with incorrect parameters`, () => {
  expect(allOffersReducer(
      INITIAL_STATE,
      {
        type: `Bla-bla-bla`,
        payload: `Tesla Roadster`
      }
  )).toEqual(INITIAL_STATE);
});
