import React, { Component } from 'react';
import { Form, Button, Card, Col, Row, Container, Table } from 'react-bootstrap';

class Autos extends Component {
    render() {
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
                                <Form.Control type="number" placeholder="Lugar de compra"></Form.Control>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control type="number" placeholder="Lugar de compra"></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="number" placeholder="Lugar de compra"></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control type="number" placeholder="Lugar de compra"></Form.Control>
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
                    <Col xs={6} md={8} className="col-8">
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
                                <tr>
                                    <td>Toyota</td>
                                    <td>Camry</td>
                                    <td>2009</td>
                                    <td>4</td>
                                    <td>Phoenix</td>
                                    <td>18-febrero-2018</td>
                                    <td>1400</td>
                                    <td>450</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>Toyota</td>
                                    <td>Camry</td>
                                    <td>2009</td>
                                    <td>4</td>
                                    <td>Phoenix</td>
                                    <td>18-noviembre-2018</td>
                                    <td>1400</td>
                                    <td>450</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>Toyota</td>
                                    <td>Camry</td>
                                    <td>2009</td>
                                    <td>4</td>
                                    <td>Phoenix</td>
                                    <td>18-noviembre-2018</td>
                                    <td>1400</td>
                                    <td>450</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>Toyota</td>
                                    <td>Camry</td>
                                    <td>2009</td>
                                    <td>4</td>
                                    <td>Phoenix</td>
                                    <td>18-noviembre-2018</td>
                                    <td>1400</td>
                                    <td>450</td>
                                    <td>1000</td>
                                </tr>
                                <tr>
                                    <td>Toyota</td>
                                    <td>Camry</td>
                                    <td>2009</td>
                                    <td>4</td>
                                    <td>Phoenix</td>
                                    <td>18-noviembre-2018</td>
                                    <td>1400</td>
                                    <td>450</td>
                                    <td>1000</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Autos;