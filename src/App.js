import React, { Component } from 'react'
import {HashRouter as Router, Route, NavLink,Switch} from 'react-router-dom'
import {Home, About, Introduce} from './views'

class App extends Component {
  render () {
    return (
        <Router>
           <Switch>
            <Route component={About} path="/about"/>
            <Route component={Introduce} path="/introduce"/>
            <Route component={Home} path="/"/>
           </Switch>
        </Router>
    )
  }
}

export default App