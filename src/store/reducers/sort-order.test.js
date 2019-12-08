import {sortOrder as sortOrderReducer} from './sort-order';
import ActionTypes from '../action-types';
import {SORT_ORDERS} from '../../constants';


const INITIAL_STATE = SORT_ORDERS[0];

it(`sortOrderReducer should return initial state with empty parameters`, () => {
  expect(sortOrderReducer(undefined, {})).toEqual(INITIAL_STATE);
});

it(`sortOrderReducer should change sort order correctly`, () => {
  expect(sortOrderReducer(
      INITIAL_STATE,
      {
        type: ActionTypes.CHANGE_SORT_ORDER,
        payload: [SORT_ORDERS[1]]
      }
  )).toEqual([SORT_ORDERS[1]]);
});

it(`sortOrderReducer should not fail with incorrect parameters`, () => {
  expect(sortOrderReducer(
      INITIAL_STATE,
      {
        type: `Bla-bla-bla`,
        payload: `Tesla Roadster`
      }
  )).toEqual(INITIAL_STATE);
});
