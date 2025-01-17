import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Store Provider
import { StoreProvider } from 'Store/store';
import { initialState, reducer } from 'Store/reducer';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={reducer}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
