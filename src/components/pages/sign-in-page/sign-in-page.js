import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Header from '../../header/header';
import Operation from '../../../store/operation';


const SignInPage = ({city, submitAction}) => {

  let emailInput;
  let passwordInput;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitAction(emailInput.value, passwordInput.value);
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required
                  ref = { (el) => {
                    emailInput = el;
                  }}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required
                  ref = { (el) => {
                    passwordInput = el;
                  }}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={`/`} className="locations__item-link">
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};


SignInPage.propTypes = {
  city: PropTypes.string.isRequired,
  submitAction: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  city: store.city,
});

const mapDispatchToProps = (dispatch) => ({
  submitAction: (email, password) => {
    dispatch(Operation.authRequest(email, password));
  }
});

export {SignInPage};
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
