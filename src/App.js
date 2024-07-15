import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import "./App.css"
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './components/utils/Store'

const App = () => {
  const router = createBrowserRouter({
    
  })
  return (
    <div>
      <Provider store={store}>
      <Header/>
      <Body/>
      </Provider>
    </div>
  )
}

export default App