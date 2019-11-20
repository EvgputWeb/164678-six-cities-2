/* eslint-disable camelcase */
// import  from 'prop-types';
import {shape, number, string, bool, func, arrayOf} from 'prop-types';


const LOCATION_SHAPE_OBJECT = {
  latitude: number.isRequired,
  longitude: number.isRequired,
  zoom: number.isRequired,
};

const OFFER_SHAPE_OBJECT = {
  bedrooms: number.isRequired,
  city: shape({
    name: string.isRequired,
    location: shape(LOCATION_SHAPE_OBJECT).isRequired
  }).isRequired,
  description: string.isRequired,
  goods: arrayOf(string).isRequired,
  host: shape({
    id: number.isRequired,
    name: string.isRequired,
    is_pro: bool.isRequired,
    avatar_url: string.isRequired,
  }).isRequired,
  id: number.isRequired,
  images: arrayOf(string).isRequired,
  is_favorite: bool.isRequired,
  is_premium: bool.isRequired,
  location: shape(LOCATION_SHAPE_OBJECT).isRequired,
  max_adults: number.isRequired,
  preview_image: string.isRequired,
  price: number.isRequired,
  rating: number.isRequired,
  title: string.isRequired,
  type: string.isRequired,
};

const OFFERS_LIST_PROPTYPE = arrayOf(shape(OFFER_SHAPE_OBJECT)).isRequired;

const PLACECARD_SHAPE_OBJECT = Object.assign({}, OFFER_SHAPE_OBJECT,
    {
      onMouseEnter: func.isRequired,
      onMouseLeave: func.isRequired,
      onTitleClick: func.isRequired,
    }
);


export {OFFER_SHAPE_OBJECT, OFFERS_LIST_PROPTYPE, PLACECARD_SHAPE_OBJECT};
