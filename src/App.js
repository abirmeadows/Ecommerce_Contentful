import React, { Component } from 'react'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'

import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/rooms/" component={Rooms} exact />
          <Route path="/rooms/:slug" component={SingleRoom} exact />
          <Route component={Error} />
        </Switch>
      </>
    )
  }
}

export default App
