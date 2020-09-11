import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './Navigation'
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Books from "../pages/Books";

import { connect } from 'react-redux'

function Base({loggedin}){
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" children="Root" />
        <Route path="/login" >
        {
          !loggedin ? <Login /> :  <Redirect to="/home" />
        }
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/books" component={Books} />
      </Switch>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => (
  { loggedin: state.user.loggedin }
)



const connecting = connect(mapStateToProps)
const ConnectToBase = connecting(Base)

export default ConnectToBase
