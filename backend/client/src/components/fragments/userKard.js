import React from 'react'


import { Container, Row, Col } from 'react-bootstrap'


//import  Icon from "@material-ui/core/Icon";

import { Card } from 'react-bootstrap'
import axios from 'axios';

const pc="https://icon-library.net/images/windows-8-user-icon/windows-8-user-icon-10.jpg";

var timeLines=[];


// This is one way of doing it.
function getUsers(){
    // get all users on page load 
    axios
    .get(`/timeLine/`)
    .then(result=>
        {
            timeLines=result.data;
        });
}

function getUser(props){
    // return specific user based on vehicleId
    console.log(timeLines);
    // find function returns first element of the array matching condition
    let user = timeLines.find((user) => user.vehicleId === props.vehicleId);
    console.log(user);
    return user;
}

function buttonHandler (props){
    let user=getUser(props)
    //console.log(user);

}

const UserKard =(props)=> {
  const data=props.packet;
  getUsers();

        return (
            <div>
                <Card className="shadow p-3 mb-5 bg-white rounded" style={{ marginRight: '5rem', marginLeft: '15rem', marginTop: '1rem' }}>
                    <Card.Body>
                        <Container>
                            <Row>
                            <Col sm>
                            <img src={pc} alt="user" style={{width:'8rem',height:'8rem',borderRadius:'4rem'}}/>
                            </Col>
                            <Col sm>
                            <Row>{data.userName}</Row>
                            <Row>{data.vehicleType}</Row>
                            <Row>{data.inTime}</Row>
                            </Col>
                            <Col sm>
                            <button onClick={()=>buttonHandler(data)}>
                                EXIT
                            </button>
                            </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        )
    }


export default UserKard;

/*

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


                        */