import React from 'react';
import renderer from 'react-test-renderer';
import OfferDetailsPage from './offer-details-page';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import MOCK_OFFER from '../../../mocks/mock-offer';
import MOCK_REVIEWS from '../../../mocks/mock-reviews';


it(`OfferDetailsPage renders correctly`, () => {

  const state = {
    isAuthorizationRequired: false,
    allOffers: [MOCK_OFFER],
    activeOffer: MOCK_OFFER,
    favorites: [],
    reviews: MOCK_REVIEWS,
    errorMessage: ``
  };

  const store = {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  };

  const div = global.document.createElement(`div`);
  div.id = `map`;
  global.document.body.appendChild(div);

  const offerDetailsPage = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <OfferDetailsPage match={{params: {id: MOCK_OFFER.id}}} />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(offerDetailsPage).toMatchSnapshot();
});
