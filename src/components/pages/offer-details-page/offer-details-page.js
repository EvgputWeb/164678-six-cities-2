import React from 'react';
import {OFFERS_LIST_PROPTYPE} from '../../common-prop-types';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreator from '../../../store/action-creator';
import {MAX_NEAREST_OFFERS_COUNT, MAX_GALLERY_IMAGES_COUNT} from '../../../constants';
import Header from '../../header/header';
import RatingStars from '../../rating-stars/rating-stars';
import PlaceCard from '../../place-card/place-card';
import FavButton from '../../fav-button/fav-button';
import ReviewsList from '../../reviews-list/reviews-list';
import MapComponent from '../../map-component/map-component';
import ReviewForm from '../../review-form/review-form';
import {Redirect} from 'react-router-dom';
import {findNearestOffers} from '../../../utils';


const renderNearPlace = (offer) => {
  return (
    <PlaceCard
      key={offer.id}
      viewStyle={`card`}
      {...offer}
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


const OfferDetailsPage = (props) => {
  const {allOffers, activeOffer, isAuthorizationRequired, onActivateItem, onDeactivateItem} = props;

  if (isAuthorizationRequired) {
    return (<Redirect to="/login" />);
  }

  const id = +props.match.params.id;

  if (activeOffer.id !== id) {
    const filteredOffers = allOffers.filter((offer) => offer.id === id);
    if (filteredOffers.length === 0) {
      onDeactivateItem();
      return (<Redirect to="/" />);
    }
    onActivateItem(filteredOffers[0]);
    return null;
  }

  const nearestOffers = findNearestOffers(activeOffer, allOffers, MAX_NEAREST_OFFERS_COUNT);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          {renderGallery(activeOffer)}
          <div className="property__container container">
            <div className="property__wrapper">
              { (activeOffer.is_premium) && (<div className="property__mark"><span>Premium</span></div>) }
              <div className="property__name-wrapper">
                <h1 className="property__name">{activeOffer.title}</h1>
                <FavButton
                  id={id}
                  classPrefix={`property`}
                  width={31}
                  height={33}
                />
              </div>
              <RatingStars
                classPrefix={`property`}
                rating={activeOffer.rating}
                isValueVisible={true}
              />
              <ul className="property__features">
                <li className="property__feature property__feature--entire">Entire place</li>
                <li className="property__feature property__feature--bedrooms">{`${activeOffer.bedrooms} Bedrooms`}</li>
                <li className="property__feature property__feature--adults">{`Max ${activeOffer.max_adults} adults`}</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{activeOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {activeOffer.goods.map((thing, index) => (<li className="property__inside-item" key={index}>{thing}</li>))}
                </ul>
              </div>
              {renderHost(activeOffer)}
              <section className="property__reviews reviews">
                <ReviewsList />
                {(!isAuthorizationRequired) && (<ReviewForm />)}
              </section>
            </div>
          </div>
          <MapComponent
            list={[activeOffer, ...nearestOffers]}
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
  activeOffer: PropTypes.object.isRequired
};

const mapStateToProps = (store) => ({
  isAuthorizationRequired: store.isAuthorizationRequired,
  allOffers: store.allOffers,
  activeOffer: store.activeOffer,
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
