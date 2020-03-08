import React, { Component } from 'react';
import firebase from 'firebase';
import { Row, Col, Accordion, Card } from "react-bootstrap";

import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
//import ReactLoading from 'react-loading';
import * as carData from "./blue-car.json";
//import * as doneData from "./doneloading.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: carData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
// const defaultOptions2 = {
//     loop: false,
//     autoplay: true,
//     animationData: doneData.default,
//     rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice"
//     }
// };

class Inicio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            done: undefined,
            ventas: []
        };
    }

    componentDidMount() {
        firebase.database().ref('Ventas/').on('value', snap => {
            var idVenta = '';
            var ventas = [];
            snap.forEach(snapshot => {
                idVenta = snapshot.key;
                var venta = snapshot.val();
                var autos = [];
                snapshot.forEach(snapchild => {
                    //Datos de la venta y autos
                    snapchild.forEach(snap2 => {
                        //Datos del auto y piezas
                        //Key de los autos
                        var auto = snap2.val();
                        var piezas = [];
                        snap2.forEach(snap3 => {
                            snap3.forEach(snap4 => {
                                //Datos de la pieza
                                piezas.push({
                                    idPieza: snap4.key,
                                    pieza: snap4.val()
                                })
                            });
                        });
                        autos.push({
                            idAuto: snap2.key,
                            nombre: auto.marca_modelo_anho,
                            piezas: piezas
                        })
                        this.setState({ autos });
                    });
                });
                ventas.push({
                    idVenta: idVenta,
                    fechaVenta: venta.fechaVenta,
                    empleado: venta.empleado,
                    total: venta.total,
                    autos: autos,
                });
                this.setState({ ventas });
            });
            setTimeout(() => {
                this.setState({ loading: true });
                setTimeout(() => {
                    this.setState({ done: true });
                }, 250);
            }, 250);
            console.log(ventas);
            //console.log(autos);
        });
    }

    render() {

        var { ventas } = this.state;
        var listaVentas = ventas.map(venta => {

            return <Card>
                <Accordion.Toggle as={Card.Header} eventKey={venta.idVenta}>
                    <Row>
                        <Col sm={3}><strong># </strong>{venta.idVenta}</Col>
                        <Col sm={3}><strong>Fecha: </strong>{venta.fechaVenta}</Col>
                        <Col sm={3}><strong>Empleado: </strong>{venta.empleado}</Col>
                        <Col sm={3}><strong>Total: $</strong>{venta.total}</Col>
                    </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={venta.idVenta}>
                    <Card.Body>
                        <Row>
                            <Col sm={3}><strong>Auto</strong></Col>
                            <Col sm={3}><strong>Pieza</strong></Col>
                            <Col sm={2}><strong>Cantidad</strong></Col>
                            <Col sm={2}><strong>Precio Unitario</strong></Col>
                            <Col sm={2}><strong>Precio</strong></Col>
                        </Row>
                        {
                            venta.autos.map(auto => {
                                return auto.piezas.map(pieza => {
                                    return <Row className="mt-3">
                                        <Col sm={3}>{auto.nombre}</Col>
                                        <Col sm={3}>{pieza.pieza.nombre}</Col>
                                        <Col sm={2}>{pieza.pieza.cantidad}</Col>
                                        <Col sm={2}>{pieza.pieza.precio}</Col>
                                        <Col sm={2}>{pieza.pieza.cantidad * pieza.pieza.precio}</Col>
                                    </Row>
                                })
                            })
                        }
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        });

        return (
            <div>
                {!this.state.done ? (
                    <FadeIn>
                        <div className="d-flex justify-content-center align-items-center">
                            {!this.state.loading ? (
                                <Lottie options={defaultOptions} height={400} width={400} />
                            ) : (
                                    <Lottie options={defaultOptions} height={400} width={400} />
                                )}
                        </div>
                    </FadeIn>
                ) : (
                        <div className="mt-3 properties-tabla-reportes">
                            <Accordion defaultActiveKey="0">
                                {listaVentas}
                            </Accordion>
                        </div>
                    )}
            </div>
           
        );
    }
}

export default Inicio;