import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.js';
import OFFERS from '../../mocks/offers.js';


it(`Map correctly renders`, () => {
  const div = global.document.createElement(`div`);
  div.id = `map`;
  global.document.body.appendChild(div);

  const citiesMap = renderer
    .create(<Map list={OFFERS} />)
    .toJSON();

  expect(citiesMap).toMatchSnapshot();
});
