import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { blogsApi } from './services/blogsApi'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={blogsApi}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>,
)
