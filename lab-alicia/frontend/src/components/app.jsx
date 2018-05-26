import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { categoryInflate } from '../actions/category-actions.js';
import MainPage from './mainPage.jsx';
// import './style.css';

import reducers from '../reducers/';
import middlewares from '../middleware/';

const store = createStore(reducers,
  applyMiddleware(
    middlewares.logger,
    middlewares.validator
  )
);

fetch('http://localhost:3000')
  .then(res => res.json())
  .then(json => {
    store.dispatch(categoryInflate(json));
  });

class App extends React.Component {
  render() {
    return (
      <main className="main-content">
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={MainPage} />
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}

export default App;