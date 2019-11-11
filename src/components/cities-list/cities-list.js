import React from 'react';
import PropTypes from 'prop-types';

const CitiesList = ({list, selectedCity, onCityClick}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {list.map((city) => (
            <li key={city} className="locations__item">
              <a href="#"
                className={`locations__item-link tabs__item` + ((city === selectedCity) && (` tabs__item--active`)) }
                onClick={(e)=>{
                  e.preventDefault();
                  onCityClick(city);
                }}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}

        </ul>
      </section>
    </div>
  );
};


CitiesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired
};


export default CitiesList;
