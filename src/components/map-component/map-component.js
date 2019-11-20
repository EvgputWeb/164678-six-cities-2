import React from 'react';
import {OFFERS_LIST_PROPTYPE} from '../common-prop-types';
import leaflet from 'leaflet';


class MapComponent extends React.PureComponent {

  constructor(props) {
    super(props);
    this._map = null;
    this._layerGroup = null;
    this._defaultCenter = [52.3, 4.9];
    this._defaultZoom = 12;
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
  }

  _getCenterLocationAndZoom() {
    if (this.props.list.length) {
      const cityLocation = this.props.list[0].city.location;
      this._center = [cityLocation.latitude, cityLocation.longitude];
      this._zoom = cityLocation.zoom;
    } else {
      this._center = this._defaultCenter;
      this._zoom = this._defaultZoom;
    }
  }

  _showMarkers(places) {
    const icon = this._icon;
    this._layerGroup.clearLayers();
    places.forEach((place)=>{
      leaflet.marker([place.location.latitude, place.location.longitude], {icon}).addTo(this._layerGroup);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.list !== this.props.list) {
      this._getCenterLocationAndZoom();
      this._map.setView(this._center, this._zoom);
      this._showMarkers(this.props.list);
    }
  }

  componentDidMount() {
    this._getCenterLocationAndZoom();
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


MapComponent.propTypes = {
  list: OFFERS_LIST_PROPTYPE
};


export default MapComponent;
