import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.js';


it(`Header renders correctly`, () => {
  const header = renderer
    .create(<Header />)
    .toJSON();

  expect(header).toMatchSnapshot();
});
