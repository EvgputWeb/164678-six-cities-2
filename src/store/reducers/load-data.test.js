import MOCK_OFFER from '../../mocks/mock-offer';
import {allOffers as loadDataReducer} from './load-data';
import ActionTypes from '../action-types';

const INITIAL_STATE = [];

it(`loadDataReducer should return initial state with empty parameters`, () => {
  expect(loadDataReducer(undefined, {})).toEqual(INITIAL_STATE);
});

it(`loadDataReducer should load offers correctly`, () => {
  expect(loadDataReducer(
      [],
      {
        type: ActionTypes.LOAD_ALL_OFFERS,
        payload: [MOCK_OFFER]
      }
  )).toEqual([MOCK_OFFER]);
});

it(`loadDataReducer should not fail with incorrect parameters`, () => {
  expect(loadDataReducer(
      INITIAL_STATE,
      {
        type: `Bla-bla-bla`,
        payload: `Tesla Roadster`
      }
  )).toEqual(INITIAL_STATE);
});
