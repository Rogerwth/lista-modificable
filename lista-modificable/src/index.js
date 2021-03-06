import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { Provider } from 'react-redux'
import rootReducer from './app/state/store'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root')
const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()]
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
