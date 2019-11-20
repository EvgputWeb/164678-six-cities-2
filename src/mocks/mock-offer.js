/* eslint-disable camelcase */
const MOCK_OFFER = {
  bedrooms: 1,
  city: {
    name: `Cologne`,
    location: {latitude: 50.938361, longitude: 6.959974, zoom: 13}
  },
  description: `Peaceful studio in the most wanted area in town`,
  goods: [`Dishwasher`, `Breakfast`, `Fridge`],
  host: {
    avatar_url: `img/avatar-angelina.jpg`,
    id: 25,
    is_pro: true,
    name: `Angelina`,
  },
  id: 1,
  images: [],
  is_favorite: false,
  is_premium: false,
  location: {
    latitude: 50.947361,
    longitude: 6.979974,
    zoom: 16
  },
  max_adults: 1,
  preview_image: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/14.jpg`,
  price: 249,
  rating: 3.4,
  title: `Perfectly located Castro`,
  type: `room`
};

export default MOCK_OFFER;
