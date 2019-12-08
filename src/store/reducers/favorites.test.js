import {favorites as favoritesReducer} from './favorites';
import ActionTypes from '../action-types';
import MOCK_OFFER from '../../mocks/mock-offer';


const INITIAL_STATE = [];

it(`favoritesReducer should return initial state with empty parameters`, () => {
  expect(favoritesReducer(undefined, {})).toEqual(INITIAL_STATE);
});

it(`favoritesReducer should load favorites correctly`, () => {
  expect(favoritesReducer(
      [],
      {
        type: ActionTypes.LOAD_FAVORITES,
        payload: [MOCK_OFFER]
      }
  )).toEqual([MOCK_OFFER]);
});

it(`favoritesReducer should clear favorites correctly`, () => {
  expect(favoritesReducer(
      [MOCK_OFFER],
      {
        type: ActionTypes.CLEAR_FAVORITES,
        payload: null
      }
  )).toEqual([]);
});

it(`favoritesReducer should add to favorites correctly`, () => {
  expect(favoritesReducer(
      [],
      {
        type: ActionTypes.ADD_TO_FAVORITES,
        payload: MOCK_OFFER
      }
  )).toEqual([MOCK_OFFER]);
  expect(favoritesReducer(
      [MOCK_OFFER],
      {
        type: ActionTypes.ADD_TO_FAVORITES,
        payload: MOCK_OFFER
      }
  )).toEqual([MOCK_OFFER]);
});

it(`favoritesReducer should remove from favorites correctly`, () => {
  expect(favoritesReducer(
      [MOCK_OFFER],
      {
        type: ActionTypes.REMOVE_FROM_FAVORITES,
        payload: MOCK_OFFER.id
      }
  )).toEqual([]);
  expect(favoritesReducer(
      [MOCK_OFFER],
      {
        type: ActionTypes.REMOVE_FROM_FAVORITES,
        payload: (MOCK_OFFER.id + 1)
      }
  )).toEqual([MOCK_OFFER]);
});

it(`favoritesReducer should not fail with incorrect parameters`, () => {
  expect(favoritesReducer(
      INITIAL_STATE,
      {
        type: `Bla-bla-bla`,
        payload: `Tesla Roadster`
      }
  )).toEqual(INITIAL_STATE);
});
