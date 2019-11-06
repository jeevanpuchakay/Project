import React, { Component } from 'react'
import Home from './components/pages/home'
import {Route} from 'react-router-dom'
import Dashboard from './components/pages/dashboard'
import ParkingLot from './components/pages/ParkingLot'

export default class routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/Dashboard" component={Dashboard}/>
                <Route path="/ParkingLot" component={ParkingLot}/>

            </div>
        )
    }
}
