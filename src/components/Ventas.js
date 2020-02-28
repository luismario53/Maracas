import React, { Component } from 'react';
import { Form, Card, Col, Row, Table, ListGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import '../assets/css/example.css'
import firebase from 'firebase';
import swal from 'sweetalert'
import SimpleReactValidator from 'simple-react-validator';

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
            piezaNueva: {},
            carrito: [],
            currentAuto: {},
            password: ''
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
                firebase.database().ref('/Autos/' + snapshot.key + "/Piezas/").on('value', snapChild => {
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
            firebase.database().ref('Autos/' + this.state.currentAuto.id + "/Piezas/").push().set(piezaNueva);
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

    //Pendiente
    buscarAuto = (e) => {
        console.log(e.target.value);
        var autos = this.state.autos;
        var result = autos.filter(auto => auto.auto.marca_modelo_anho.startsWith(e.target.value));
        this.setState({ autos: result })
    }

    eliminarPieza = (idPieza, idAuto) => {
        const { carrito } = this.state;
        var index = carrito.findIndex(x => x.id === idPieza);
        carrito.splice(index, 1);
        this.setState({ carrito })
        firebase.database().ref('Autos/' + idAuto + '/Piezas/' + idPieza).remove();
    }

    render() {

        const { autos } = this.state;
        const { carrito } = this.state;
        const listaAutos = autos.map(auto => {
            return <ListGroup.Item action onClick={() => this.seleccionarAuto(auto.id, auto.auto.marca_modelo_anho)} key={auto.id}>{auto.auto.marca_modelo_anho}</ListGroup.Item>
        });
        const listaCarrito = carrito.map(pieza => {
            return <tr key={pieza.id}>
                <td>{pieza.nombreAuto}</td>
                <td>{pieza.pieza.nombre}</td>
                <td>{pieza.pieza.cantidad}</td>
                <td>{pieza.pieza.precio}</td>
                <td><Button variant="outline-danger" onClick={() => this.eliminarPieza(pieza.id, pieza.idAuto)}>Eliminar</Button></td>
            </tr>
        });
        const totalPagar = carrito.reduce((total, arr) => {
            return parseInt(total) + parseInt(arr.pieza.precio);
        }, 0);
        return (
            <div>
                <Row className="mt-4 col-12 ml-1 estilo">
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
                        <Table responsive striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Auto</th>
                                    <th>Pieza</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaCarrito}
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row className="mt-4 col-12 ml-1">
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
            </div >
        );
    }
}

export default Ventas;