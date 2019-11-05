import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';
import TEST_OFFER from '../../mocks/test-offer';

it(`PlaceCard renders correctly`, () => {
  const placeCard = renderer
    .create(<PlaceCard {...TEST_OFFER} onTitleClick={jest.fn()} onMouseEnter={jest.fn()} />)
    .toJSON();

  expect(placeCard).toMatchSnapshot();
});