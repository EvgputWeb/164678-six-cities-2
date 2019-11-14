import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list';
import OFFERS from '../../mocks/offers';


it(`PlacesList renders correctly`, () => {
  const placesList = renderer
    .create(<PlacesList list={OFFERS} onActivateItem={jest.fn()} onDeactivateItem={jest.fn()} />)
    .toJSON();

  expect(placesList).toMatchSnapshot();
});
