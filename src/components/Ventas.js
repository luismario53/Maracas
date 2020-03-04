import React, { Component } from 'react';
import { Form, Card, Col, Row, Table, ListGroup, InputGroup, FormControl, Button, Tabs, Tab } from 'react-bootstrap';
import '../assets/css/example.css'
import firebase from 'firebase';
import swal from 'sweetalert'
import SimpleReactValidator from 'simple-react-validator';
import TablaCarrito from './TablaCarrito';
import TablaInventario from './TablaInventario';

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

class Ventas extends Component {

    nombrePiezaRef = React.createRef();
    cantidadPiezaRef = React.createRef();
    precioPiezaRef = React.createRef();
    passwordRef = React.createRef();

    constructor(props) {
        super(props);
        this.validatorPassword = new SimpleReactValidator({
            messages: {
                default: "Falta la contraseña"
            }
        });
        this.validator = new SimpleReactValidator({
            messages: {
                default: 'Falta información'
            },
        });
        this.state = {
            autos: [],
            autosBusqueda: [],
            piezaNueva: {},
            carrito: [],
            currentAuto: {},
            password: '',
            done: undefined
        };
    }

    componentDidMount() {
        firebase.database().ref('Autos/').on('value', snap => {
            var autos = [];
            var carrito = [];
            snap.forEach(snapshot => {
                autos.push({
                    id: snapshot.key,
                    auto: snapshot.val()
                });
                var autoFullName = autos[autos.length - 1].auto.marca_modelo_anho;
                this.setState({ autos })
                this.setState({ autosBusqueda: autos })
                firebase.database().ref('/Autos/' + snapshot.key + "/Piezas/Carrito/").on('value', snapChild => {
                    snapChild.forEach(snapChildChild => {
                        carrito.push({
                            id: snapChildChild.key,
                            idAuto: snapshot.key,
                            nombreAuto: autoFullName,
                            pieza: snapChildChild.val()
                        });
                        this.setState({ carrito })
                    });
                });
            });
            setTimeout(() => {
                this.setState({ loading: true });
                setTimeout(() => {
                    this.setState({ done: true });
                }, 250);
            }, 250);
        });
    }

    passwordHandle = () => {
        this.setState({
            password: this.passwordRef.current.value
        });
    }

    changeState = () => {
        this.setState({
            piezaNueva: {
                nombre: this.nombrePiezaRef.current.value,
                cantidad: this.cantidadPiezaRef.current.value,
                precio: this.precioPiezaRef.current.value
            }
        });
    }

    recibirFormulario = (e) => {
        e.preventDefault();
        var piezaNueva = this.state.piezaNueva;
        if (this.validator.allValid()) {
            firebase.database().ref('Autos/' + this.state.currentAuto.id + "/Piezas/Carrito/").push().set(piezaNueva);
            swal(
                'Agregado Exitosamente',
                'Pieza agregada exitosamente',
                'success'
            );
            this.limpiarCampos();
        } else {
            this.forceUpdate();
            this.validator.showMessages();
        }
    }

    limpiarCampos = () => {
        document.getElementById('formPiezas').reset();
    }

    seleccionarAuto = (autoId, autoFullName) => {
        this.setState({
            currentAuto: {
                id: autoId,
                autoFullName: autoFullName
            }
        });
    }

    realizarVenta = (e) => {
        e.preventDefault();
        const { carrito } = this.state;
        if (this.validatorPassword.allValid()) {
            //firebase.database().ref('Autos/' + this.state.currentAuto.id + "/Piezas/").push().set(piezaNueva);
            swal(
                'Venta Exitosa',
                'Venta realizada exitosamente',
                'success'
            );
            //this.limpiarCampos();
        } else {
            this.forceUpdate();
            this.validatorPassword.showMessages();
        }
    }

    buscarAuto = (e) => {
        var { autos } = this.state;
        var result = autos.filter(auto => auto.auto.marca.toLowerCase().startsWith(e.target.value.toLowerCase()) || auto.auto.modelo.toLowerCase().startsWith(e.target.value.toLowerCase()));
        this.setState({ autosBusqueda: result })
    }

    eliminarPieza = (idPieza, idAuto) => {
        const { carrito } = this.state;
        var index = carrito.findIndex(x => x.id === idPieza);
        carrito.splice(index, 1);
        this.setState({ carrito })
        firebase.database().ref('Autos/' + idAuto + '/Piezas/Carrito/' + idPieza).remove();
    }

