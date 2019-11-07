import React, { Component } from 'react'

import {Container,Row,Col} from 'react-bootstrap'

//Navbar
import HomeNavBar from './../navigation/homeNavBar'

//kard
import Kard from './../fragments/kard'

import './../../App.css'

import axios from 'axios';


import DashboardKard from './../fragments/dashboardKard'


export default class Dashboard extends Component {
    state={
        yesterday:0,
        week:0,
        month:0
    }
    componentDidMount(){
        axios.get('/DashBoard/Yesterday').then(res=>{
            this.setState({yesterday:res.data[0].count})
        })
        .catch(err=>console.log(err.response));
        //console.log(this.state.yesterday);
        axios.get('/DashBoard/ThisWeek').then(res=>{
            this.setState({week:res.data[0].count})
        })
        .catch(err=>console.log(err.response));
        axios.get('/DashBoard/ThisMonth').then(res=>{
            this.setState({month:res.data[0].count})
        })
        .catch(err=>console.log(err.response));
    }
    render() {
        return (
            <div>
                <HomeNavBar/>
                <div  style={{marginTop:'4.5rem',marginLeft:'10rem'}}>
                    <Container>
                    <Row>
                    <Col sm>
                    <Kard count={this.state.yesterday} day="Yesterday"/>
                    </Col>
                    <Col sm>
                    <Kard count={this.state.week} day="This weeek"/>
                    </Col>
                    <Col sm>
                    <Kard count={this.state.month} day="This Month"/>
                    </Col>
                    </Row>
                    </Container>
                </div>
                <div style={{marginLeft: '8.5rem',marginTop: '2rem',}}>
                    <h1 style={{marginLeft: '4.5rem',}}>
                        Previously on our Parking Lot
                    </h1>
                </div>
                <div style={{marginTop:'3rem'}}>
                    <DashboardKard/>
                </div>
            </div>
        )
    }
}
