import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware, compose} from 'redux';
import rootReducer from './component/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer,compose(
  applyMiddleware(
    thunk
  )
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


