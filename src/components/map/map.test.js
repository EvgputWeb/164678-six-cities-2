import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.js';


it(`Map renders correctly`, () => {
  const map = renderer
    .create(<Map />)
    .toJSON();

  expect(map).toMatchSnapshot();
});
