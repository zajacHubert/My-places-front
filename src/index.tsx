import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { App } from './App';
import './index.scss';
import { apiSlice } from './features/api-places-slice';
import { Provider } from 'react-redux';
import { store } from './features';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ApiProvider api={apiSlice}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiProvider>
  </BrowserRouter>
);


