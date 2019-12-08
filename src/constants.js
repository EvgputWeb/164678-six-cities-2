export const CITIES_COUNT = 6;

export const SORT_ORDERS = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

export const MAX_NEAREST_OFFERS_COUNT = 3;
export const MAX_GALLERY_IMAGES_COUNT = 6;

export const MapDefaults = {
  CENTER_COORDS: [52.3, 4.9],
  ZOOM: 12,
  ICON: {
    iconUrl: `img/pin.svg`,
    iconSize: [27, 39]
  },
  ACTIVE_ICON: {
    iconUrl: `img/pin-active.svg`,
    iconSize: [27, 39]
  },
  TILE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  TILE_LAYER_ATTR: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
};

export const ReviewDefaults = {
  RATING_VALUES: [
    {mark: 5, text: `perfect`},
    {mark: 4, text: `good`},
    {mark: 3, text: `not bad`},
    {mark: 2, text: `badly`},
    {mark: 1, text: `terribly`},
  ],
  RATING: `rating`,
  REVIEW: `review`,
  MIN_REVIEW_LENGTH: 50,
  MAX_REVIEW_LENGTH: 300,
};

export const MAX_REVIEWS_COUNT_ON_PAGE = 10;

export const ERROR_MESSAGE_HIDE_TIMEOUT = 2500;

export const POST_REVIEW_ERROR = `Sorry. Your review wasn't posted :(`;
