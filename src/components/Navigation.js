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
                    <NavLink className="nav-link" to="/" >Inicio</NavLink> 
                    <NavLink className="nav-link" to="/autos">Autos</NavLink>
                    <NavLink className="nav-link" to="/ventas">Ventas</NavLink>
                    <NavLink className="nav-link" to="/reportes">Reportes</NavLink>
                </Nav>
            </Navbar>

        );
    }
}

export default Navigation;
