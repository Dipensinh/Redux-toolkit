import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Provider} from "react-redux"
import Store from "./Store/index.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={Store}>
  <App/>
</Provider>
)
