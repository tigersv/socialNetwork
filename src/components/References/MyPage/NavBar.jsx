import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Image, Dropdown} from 'react-bootstrap'
import userImg from '../../../assets/images/user.png'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="info" variant="light">
            <Container>
                <Navbar.Brand href="#home">Social Network</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/*TODO Search*/}

                    </Nav>
                    <Nav>
                        <Dropdown>
                            <Dropdown.Toggle variant="info" id="dropdown-basic">
                                <Image width="40" src={userImg} roundedCircle />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Some Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                <NavDropdown.Divider />
                                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;