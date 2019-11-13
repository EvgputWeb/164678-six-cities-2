import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';


const CitiesList = ({list, activeItem, onActivateItem, cityClickAction}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {list.map((city) => (
            <li key={city} className="locations__item">
              <a href="#"
                className={`locations__item-link tabs__item` + ((city === activeItem) && (` tabs__item--active`)) }
                onClick={(e)=>{
                  e.preventDefault();
                  onActivateItem(city);
                  cityClickAction(city);
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
  activeItem: PropTypes.string.isRequired,
  onActivateItem: PropTypes.func.isRequired,
  cityClickAction: PropTypes.func.isRequired
};


// привязываем Actions
const mapDispatchToProps = (dispatch) => ({
  cityClickAction: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
});


export {CitiesList};
export default connect(null, mapDispatchToProps)(CitiesList);

