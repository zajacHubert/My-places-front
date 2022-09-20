import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { App } from './App';
import './index.scss';
import { apiSlice } from './features/api-places-slice';
import { Provider } from 'react-redux';
import { store } from './features';

const isDev = process.env.NODE_ENV === 'development';
const browser = <BrowserRouter>
  <ApiProvider api={apiSlice}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApiProvider>
</BrowserRouter>;
const hash = <HashRouter>
  <ApiProvider api={apiSlice}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApiProvider>
</HashRouter>;




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {isDev ? browser : hash}
    {/* <HashRouter>
      <App />
    </HashRouter> */}
  </>
);

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <>
//   </>
//   <BrowserRouter>
//     <ApiProvider api={apiSlice}>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </ApiProvider>
//   </BrowserRouter>
// );


