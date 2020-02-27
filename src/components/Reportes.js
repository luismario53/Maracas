import React, { Component } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import firebase from 'firebase';
import '../assets/css/example.css'
import Fecha from './FechaVenta';
import swal from 'sweetalert';

class Reportes extends Component {
    render() {
        return (
            <div>
                <Row className="mt-4 col-12 ml-1">
                    <Fecha />
                    <Col className="form-inline">
                        <Col>
                            <Button className="properties-button" variant="outline-secondary">Reestablecer</Button>
                        </Col>
                        <Col>
                            <Button className="properties-button" variant="info">Buscar</Button>
                        </Col>
                    </Col>
                </Row>
                <Row className="mt-4 col-12 ml-1 properties-tabla-autos">
                    <Table responsive striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Venta</th>
                                <th>Fecha</th>
                                <th>Empleado</th>
                                <th>Auto</th>
                                <th>Pieza</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Total </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#</td>
                                <td>25/02/2019</td>
                                <td>Juan Morales</td>
                                <td>Ford Focus 2008</td>
                                <td>Radiador</td>
                                <td>2</td>
                                <td>400</td>
                                <td>1200</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </div>
        );
    }
}

export default Reportes;