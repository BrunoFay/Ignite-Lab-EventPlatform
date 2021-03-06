import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { client } from './lib/apollo'
import './style/global.css'
import { BrowserRouter } from 'react-router-dom'
import SidebarContextProvider from './context/SidebarContextProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <SidebarContextProvider>
          <App />
        </SidebarContextProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
)
