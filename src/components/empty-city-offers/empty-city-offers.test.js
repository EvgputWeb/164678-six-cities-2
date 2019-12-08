import React from 'react';
import renderer from 'react-test-renderer';
import EmptyCityOffers from './empty-city-offers';


it(`EmptyCityOffers renders correctly`, () => {
  const emptyCityOffers = renderer
    .create(
        <EmptyCityOffers
          city={`Paris`}
        />
    )
    .toJSON();

  expect(emptyCityOffers).toMatchSnapshot();
});
