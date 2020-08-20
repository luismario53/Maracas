import React, { Component } from 'react';
import { Form, Button, Col, Row, Table } from 'react-bootstrap';
import firebase from 'firebase';
import '../assets/css/example.css'
import SimpleReactValidator from 'simple-react-validator';
import Fecha from './Fecha';
import swal from 'sweetalert';
import ModalAuto from './ModalEditarAuto';
//
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import * as carData from "./blue-car.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: carData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

class Autos extends Component {

    marcaRef = React.createRef();
    modeloRef = React.createRef();
    anhoRef = React.createRef();
    cilindrosRef = React.createRef();
    lugarCompraRef = React.createRef();
    precioCompraRef = React.createRef();
    gasUsadaRef = React.createRef();
    precioExpRef = React.createRef();
    precioModRef = React.createRef();
    fechaCompraRef = React.createRef();

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({
            messages: {
                default: 'Falta información'
            },
        });
        this.state = {
            autos: [],
            autoNuevo: {},
            fecha: '',
            done: undefined
        };

    }

    fechaCompra = (fechaCompra) => {

        var dia = fechaCompra.getDate();
        var mes = fechaCompra.getMonth() + 1;
        var anho = fechaCompra.getFullYear();
        var fecha = dia + "/" + mes + "/" + anho
        this.setState({
            fecha: fecha
        })
    }

    seleccionarAuto = (auto) => {

    }

    modificarAuto = (e) => {
        e.preventDefault();
    }

    changeState = () => {
        this.setState({
            autoNuevo: {
                marca: this.marcaRef.current.value,
                modelo: this.modeloRef.current.value,
                anho: this.anhoRef.current.value,
                marca_modelo_anho: this.marcaRef.current.value + " " + this.modeloRef.current.value + " " + this.anhoRef.current.value,
                cilindros: this.cilindrosRef.current.value,
                lugarCompra: this.lugarCompraRef.current.value,
                precioCompra: this.precioCompraRef.current.value,
                gasUsada: this.gasUsadaRef.current.value,
                precioExp: this.precioExpRef.current.value,
                precioMod: this.precioModRef.current.value,
                fechaCompra: this.state.fecha,
            }
        });
    }

    camposNumericos = (e) => {
        if (e.which !== 8 && e.which !== 0 && e.which < 48 || e.which > 57) {
            e.preventDefault();
        }
    }

    recibirFormulario = (e) => {
        e.preventDefault();
        var autoNuevo = this.state.autoNuevo;
        if (this.validator.allValid()) {
            firebase.database().ref('Autos/').push().set(autoNuevo);
            swal(
                'Agregado Exitosamente',
                'El auto ha sido agregado exitosamente',
                'success'
            );
            this.limpiarCampos();
        } else {
            this.forceUpdate();
            this.validator.showMessages();
        }
    }

    limpiarCampos = () => {
        document.getElementById('formAutos').reset();
    }

    componentDidMount() {
        firebase.database().ref('Autos/').on('value', snap => {
            var autos = [];
            snap.forEach(snapshot => {
                autos.push({
                    id: snapshot.key,
                    auto: snapshot.val()
                });
                this.setState({ autos });
            });
            setTimeout(() => {
                this.setState({ loading: true });
                setTimeout(() => {
                    this.setState({ done: true });
                }, 300);
            }, 300);
        });
    }

    render() {
        const { autos } = this.state;
        const listaAutos = autos.map(auto => {
            return (
                <tr key={auto.id}>
                    <td>{auto.auto.marca}</td>
                    <td>{auto.auto.modelo}</td>
                    <td>{auto.auto.anho}</td>
                    <td>{auto.auto.cilindros}</td>
                    <td>{auto.auto.lugarCompra}</td>
                    <td>{auto.auto.fechaCompra}</td>
                    <td>{auto.auto.precioCompra}</td>
                    <td>{auto.auto.gasUsada}</td>
                    <td>{auto.auto.precioExp}</td>
                    <td>{auto.auto.precioMod}</td>
                </tr>
            );
        });

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
                        <Row className="mt-3 col-12 ml-1">
                            <Col xs={12} md={4}>
                                <Form onSubmit={this.recibirFormulario} id="formAutos">
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Marca" name="marca" ref={this.marcaRef} onChange={this.changeState}></Form.Control>
                                        {this.validator.message('marca', this.state.autoNuevo.marca, 'required|alpha_num_space')}
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Modelo" name="modelo" ref={this.modeloRef} onChange={this.changeState}></Form.Control>
                                        {this.validator.message('modelo', this.state.autoNuevo.modelo, 'required|alpha_num_space')}
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="number" placeholder="Año" name="anho" ref={this.anhoRef} onChange={this.changeState} onKeyPress={this.camposNumericos}></Form.Control>
                                        {this.validator.message('anho', this.state.autoNuevo.anho, 'required|integer')}
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="number" placeholder="Cilindros" name="cilindros" ref={this.cilindrosRef} onChange={this.changeState} onKeyPress={this.camposNumericos}></Form.Control>
                                        {this.validator.message('cilindros', this.state.autoNuevo.cilindros, 'required|integer')}
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Lugar de compra" name="lugarCompra" ref={this.lugarCompraRef} onChange={this.changeState}></Form.Control>
                                        {this.validator.message('lugarCompra', this.state.autoNuevo.lugarCompra, 'required|alpha_num_space')}
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Control type="number" placeholder="Precio" name="precioCompra" ref={this.precioCompraRef} onChange={this.changeState} onKeyPress={this.camposNumericos}></Form.Control>
                                            {this.validator.message('precioCompra', this.state.autoNuevo.precioCompra, 'required|integer')}
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Control type="number" placeholder="Gasolina" name="gasUsada" ref={this.gasUsadaRef} onChange={this.changeState} onKeyPress={this.camposNumericos}></Form.Control>
                                            {this.validator.message('gasUsada', this.state.autoNuevo.gasUsada, 'required|integer')}
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Fecha
                                                obtenerFecha={this.fechaCompra}
                                            />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Control type="number" placeholder="Precio Exportada" name="precioExp" ref={this.precioExpRef} onChange={this.changeState} onKeyPress={this.camposNumericos}></Form.Control>
                                            {this.validator.message('precioExp', this.state.autoNuevo.precioExp, 'required|integer')}
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Control type="number" placeholder="Precio Modulada" name="precioMod" ref={this.precioModRef} onChange={this.changeState} onKeyPress={this.camposNumericos}></Form.Control>
                                            {this.validator.message('precioMod', this.state.autoNuevo.precioMod, 'required|integer')}
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} className="mt-2">
                                            <Button variant="secondary" onClick={this.limpiarCampos}>Limpiar</Button>
                                        </Form.Group>
                                        <Form.Group as={Col} className="mt-2">
                                            <Button type="submit" variant="info">Registrar</Button>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </Col>
                            <Col xs={6} md={8} className="col-8 properties-tabla-autos">
                                <Table responsive striped bordered hover size="sm" className="tabla-mouse">
                                    <thead>
                                        <tr>
                                            <th>Marca</th>
                                            <th>Model</th>
                                            <th>Año</th>
                                            <th>Cilindros</th>
                                            <th>Lugar Compra</th>
                                            <th>Fecha Compra</th>
                                            <th>Precio</th>
                                            <th>Gasolina Usada</th>
                                            <th>Precio Exportada</th>
                                            <th>Precio Modulada</th>
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyId">
                                        {listaAutos}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    )}
            </div>
        );
    }
}

export default Autos;