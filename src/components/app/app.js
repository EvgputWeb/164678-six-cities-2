import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferDetailsPage from '../pages/offer-details-page/offer-details-page';
import Page404 from '../pages/page-404/page-404';
import withAuth from '../../hocs/with-auth';


const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/login' component={SignInPage} />
      <Route exact path='/offer/:id' component={OfferDetailsPage} />
      <Route exact path='/favorites' component={withAuth(FavoritesPage)} />
      <Route component={Page404} />
    </Switch>
  );
};

export default App;
