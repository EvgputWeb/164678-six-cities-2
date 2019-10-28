import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';
import TEST_OFFER from '../../mocks/test-offer';

Enzyme.configure({adapter: new Adapter()});


describe(`PlaceCard e2e test`, () => {

  const clickHandler = jest.fn();
  const mouseEnterHandler = jest.fn();

  const placeCard = shallow(<PlaceCard {...TEST_OFFER} onTitleClick={clickHandler} onMouseEnter={() => mouseEnterHandler(TEST_OFFER)} />);

  it(`PlaceCard click test`, () => {
    const placeCardHeaderLink = placeCard.find(`.place-card__name a`);
    expect(placeCardHeaderLink.exists()).toBe(true);

    placeCardHeaderLink.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it(`PlaceCard mouseEnter test`, () => {
    const placeCardElem = placeCard.find(`.place-card`);

    placeCardElem.simulate(`mouseenter`);
    expect(mouseEnterHandler).toBeCalledWith(expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
      type: expect.any(String),
      price: expect.any(Number),
      rating: expect.any(Number),
      isPremium: expect.any(Boolean),
      isBookmarked: expect.any(Boolean)
    }));

  });

});
