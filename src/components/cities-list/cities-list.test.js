import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from './cities-list';
import {initialState} from '../../reducer';


it(`CitiesList renders correctly`, () => {
  const citiesSet = new Set(initialState.allOffers.map((offer) => offer.city.name));
  const list = [...citiesSet].slice(0, 5);

  const citiesList = renderer
    .create(
        <CitiesList
          list={list}
          activeItem={initialState.city}
          onActivateItem={jest.fn()}
          cityClickAction={jest.fn()}
        />
    )
    .toJSON();

  expect(citiesList).toMatchSnapshot();
});
