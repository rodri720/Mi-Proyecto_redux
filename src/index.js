import React from 'react';
import ReactDOM from 'react-dom/client';
import MiRouter from './MiRouter';
import Store from './store/Store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={Store}>
    <MiRouter />
    </Provider>
  </React.StrictMode>
);


