import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list';
import {initialState} from '../../reducer';


it(`CitiesList renders correctly`, () => {
  const citiesSet = new Set(initialState.allOffers.map((offer) => offer.city));
  const list = [...citiesSet].slice(0, 5);

  const citiesList = renderer
    .create(<CitiesList list={list} selectedCity={initialState.city} onCityClick={jest.fn()} />)
    .toJSON();

  expect(citiesList).toMatchSnapshot();
});
