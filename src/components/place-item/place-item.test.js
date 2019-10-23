import React from 'react';
import renderer from 'react-test-renderer';
import PlaceItem from './place-item.js';


it(`PlaceItem renders correctly`, () => {

  const testPlace = {id: -1, name: `Just test name`};

  const placeItem = renderer
    .create(<PlaceItem {...testPlace} />)
    .toJSON();

  expect(placeItem).toMatchSnapshot();
});
