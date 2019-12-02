export const SORT_ORDERS = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

export const getDistanceBetweenTwoPoints = (point1, point2) => {
  const lat1 = point1.latitude;
  const lon1 = point1.longitude;
  const lat2 = point2.latitude;
  const lon2 = point2.longitude;
  const deg2rad = (deg) => deg * (Math.PI / 180);

  const R = 6371; // Radius of the Earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

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
