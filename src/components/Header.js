import React, { Component } from 'react';
import { Navbar, Nav, button, Form, FormControl, NavLink} from 'react-bootstrap';

class Header extends Component {
    render(){
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">El Árabe</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="">Inicio</Nav.Link>
                    <Nav.Link href="">Autos</Nav.Link>
                    <Nav.Link href="">Ventas</Nav.Link>
                    <Nav.Link href="">Reportes</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;