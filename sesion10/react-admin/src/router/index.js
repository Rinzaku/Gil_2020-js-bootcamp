import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from '../view/Home'
import Dashboard from '../view/Dashboard'
import Login from '../view/Login'
import Navigation from '../components/Navigation'
import PrivateRoute from './PrivateRoute'

const MainRouter = () => {
  return(
    <Router>
      <Route component={Navigation} />
      <section className="container">
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="/login" component={Login} />
      </section>
    </Router>
  )
}

export default MainRouter