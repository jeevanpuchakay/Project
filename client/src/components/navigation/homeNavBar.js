import React, { Component } from 'react'

//navBar from bootstrap

import { Navbar } from 'react-bootstrap'


//@material-ui

//1.Drawer 
import { Drawer } from '@material-ui/core'
//2.List
import { List, ListItem, ListItemText } from '@material-ui/core'


export default class HomeNavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" style={{ zIndex: 1, height: '4em' }}>
                    <Navbar.Brand href="/">
                        Admin
                    </Navbar.Brand>
                </Navbar>
                <Drawer open={1} style={{ zIndex: -2, width: '4em' }}>
                    <List style={{ marginTop: '4em' }}>
                        {
                            ["DashBoard", "Users", "Category", "Add vehicle"].map((item, index) => (
                                (<ListItem style={{fontSize:'1em'}}>
                                    <ListItemText>
                                        {item}
                                    </ListItemText>
                                </ListItem>)
                            ))
                        }
                    </List>
                </Drawer>
            </div>
        )
    }
}
