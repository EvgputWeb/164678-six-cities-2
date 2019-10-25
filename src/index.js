import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.js';
import OFFERS from './mocks/offers.js';

ReactDOM.render(
    <App
      placesList={OFFERS}
    />,
    document.getElementById(`root`)
);
