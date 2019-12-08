import {errorMessage as errorMessageReducer} from './error-message';
import ActionTypes from '../action-types';

const INITIAL_STATE = ``;

it(`errorMessageReducer should return initial state with empty parameters`, () => {
  expect(errorMessageReducer(undefined, {})).toEqual(INITIAL_STATE);
});

it(`errorMessageReducer should change errorMessage correctly`, () => {
  const currentErrorMessage = `Error in line 42`;
  const newErrorMessage = `Error in line 43`;
  expect(errorMessageReducer(
      currentErrorMessage,
      {
        type: ActionTypes.SET_ERROR_MESSAGE,
        payload: newErrorMessage
      }
  )).toEqual(newErrorMessage);
});

it(`errorMessageReducer should not fail with incorrect parameters`, () => {
  expect(errorMessageReducer(
      INITIAL_STATE,
      {
        type: `Bla-bla-bla`,
        payload: `Tesla Roadster`
      }
  )).toEqual(INITIAL_STATE);
});