    render() {

        const { autosBusqueda } = this.state;
        const { carrito } = this.state;
        const listaAutos = autosBusqueda.map(auto => {
            return <ListGroup.Item action onClick={() => this.seleccionarAuto(auto.id, auto.auto.marca_modelo_anho)} key={auto.id}>{auto.auto.marca_modelo_anho}</ListGroup.Item>
        });
        const listaCarrito = carrito.map(pieza => {
            return <tr key={pieza.id}>
                <td>{pieza.nombreAuto}</td>
                <td>{pieza.pieza.nombre}</td>
                <td>{pieza.pieza.cantidad}</td>
                <td>{pieza.pieza.precio}</td>
                <td>{pieza.pieza.cantidad * pieza.pieza.precio}</td>
                <td><Button variant="outline-danger" onClick={() => this.eliminarPieza(pieza.id, pieza.idAuto)}>Eliminar</Button></td>
            </tr>
        });
        const totalPagar = carrito.reduce((total, arr) => {
            return parseInt(total) + (parseInt(arr.pieza.precio) * parseInt(arr.pieza.cantidad));
        }, 0);
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
                                <Col xs={12} md={4}>
                                    <InputGroup className="mb-3">
                                        <FormControl placeholder="Buscar Auto" onKeyUp={this.buscarAuto}></FormControl>
                                    </InputGroup>
                                    <Card>
                                        <ListGroup className="properties-autos" variant="flush">
                                            {listaAutos}
                                        </ListGroup>
                                    </Card>
                                </Col>
                                <Col xs={6} md={8} className="col-8 properties-autos">
                                    {/* <Table responsive striped bordered hover size="sm">
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
                                            {listaCarrito}
                                        </tbody>
                                    </Table> */}
                                    <Tabs defaultActiveKey="carrito">
                                        <Tab eventKey="inventario" title="Inventario">
                                            <TablaInventario />
                                        </Tab>
                                        <Tab eventKey="carrito" title="Carrito">
                                            <TablaCarrito carrito={this.state.carrito} eliminar={this.eliminarPieza} />
                                        </Tab>
                                    </Tabs>
                                </Col>
                            </Row>

                            <Row className="mt-3 col-12 ml-1">
                                <Col xs={12} md={4}>
                                    <Form onSubmit={this.recibirFormulario} id="formPiezas">
                                        <Form.Group>
                                            <Form.Label name="nombreAuto">
                                                <strong>
                                                    {this.state.currentAuto !== undefined &&
                                                        this.state.currentAuto.autoFullName
                                                    }
                                                </strong>
                                            </Form.Label>
                                            {this.validator.message('nombreAuto', this.state.currentAuto.autoFullName, 'required|alpha_num_space')}
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Nombre de la pieza" name="nombre" ref={this.nombrePiezaRef} onChange={this.changeState}></Form.Control>
                                            {this.validator.message('nombre', this.state.piezaNueva.nombre, 'required|alpha_num_space')}
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control type="number" placeholder="Cantidad" name="cantidad" ref={this.cantidadPiezaRef} onChange={this.changeState}></Form.Control>
                                            {this.validator.message('cantidad', this.state.piezaNueva.cantidad, 'required|integer')}
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control type="number" placeholder="Precio" name="precio" ref={this.precioPiezaRef} onChange={this.changeState}></Form.Control>
                                            {this.validator.message('precio', this.state.piezaNueva.precio, 'required|integer')}
                                        </Form.Group>
                                        <Form.Row>
                                            <Form.Group as={Col} className="mt-1">
                                                <Button variant="secondary" onClick={this.limpiarCampos}>Limpiar Campos</Button>
                                            </Form.Group>
                                            <Form.Group as={Col} className="mt-1">
                                                <Button type="submit" variant="info">Agregar Pieza</Button>
                                            </Form.Group>
                                        </Form.Row>
                                    </Form>
                                </Col>
                                <Col xs={6} md={8} className="col-8">
                                    <Form onSubmit={this.realizarVenta} className="properties-pagar">
                                        <Form.Group>
                                            <Form.Label>Total</Form.Label>
                                            <Form.Control as="label" type="number" placeholder="Total" name="total" ref={this.totalRef}>{totalPagar}</Form.Control>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control type="password" placeholder="Contraseña" name="password" ref={this.passwordRef} onChange={this.passwordHandle}></Form.Control>
                                            {this.validatorPassword.message('password', this.state.password, 'required')}
                                        </Form.Group>
                                        <Form.Group>
                                            <Button type="submit" className="properties-button" variant="info">Pagar</Button>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    )}
            </div>
        );
    }
}

export default Ventas;