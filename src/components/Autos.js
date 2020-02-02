import React, { Component } from 'react';
import { Form, Button, Card, Col, Row, Container, Table } from 'react-bootstrap';

class Autos extends Component {
    render() {
        return (
            <div>
                <Row className="mt-5 col-12 ml-1">
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
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Autos;