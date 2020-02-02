import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Autos from './components/Autos';
import Inicio from './components/Inicio';


class Navigation extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">El Árabe</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link to="/">Inicio</Nav.Link>
                            <Nav.Link to="/autos">Autos</Nav.Link>
                            <Nav.Link to="/ventas">Ventas</Nav.Link>
                            <Nav.Link to="/reportes">Reportes</Nav.Link>
                        </Nav>
                    </Navbar>

                    <Switch>
                        <Route path="/">
                            <Inicio/>
                        </Route>
                        <Route path="/autos">
                            <Autos/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Navigation;