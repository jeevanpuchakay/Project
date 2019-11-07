import React, { Component } from 'react'

//@material-ui

import {Card} from 'react-bootstrap'

const Kard=(props)=>{
   // console.log(props);
        return (
            <div>
                <Card style={{width:'10rem',backgroundColor:'grey'}}>
                    <Card.Body>
                        <div style={{color:'white'}}>
                        <Card.Title>
                            {props.day}
                        </Card.Title>
                        <br />
                        <Card.Title>
                            Bikes :{props.count}
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


    export default Kard;