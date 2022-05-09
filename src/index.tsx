import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import datimApi,{getBaseUrl} from "@pepfar-react-lib/datim-api"
import {Provider} from "@dhis2/app-runtime";
import {HeaderBar} from '@dhis2/ui-widgets'

datimApi.registerProd(getBaseUrl())

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider config={{baseUrl: getBaseUrl(), apiVersion: 36}}>
            <span id='dhis2HeaderBar'>
                <HeaderBar/>
            </span>
    <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
