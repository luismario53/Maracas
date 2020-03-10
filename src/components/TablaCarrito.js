import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../assets/css/example.css'

class TablaCarrito extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    eliminarPieza = (idPieza, idAuto) => {
        this.props.eliminar(idPieza, idAuto);
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
                    {this.props.carrito}
                </tbody>
            </Table>
        );
    }
}

export default TablaCarrito;