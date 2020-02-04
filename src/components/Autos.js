import React, { Component } from 'react';
import { Form, Button, Col, Row, Table } from 'react-bootstrap';
import firebase from 'firebase';
import '../assets/css/example.css'

class Autos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autos: []
        };
    }

    componentDidMount() {
        var { autos } = this.state;
        firebase.database().ref('Autos/').on('value', snap => {
            snap.forEach(snapshot => {
                autos.push({
                    id: snapshot.key,
                    auto: snapshot.val()
                });
                this.setState({ autos })
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
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Marca"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Modelo"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="number" placeholder="Año"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="number" placeholder="Cilindros"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Lugar de compra"></Form.Control>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control type="number" placeholder="Día"></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="text" placeholder="Mes"></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="number" placeholder="Año"></Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control type="number" placeholder="Precio de compra"></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="number" placeholder="Gasolina usada"></Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Control type="number" placeholder="Precio exportada y modulada"></Form.Control>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} className="mt-2">
                                    <Button variant="warning">Limpiar Campos</Button>
                                </Form.Group>
                                <Form.Group as={Col} className="mt-2">
                                    <Button variant="success">Registrar Auto</Button>
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