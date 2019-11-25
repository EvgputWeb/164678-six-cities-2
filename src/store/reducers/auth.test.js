import {isAuthorizationRequired as isAuthorizationRequiredReducer} from './auth';
import ActionTypes from '../action-types';

const INITIAL_STATE = true;

it(`isAuthorizationRequiredReducer should return initial state with empty parameters`, () => {
  expect(isAuthorizationRequiredReducer(undefined, {})).toEqual(INITIAL_STATE);
});

it(`isAuthorizationRequiredReducer should change state correctly`, () => {
  expect(isAuthorizationRequiredReducer(
      true,
      {
        type: ActionTypes.NEED_AUTH,
        payload: false
      }
  )).toEqual(false);

  expect(isAuthorizationRequiredReducer(
      false,
      {
        type: ActionTypes.NEED_AUTH,
        payload: true
      }
  )).toEqual(true);
});

it(`isAuthorizationRequiredReducer should not fail with incorrect parameters`, () => {
  expect(isAuthorizationRequiredReducer(
      INITIAL_STATE,
      {
        type: `Bla-bla-bla`,
        payload: `Tesla Roadster`
      }
  )).toEqual(INITIAL_STATE);
});

