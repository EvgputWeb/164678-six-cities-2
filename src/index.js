import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

ReactDOM.render(
    <App
      placesList={[
        `Beautiful & luxurious apartment at great location`,
        `Wood and stone place`,
        `Canal View Prinsengracht`,
        `Nice, cozy, warm big bed apartment`
      ]}
    />,
    document.getElementById(`root`)
);
