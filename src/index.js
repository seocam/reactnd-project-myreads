import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const app_code = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(app_code, document.getElementById('root'))
