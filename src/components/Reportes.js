import React, { Component } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import firebase from 'firebase';
import '../assets/css/example.css'
import Fecha from './FechaVenta';
import swal from 'sweetalert';

import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import ReactLoading from 'react-loading';
import * as carData from "./blue-car.json";
import * as doneData from "./doneloading.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: carData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

class Reportes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            done: undefined
        };
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ loading: true });
            setTimeout(() => {
                this.setState({ done: true });
            }, 250);
        }, 250);
    }

    render() {
        return (
            <div>
                {!this.state.done ? (
                    <FadeIn>
                        <div className="mt-5 d-flex justify-content-center align-items-center">
                            {!this.state.loading ? (
                                <Lottie options={defaultOptions} height={400} width={400} />
                            ) : (
                                    <Lottie options={defaultOptions} height={400} width={400} />
                                )}
                        </div>
                    </FadeIn>
                ) : (
                        <div>
                            <Row className="mt-3 col-12 ml-1">
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
                            <Row className="mt-3 col-12 ml-1 properties-tabla-autos">
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
                    )}
            </div>
        );
    }
}

export default Reportes;