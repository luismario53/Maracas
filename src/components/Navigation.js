import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../assets/css/Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>El Árabe</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link> <NavLink className="nav-link" to="/" >Inicio</NavLink> </Nav.Link>
                    <Nav.Link> <NavLink className="nav-link" to="/autos">Autos</NavLink></Nav.Link>
                    <Nav.Link> <NavLink className="nav-link" to="/piezas">Piezas</NavLink></Nav.Link>
                    <Nav.Link> <NavLink className="nav-link" to="/ventas">Ventas</NavLink></Nav.Link>
                    <Nav.Link> <NavLink className="nav-link" to="/reportes">Reportes</NavLink></Nav.Link>
                </Nav>
            </Navbar>

        );
    }
}

export default Navigation;