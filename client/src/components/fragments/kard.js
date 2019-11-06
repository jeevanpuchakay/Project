import React, { Component } from 'react'

//@material-ui

import {Card} from 'react-bootstrap'

export default class Kard extends Component {
    render() {
        return (
            <div>
                <Card style={{width:'10rem',backgroundColor:'grey'}}>
                    <Card.Body>
                        <div style={{color:'white'}}>
                        <Card.Title>
                            Yesterday
                        </Card.Title>
                        <br />
                        <Card.Title>
                            Bikes count
                        </Card.Title>
                        <Card.Title>
                            Cars count
                        </Card.Title>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
