import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { Helmet } from 'react-helmet';

import AppRouter from './routes';
import { APP_TITLE, APP_DESCRIPTION } from './utils/constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Helmet>
      <title>{APP_TITLE}</title>
      <meta name='description' content={APP_DESCRIPTION} />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
      />
      <meta name='viewport' content='initial-scale=1, width=device-width' />
    </Helmet>
    <AppRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
