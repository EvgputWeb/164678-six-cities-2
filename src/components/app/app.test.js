import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router';
import {Provider} from 'react-redux';
import Page404 from '../../components/pages/page-404/page-404';
import MainPage from '../pages/main-page/main-page';
import App from './app';
import MOCK_OFFER from '../../mocks/mock-offer';
import {SORT_ORDERS} from '../../constants';


configure({adapter: new Adapter()});

it(`invalid path should redirect to 404`, () => {
  const wrapper = mount(
      <MemoryRouter initialEntries={[`/wrong-path-to-unexisting-page`]}>
        <App />
      </MemoryRouter>
  );
  expect(wrapper.find(Page404)).toHaveLength(1);
  expect(wrapper.find(MainPage)).toHaveLength(0);
});


it(`"/" path should render Main page`, () => {

  const state = {
    isAuthorizationRequired: false,
    allOffers: [MOCK_OFFER],
    citiesList: [MOCK_OFFER.city.name],
    city: MOCK_OFFER.city.name,
    cityOffers: [MOCK_OFFER],
    favorites: [],
    sortOrder: SORT_ORDERS[0]
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

  const wrapper = mount(
      <MemoryRouter initialEntries={[`/`]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
  );
  expect(wrapper.find(MainPage)).toHaveLength(1);
  expect(wrapper.find(Page404)).toHaveLength(0);
});
