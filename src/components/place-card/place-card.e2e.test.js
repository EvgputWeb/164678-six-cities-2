import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';
import MOCK_OFFER from '../../mocks/mock-offer';

Enzyme.configure({adapter: new Adapter()});


describe(`PlaceCard e2e test`, () => {

  const clickHandler = jest.fn();
  const mouseEnterHandler = jest.fn();

  const placeCard = shallow(
      <PlaceCard {...MOCK_OFFER}
        onTitleClick={clickHandler}
        onMouseEnter={() => mouseEnterHandler(MOCK_OFFER)}
        onMouseLeave={jest.fn()}
      />
  );

  it(`PlaceCard click test`, () => {
    const placeCardHeaderLink = placeCard.find(`.place-card__name a`);
    expect(placeCardHeaderLink.exists()).toBe(true);

    placeCardHeaderLink.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it(`PlaceCard mouseEnter test`, () => {
    const placeCardElem = placeCard.find(`.place-card`);

    placeCardElem.simulate(`mouseenter`);
    expect(mouseEnterHandler).toHaveBeenCalledWith(MOCK_OFFER);
  });

});
