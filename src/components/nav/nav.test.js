import React from 'react';
import renderer from 'react-test-renderer';
import Nav from './nav.js';


it(`Nav renders correctly`, () => {
  const nav = renderer
    .create(<Nav />)
    .toJSON();

  expect(nav).toMatchSnapshot();
});
