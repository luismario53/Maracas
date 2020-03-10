import React, { Component } from 'react';
import { Form, Card, Col, Row, Table, ListGroup, InputGroup, FormControl, Button, Tabs, Tab } from 'react-bootstrap';
import '../assets/css/example.css'
import firebase from 'firebase';
import swal from 'sweetalert'
import SimpleReactValidator from 'simple-react-validator';

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

class TablaInventario extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        // const { piezasBusqueda } = this.state;
        // const listaPiezas = piezasBusqueda.map(pieza => {
        //     if (this.state.currentAuto.id === pieza.idAuto) {
        //         return <tr key={pieza.id}>
        //             <td>{pieza.nombreAuto}</td>
        //             <td>{pieza.pieza.nombre}</td>
        //             <td>{pieza.pieza.cantidad}</td>
        //             <td>{pieza.pieza.precio}</td>
        //             <td>{pieza.pieza.cantidad * pieza.pieza.precio}</td>
        //             <td><Button variant="outline-danger" onClick={() => this.eliminarPieza(pieza.id, pieza.idAuto)}>Eliminar</Button></td>
        //         </tr>
        //     }
        // });

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