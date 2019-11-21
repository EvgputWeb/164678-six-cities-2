import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {App} from './app.js';
import MOCK_OFFER from '../../mocks/mock-offer';


it(`App renders correctly`, () => {
  const div = global.document.createElement(`div`);
  div.id = `map`;
  global.document.body.appendChild(div);

  const list = [MOCK_OFFER.city.name, `Paris`, `Amsterdam`, `Hamburg`];
  const activeCity = MOCK_OFFER.city.name;
  const cityOffers = [MOCK_OFFER];

  const app = renderer
    .create(
        <Provider store={createStore(jest.fn())}>
          <App
            citiesList = {list}
            city = {activeCity}
            cityOffers = {cityOffers}
          />
        </Provider>
    )
    .toJSON();

  expect(app).toMatchSnapshot();
});
