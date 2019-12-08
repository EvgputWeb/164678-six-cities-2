import React from 'react';
import renderer from 'react-test-renderer';
import {SortForm} from './sort-form';
import {SORT_ORDERS} from '../../constants';


it(`SortForm renders correctly`, () => {
  const sortForm = renderer
    .create(
        <SortForm
          currentSortOrder={SORT_ORDERS[0]}
          changeSortOrderAction={jest.fn()}
          onSwitchState={jest.fn()}
        />)
    .toJSON();

  expect(sortForm).toMatchSnapshot();
});
