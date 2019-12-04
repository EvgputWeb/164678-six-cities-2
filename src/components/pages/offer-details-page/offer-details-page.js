import React from 'react';
import {OFFERS_LIST_PROPTYPE} from '../../common-prop-types';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import history from '../../../history';
import ActionCreator from '../../../store/action-creator';
import {getDistanceBetweenTwoPoints, MAX_NEAREST_OFFERS_COUNT, MAX_GALLERY_IMAGES_COUNT} from '../../../constants';
import Header from '../../header/header';
import RatingStars from '../../rating-stars/rating-stars';
import PlaceCard from '../../place-card/place-card';
import FavButton from '../../fav-button/fav-button';
import ReviewsList from '../../reviews-list/reviews-list';
import MapComponent from '../../map-component/map-component';
import ReviewForm from '../../review-form/review-form';


const renderNearPlace = (offer) => {
  return (
    <PlaceCard
      key={offer.id}
      viewStyle={`card`}
      {...offer}
      onTitleClick={() => {}}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    />
  );
};

const renderGallery = (offer) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {offer.images.map((image, index) =>
          (index < MAX_GALLERY_IMAGES_COUNT) && (
            <div className="property__image-wrapper" key={index}>
              <img className="property__image" src={image} alt="Photo"/>
            </div>
          ))}
      </div>
    </div>
  );
};

const renderHost = (offer) => {
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={offer.host.avatar_url} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">{offer.host.name}</span>
        { (offer.host.is_pro) && (<span className="property__user-status">Pro</span>) }
      </div>
      <div className="property__description">
        <p className="property__text">{offer.description}</p>
      </div>
    </div>
  );
};


const findNearestOffers = (offer, allOffers, maxCount) => {
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


const OfferDetailsPage = (props) => {
  const {allOffers, isAuthorizationRequired, onActivateItem, onDeactivateItem} = props;
  const id = +props.match.params.id;

  if (isAuthorizationRequired) {
    history.push(`/login`);
    return null;
  }

  const filteredOffers = allOffers.filter((offer) => offer.id === id);
  if (filteredOffers.length === 0) {
    onDeactivateItem();
    return null;
  }
  const offer = filteredOffers[0];
  onActivateItem(offer);

  const nearestOffers = findNearestOffers(offer, allOffers, MAX_NEAREST_OFFERS_COUNT);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          {renderGallery(offer)}
          <div className="property__container container">
            <div className="property__wrapper">
              { (offer.is_premium) && (<div className="property__mark"><span>Premium</span></div>) }
              <div className="property__name-wrapper">
                <h1 className="property__name">{offer.title}</h1>
                <FavButton
                  id={id}
                  classPrefix={`property`}
                  width={31}
                  height={33}
                />
              </div>
              <RatingStars
                classPrefix={`property`}
                rating={offer.rating}
                isValueVisible={true}
              />
              <ul className="property__features">
                <li className="property__feature property__feature--entire">Entire place</li>
                <li className="property__feature property__feature--bedrooms">{`${offer.bedrooms} Bedrooms`}</li>
                <li className="property__feature property__feature--adults">{`Max ${offer.max_adults} adults`}</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((thing, index) => (<li className="property__inside-item" key={index}>{thing}</li>))}
                </ul>
              </div>
              {renderHost(offer)}
              <section className="property__reviews reviews">
                <ReviewsList hotelId={id} />
                {(!isAuthorizationRequired) && (<ReviewForm hotelId={id} />)}
              </section>
            </div>
          </div>
          <MapComponent
            list={[offer, ...nearestOffers]}
            elemToRender={`section property__map map`}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              { nearestOffers.map((nearOffer) => renderNearPlace(nearOffer)) }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};


OfferDetailsPage.propTypes = {
  allOffers: OFFERS_LIST_PROPTYPE,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  onActivateItem: PropTypes.func.isRequired,
  onDeactivateItem: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  isAuthorizationRequired: store.isAuthorizationRequired,
  allOffers: store.allOffers,
});

const mapDispatchToProps = (dispatch) => ({
  onActivateItem: (item) => {
    dispatch(ActionCreator.changeActiveOffer(item));
  },
  onDeactivateItem: () => {
    dispatch(ActionCreator.changeActiveOffer({}));
  },
});

export {OfferDetailsPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferDetailsPage);
