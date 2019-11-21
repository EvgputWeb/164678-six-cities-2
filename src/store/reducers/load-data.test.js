import MOCK_OFFER from '../../mocks/mock-offer';
import {allOffers as loadDataReducer} from './load-data';
import ActionTypes from '../action-types';

const initialState = [];

it(`loadDataReducer should return initial state with empty parameters`, () => {
  expect(loadDataReducer(undefined, {})).toEqual(initialState);
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
      initialState,
      {
        type: `Bla-bla-bla`,
        payload: `Tesla Roadster`
      }
  )).toEqual(initialState);
});
