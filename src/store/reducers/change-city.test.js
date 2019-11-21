import {city as cityReducer} from './change-city';
import ActionTypes from '../action-types';

const initialState = ``;

it(`cityReducer should return initial state with empty parameters`, () => {
  expect(cityReducer(undefined, {})).toEqual(initialState);
});

it(`cityReducer should change city correctly`, () => {
  const currentCity = `Amsterdam`;
  const newCity = `Paris`;
  expect(cityReducer(
      currentCity,
      {
        type: ActionTypes.CHANGE_CITY,
        payload: newCity
      }
  )).toEqual(newCity);
});

it(`cityReducer should not fail with incorrect parameters`, () => {
  expect(cityReducer(
      initialState,
      {
        type: `Bla-bla-bla`,
        payload: `Tesla Roadster`
      }
  )).toEqual(initialState);
});

