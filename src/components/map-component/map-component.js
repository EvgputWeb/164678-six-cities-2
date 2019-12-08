import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {OFFERS_LIST_PROPTYPE} from '../common-prop-types';
import leaflet from 'leaflet';
import {MapDefaults} from '../../constants';
import {isObjectEmpty} from '../../utils';


class MapComponent extends React.PureComponent {

  constructor(props) {
    super(props);
    this._map = null;
    this._layerGroup = null;
    this._defaultCenter = MapDefaults.CENTER_COORDS;
    this._defaultZoom = MapDefaults.ZOOM;
    this._icon = leaflet.icon(MapDefaults.ICON);
    this._activeIcon = leaflet.icon(MapDefaults.ACTIVE_ICON);
    this._markers = [];
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

  _createMarker(coords, id, isActive) {
    const icon = this._icon;
    const activeIcon = this._activeIcon;
    let marker = leaflet.marker([coords.latitude, coords.longitude], (isActive) ? ({icon: activeIcon}) : ({icon}));
    marker._id = id;
    this._map.addLayer(marker);
    this._markers.push(marker);
  }

  _removeMarker(id) {
    let newMarkers = [];
    this._markers.forEach((marker) => {
      if (marker._id === id) {
        this._map.removeLayer(marker);
      } else {
        newMarkers.push(marker);
      }
    });
    this._markers = [...newMarkers];
  }

  _removeAllMarkers() {
    this._markers.forEach((marker) => this._map.removeLayer(marker));
    this._markers = [];
  }

  _showMarkers(places) {
    this._removeAllMarkers();
    const {activeOffer} = this.props;
    if (isObjectEmpty(activeOffer)) {
      places.forEach((place) => this._createMarker(place.location, place.id, false));
    } else {
      places.forEach((place) => this._createMarker(place.location, place.id, (place.id === activeOffer.id)));
      this._map.flyTo([activeOffer.location.latitude, activeOffer.location.longitude]);
    }
  }

  _setOfferMarkerActivity(offer, activity) {
    if (isObjectEmpty(offer)) {
      return;
    }
    const id = offer.id;
    this._removeMarker(id);
    this._createMarker(offer.location, id, activity);
    if (activity) {
      this._map.flyTo([offer.location.latitude, offer.location.longitude]);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.list !== this.props.list) {
      this._getCenterLocationAndZoom();
      this._map.setView(this._center, this._zoom);
      this._showMarkers(this.props.list);
    } else if (prevProps.activeOffer !== this.props.activeOffer) {
      this._setOfferMarkerActivity(prevProps.activeOffer, false);
      this._setOfferMarkerActivity(this.props.activeOffer, true);
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
    leaflet.tileLayer(MapDefaults.TILE_LAYER, {attribution: MapDefaults.TILE_LAYER_ATTR}).addTo(map);
    this._showMarkers(this.props.list);
  }

  render() {
    const {elemToRender} = this.props;
    const container = elemToRender.split(` `);
    const containerClass = container.slice(1).join(` `);
    return (container[0] === `div`) ?
      (<div className={containerClass} id="map" />) :
      (<section className={containerClass} id="map" />);
  }
}


MapComponent.propTypes = {
  list: OFFERS_LIST_PROPTYPE,
  elemToRender: PropTypes.string.isRequired,
  activeOffer: PropTypes.object
};

const mapStateToProps = (store) => ({
  activeOffer: store.activeOffer
});

export {MapComponent};
export default connect(mapStateToProps)(MapComponent);
