import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../assets/css/example.css'

class TablaInventario extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Auto</th>
                        <th>Pieza</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Precio</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.piezas}
                </tbody>
            </Table>
        );
    }
}

export default TablaInventario;