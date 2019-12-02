import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {OFFERS_LIST_PROPTYPE} from '../common-prop-types';
import leaflet from 'leaflet';
import {MapDefaults} from '../../constants';


class MapComponent extends React.PureComponent {

  constructor(props) {
    super(props);
    this._map = null;
    this._layerGroup = null;
    this._defaultCenter = MapDefaults.CENTER_COORDS;
    this._defaultZoom = MapDefaults.ZOOM;
    this._icon = leaflet.icon(MapDefaults.ICON);
    this._activeIcon = leaflet.icon(MapDefaults.ACTIVE_ICON);
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
    const activeIcon = this._activeIcon;
    const {activeOffer} = this.props;
    const isActiveOfferEmpty = (!activeOffer) || (Object.entries(activeOffer).length === 0);

    const isFloatEqual = (a, b) => Math.abs(a - b) < 0.0000001;

    this._layerGroup.clearLayers();

    let locations = [...places];
    if (!isActiveOfferEmpty) {
      locations = places.filter((place) => {
        return !(isFloatEqual(place.location.latitude, activeOffer.location.latitude) &&
               isFloatEqual(place.location.longitude, activeOffer.location.longitude));
      });
    }
    locations.forEach((place) => {
      leaflet.marker([place.location.latitude, place.location.longitude], {icon}).addTo(this._layerGroup);
    });
    if (!isActiveOfferEmpty) {
      leaflet.marker([activeOffer.location.latitude, activeOffer.location.longitude], {icon: activeIcon}).addTo(this._layerGroup);
    }
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.list !== this.props.list) || (prevProps.activeOffer !== this.props.activeOffer)) {
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

