import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class Header extends Component {

    render() {
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <p>Multimedia portfolio</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Dashboard</NavItem>
                        <NavDropdown eventKey={2} title="UI Project" id="ui-nav-dropdown">
                            <MenuItem eventKey={2.1}>Wireframes</MenuItem>
                            <MenuItem eventKey={2.2}>Mockups</MenuItem>
                            <MenuItem eventKey={2.3}>Technical proof</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={3} href="/~rzher1/Multimedia-Portfolio/video">Video Project</NavItem>
                        <NavItem eventKey={4}>Animation Project</NavItem>
                        <NavItem eventKey={5} style={{ marginRight: 15 }}>Interactive Application</NavItem>
                    </Nav>    
                </Navbar.Collapse>                            
            </Navbar>
        )
    }
}

export default Header;