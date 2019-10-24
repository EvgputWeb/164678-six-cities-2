import React from 'react';
import renderer from 'react-test-renderer';
import PlaceItem from './place-item.js';
import testPlace from '../../data/test-place.js';

it(`PlaceItem renders correctly`, () => {
  const placeItem = renderer
    .create(<PlaceItem {...testPlace} titleClickHandler={jest.fn()} />)
    .toJSON();

  expect(placeItem).toMatchSnapshot();
});
