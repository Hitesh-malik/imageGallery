import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import  store  from './Redux/store.js'
import ImageDetails from './Page/ImageDetails.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="ImageDetials/:id" element={<ImageDetails />} />
      </Routes>
    </Provider>
  </BrowserRouter>
)
