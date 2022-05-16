import React from 'react';
import ReactDOM from 'react-dom/client';
import {Main} from './components/main.component';
import datimApi from "@pepfar-react-lib/datim-api"
import "./index.css";
import {DatimWrapper} from "./components/datimWrapper.component";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

datimApi.register(process.env.NODE_ENV,process.env.REACT_APP_BASE_URL);

root.render(<React.StrictMode>
    <DatimWrapper>
        <Main/>
    </DatimWrapper>
</React.StrictMode>);

