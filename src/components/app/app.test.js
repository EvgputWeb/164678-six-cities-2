import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.js';
import OFFERS from '../../mocks/offers.js';


it(`App renders correctly`, () => {
  const app = renderer
    .create(<App placesList={OFFERS} />)
    .toJSON();

  expect(app).toMatchSnapshot();
});
