import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './store/reducer';
import Operation from './store/operation';
import {Provider} from 'react-redux';
import App from './components/app/app';
import createAPI from './api';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';


const history = createBrowserHistory();

const api = createAPI((...args) => store.dispatch(...args), history);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Operation.loadAllOffers());


ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById(`root`)
);
