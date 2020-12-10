import { Route , Switch } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import UsersList from './pages/UsersList'
import Login from './pages/Login';

class AppRoute extends Component{
    render(){
        return (
            <Switch>
                <Route exact path='/' component={UsersList} />
                <Route exact path='/login' component={Login} />
            </Switch>
        )
    }
}

export default AppRoute;
