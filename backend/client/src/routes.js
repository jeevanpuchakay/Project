import React, { Component } from 'react'
import Home from './components/pages/home'
import {Route} from 'react-router-dom'
import Dashboard from './components/pages/dashboard'
import ParkingLot from './components/pages/ParkingLot'
import AddVehicle from './components/pages/AddVehicle'

export default class routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/Dashboard" component={Dashboard}/>
                <Route path="/ParkingLot" component={ParkingLot}/>
                <Route path="/AddVehicle" component={AddVehicle}/>
            </div>
        )
    }
}
