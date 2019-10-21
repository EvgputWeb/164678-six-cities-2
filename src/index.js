import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import places from './data/places.js';

ReactDOM.render(
    <App
      placesList={places}
    />,
    document.getElementById(`root`)
);
