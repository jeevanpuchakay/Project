import React, { Component } from 'react'

import {Container,Row,Col} from 'react-bootstrap'

//Navbar
import HomeNavBar from './../navigation/homeNavBar'

//kard
import Kard from './../fragments/kard'


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <HomeNavBar/>
                <div style={{marginTop:'4.5rem',marginLeft:'10rem'}}>
                    <Container>
                    <Row>
                    <Col sm>
                    <Kard/>
                    </Col>
                    <Col sm>
                    <Kard/>
                    </Col>
                    </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
