import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Map from './map.js';
import OFFERS from '../../mocks/offers.js';

Enzyme.configure({adapter: new Adapter()});


it(`Map render test`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);

  const citiesMap = mount(<Map list={OFFERS} />, {attachTo: div});

  expect(citiesMap).toMatchSnapshot();
});
