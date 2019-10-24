import React from 'react';
import renderer from 'react-test-renderer';
import SortForm from './sort-form.js';


it(`SortForm renders correctly`, () => {
  const sortForm = renderer
    .create(<SortForm />)
    .toJSON();

  expect(sortForm).toMatchSnapshot();
});
