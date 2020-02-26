import React, { Component } from 'react';
import { Form, Button, Col, Row, Table } from 'react-bootstrap';
import firebase from 'firebase';
import '../assets/css/example.css'
import SimpleReactValidator from 'simple-react-validator';
import Fecha from './Fecha';
import swal from 'sweetalert';

class Autos extends Component {

    marcaRef = React.createRef();
    modeloRef = React.createRef();
    anhoRef = React.createRef();
    cilindrosRef = React.createRef();
    lugarCompraRef = React.createRef();
    precioCompraRef = React.createRef();
    gasUsadaRef = React.createRef();
    precioExpModRef = React.createRef();
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
            fecha: ''
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
                precioExpMod: this.precioExpModRef.current.value,
                fechaCompra: this.state.fecha
            }
        });
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
        var { autos } = this.state;
        firebase.database().ref('Autos/').on('value', snap => {
            snap.forEach(snapshot => {
                autos.push({
                    id: snapshot.key,
                    auto: snapshot.val()
                });
                this.setState({ autos });
            });
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
                    <td>{auto.auto.precioAuto}</td>
                    <td>{auto.auto.gas}</td>
                    <td>{auto.auto.info}</td>
                </tr>
            );
        });

        return (
            <div>
                <Row className="mt-4 col-12 ml-1">
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
                                <Form.Control type="number" placeholder="Año" name="anho" ref={this.anhoRef} onChange={this.changeState}></Form.Control>
                                {this.validator.message('anho', this.state.autoNuevo.anho, 'required|integer')}
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="number" placeholder="Cilindros" name="cilindros" ref={this.cilindrosRef} onChange={this.changeState}></Form.Control>
                                {this.validator.message('cilindros', this.state.autoNuevo.cilindros, 'required|integer')}
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Lugar de compra" name="lugarCompra" ref={this.lugarCompraRef} onChange={this.changeState}></Form.Control>
                                {this.validator.message('lugarCompra', this.state.autoNuevo.lugarCompra, 'required|alpha_num_space')}
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control type="number" placeholder="Precio" name="precioCompra" ref={this.precioCompraRef} onChange={this.changeState}></Form.Control>
                                    {this.validator.message('marca', this.state.autoNuevo.precioCompra, 'required|alpha_num_space')}
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="number" placeholder="Gasolina" name="gasUsada" ref={this.gasUsadaRef} onChange={this.changeState}></Form.Control>
                                    {this.validator.message('marca', this.state.autoNuevo.gasUsada, 'required|alpha_num_space')}
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Fecha
                                        obtenerFecha={this.fechaCompra}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Control type="number" placeholder="Precio exportada y modulada" name="precioExpMod" ref={this.precioExpModRef} onChange={this.changeState}></Form.Control>
                                {this.validator.message('marca', this.state.autoNuevo.precioExpMod, 'required|alpha_num_space')}
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} className="mt-2">
                                    <Button variant="warning" onClick={this.limpiarCampos}>Limpiar</Button>
                                </Form.Group>
                                <Form.Group as={Col} className="mt-2">
                                    <Button type="submit" variant="success">Registrar</Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Col>
                    <Col xs={6} md={8} className="col-8 properties-tabla-autos">
                        <Table responsive striped bordered hover size="sm">
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
                                    <th>Precio Exp Mod</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaAutos}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Autos;