import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';


const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/login' component={SignInPage} />
    </Switch>
  );
};


export default App;
