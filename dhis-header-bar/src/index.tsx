import React from 'react'
import ReactDOM from 'react-dom'
import Dhis2HeaderBar from "./headerBar.component.tsx";

ReactDOM.render(
  <React.StrictMode>
    <Dhis2HeaderBar/>
  </React.StrictMode>,
  document.getElementById('dhis-header-bar')!
)
