import React from 'react';
import {OFFERS_LIST_PROPTYPE} from '../../common-prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Header from '../../header/header';
import PlaceCard from '../../place-card/place-card';


const renderFooter = () => {
  return (
    <footer className="footer container">
      <Link to="/" className="footer__logo-link">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </Link>
    </footer>
  );
};

const renderEmptyPage = () => {
  return (
    <div className="page page--favorites-empty">
      <Header />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
            </div>
          </section>
        </div>
      </main>
      {renderFooter()}
    </div>
  );
};


const FavoritesPage = ({favorites}) => {

  if (Object.entries(favorites).length === 0) {
    return renderEmptyPage();
  }

  const citiesSet = new Set(favorites.map((offer) => offer.city.name));
  const citiesList = [...citiesSet];

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {citiesList.map((city) => {
                const cityFavs = favorites.filter((favOffer)=> favOffer.city.name === city);
                return (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {cityFavs.map((place) => (
                        <PlaceCard
                          key={place.id}
                          viewStyle={`stripe`}
                          {...place}
                          onTitleClick={() => {}}
                          onMouseEnter={() => {}}
                          onMouseLeave={() => {}}
                        />
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      {renderFooter()}
    </div>
  );
};


FavoritesPage.propTypes = {
  favorites: OFFERS_LIST_PROPTYPE,
};


const mapStateToProps = (store) => ({
  favorites: store.favorites
});


export {FavoritesPage};
export default connect(mapStateToProps, null)(FavoritesPage);

