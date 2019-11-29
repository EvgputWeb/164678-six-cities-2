import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferDetailsPage from '../pages/offer-details-page/offer-details-page';


const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/login' component={SignInPage} />
      <Route exact path='/favorites' component={FavoritesPage} />
      <Route exact path='/offer/:id' component={OfferDetailsPage} />
    </Switch>
  );
};


export default App;
