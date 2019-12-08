import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {USER_SHAPE_OBJECT} from '../common-prop-types';
import {isObjectEmpty} from '../../utils';


const Header = ({userData}) => {
  const isUserDataEmpty = isObjectEmpty(userData);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {
                  isUserDataEmpty ? (
                    <Link to='/login' className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  ) : (
                    <Link to='/favorites' className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">{userData.email}</span>
                    </Link>
                  )
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


Header.propTypes = {
  userData: PropTypes.shape(USER_SHAPE_OBJECT),
};

const mapStateToProps = (store) => ({
  userData: store.userData
});


export {Header};
export default connect(mapStateToProps)(Header);

