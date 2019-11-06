import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';


class Map extends React.PureComponent {

  constructor(props) {
    super(props);
    this._map = null;
    this._layerGroup = null;
    this._zoom = 12;
    this._center = [52.38333, 4.9];
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

  }

  _showMarkers(places) {
    const icon = this._icon;
    this._layerGroup.clearLayers();
    for (let i = 0; i < places.length; i++) {
      leaflet.marker(places[i].coords, {icon}).addTo(this._layerGroup);
    }
  }

  componentDidUpdate() {
    this._showMarkers(this.props.list);
  }

  componentDidMount() {
    this._map = leaflet.map(`map`, {
      center: this._center,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });
    const map = this._map;
    map.setView(this._center, this._zoom);
    this._layerGroup = leaflet.layerGroup().addTo(map);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
    this._showMarkers(this.props.list);
  }

  render() {
    return (
      <div className="cities__map" id="map" />
    );
  }

}


Map.propTypes = {
  list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        coords: PropTypes.arrayOf(PropTypes.number).isRequired,
        isBookmarked: PropTypes.bool.isRequired
      })
  ),
};


export default Map;
