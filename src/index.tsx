import React from 'react';
import ReactDOM from 'react-dom/client';
import {Main} from './main.component';
import datimApi from "@pepfar-react-lib/datim-api"
import {Provider} from "@dhis2/app-runtime";
// @ts-ignore
import {HeaderBar} from "@dhis2-ui/header-bar";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log(process.env)

datimApi.register(process.env.NODE_ENV,process.env.REACT_APP_BASE_URL);

root.render(
  <React.StrictMode>
      <Provider config={{baseUrl: datimApi.getBaseUrl(), apiVersion: 36}}>
            <span id='dhis2HeaderBar'>
                <HeaderBar/>
            </span>
            <Main/>
      </Provider>
  </React.StrictMode>
);

