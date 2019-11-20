import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';
import MOCK_OFFER from '../../mocks/mock-offer';

it(`PlaceCard renders correctly`, () => {
  const placeCard = renderer
    .create(<PlaceCard {...MOCK_OFFER}
      onTitleClick={jest.fn()}
      onMouseEnter={jest.fn()}
      onMouseLeave={jest.fn()}
    />)
    .toJSON();

  expect(placeCard).toMatchSnapshot();
});
