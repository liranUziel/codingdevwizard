import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux';
import store from './utils/store.js'; // make sure the path to your store is correc

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode></Provider>,
)
