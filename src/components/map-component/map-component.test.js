import React from 'react';
import renderer from 'react-test-renderer';
import MapComponent from './map-component';
import OFFERS from '../../mocks/offers';


it(`Map correctly renders`, () => {
  const div = global.document.createElement(`div`);
  div.id = `map`;
  global.document.body.appendChild(div);

  const citiesMap = renderer
    .create(<MapComponent list={OFFERS} />)
    .toJSON();

  expect(citiesMap).toMatchSnapshot();
});
