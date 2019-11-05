import React, { Component } from 'react'
import Home from './components/pages/home'
import {Route} from 'react-router-dom'

export default class routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
            </div>
        )
    }
}
