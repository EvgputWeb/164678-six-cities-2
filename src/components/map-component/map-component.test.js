import React from 'react';
import renderer from 'react-test-renderer';
import {MapComponent} from './map-component';
import MOCK_OFFER from '../../mocks/mock-offer';


it(`Map correctly renders`, () => {
  const div = global.document.createElement(`div`);
  div.id = `map`;
  global.document.body.appendChild(div);

  const citiesMap = renderer
    .create(
        <MapComponent
          list={[MOCK_OFFER]}
          elemToRender={`div div-class`}
          activeOffer={MOCK_OFFER}
        />)
    .toJSON();

  expect(citiesMap).toMatchSnapshot();
});
