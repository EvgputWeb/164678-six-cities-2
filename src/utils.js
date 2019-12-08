export const isObjectEmpty = (obj) => ((!obj) || (Object.entries(obj).length === 0));

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

export const findNearestOffers = (offer, allOffers, maxCount) => {
  let cityOffers = allOffers.filter((item) => (item.city.name === offer.city.name) && (item.id !== offer.id));
  if (cityOffers.length === 0) {
    return [];
  }
  if (cityOffers.length < maxCount) {
    return cityOffers;
  }
  let distances = [];
  for (let i = 0; i < cityOffers.length; i++) {
    distances.push({
      index: i,
      distance: getDistanceBetweenTwoPoints(offer.location, cityOffers[i].location)
    });
  }
  distances.sort((a, b) => (a.distance - b.distance));
  let nearest = [];
  [...distances.slice(0, maxCount)].forEach((item) => nearest.push(cityOffers[item.index]));
  return nearest;
};

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
