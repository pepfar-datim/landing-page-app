import React from 'react'
import ReactDOM from 'react-dom/client'
import Dhis2HeaderBar from "./headerBar.component.tsx";

ReactDOM.createRoot(document.getElementById('dhis-header-bar')!).render(
  <React.StrictMode>
    <Dhis2HeaderBar/>
  </React.StrictMode>,
)
