import {userData as userDataReducer} from './user-data';
import ActionTypes from '../action-types';

const INITIAL_STATE = {};

it(`userDataReducer should return initial state with empty parameters`, () => {
  expect(userDataReducer(undefined, {})).toEqual(INITIAL_STATE);
});

it(`userDataReducer should change user data correctly`, () => {
  const mockUserData = {
    id: 777,
    email: `pupkin.vasya@mail.ru`,
    name: `Pupkin Vasya`,
  };
  expect(userDataReducer(
      {},
      {
        type: ActionTypes.SAVE_USER_DATA,
        payload: mockUserData
      }
  )).toEqual(mockUserData);
});

it(`userDataReducer should not fail with incorrect parameters`, () => {
  expect(userDataReducer(
      INITIAL_STATE,
      {
        type: `Bla-bla-bla`,
        payload: `Tesla Roadster`
      }
  )).toEqual(INITIAL_STATE);
});

