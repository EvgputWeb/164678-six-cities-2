import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.js';
import places from '../../data/places.js';


it(`App renders correctly`, () => {
  const app = renderer
    .create(<App placesList={places} />)
    .toJSON();

  expect(app).toMatchSnapshot();
});
