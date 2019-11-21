import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list';
import MOCK_OFFER from '../../mocks/mock-offer';


it(`PlacesList renders correctly`, () => {
  const placesList = renderer
    .create(<PlacesList list={[MOCK_OFFER]}
      onActivateItem={jest.fn()}
      onDeactivateItem={jest.fn()}
    />)
    .toJSON();

  expect(placesList).toMatchSnapshot();
});
