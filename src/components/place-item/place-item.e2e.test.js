/* eslint-disable no-console */
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceItem from './place-item.js';
import testPlace from '../../data/test-place.js';

Enzyme.configure({adapter: new Adapter()});

it(`PlaceItem e2e test`, () => {

  const clickHandler = jest.fn();

  const placeItem = shallow(<PlaceItem {...testPlace} onClick={clickHandler} />);

  // console.log(placeItem.find(`.place-card__name a`).length);
  // expect(placeItem.find(`.place-card__name a`).exists()).toBe(true);

  const itemHeaderLink = placeItem.find(`.place-card__name a`);

  expect(itemHeaderLink.exists()).toBe(true);

  // itemHeaderLink.simulate(`click`);
  // expect(clickHandler).toHaveBeenCalledTimes(1);
});
