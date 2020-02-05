import React, { Component } from 'react';
import '../assets/css/Piezas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

class Piezas extends React.Component {


    render() {
        return (



            <div id="componentePiezas">
                <h3>Agregar piezas</h3>
                <Row className="mt-4 col-7 ml-1">
                    <Col xs={8} md={1}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control id="camposPieza" type="text" placeholder="Nombre de la pieza" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Descripción </Form.Label>
                                <Form.Control id="camposPieza" as="textarea" rows="3" placeholder="Descripción de la pieza..." />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Proviene </Form.Label>
                                <Form.Control id="camposPieza"  type="text" placeholder="De donde proviene..." />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="outline-success">Agregar</Button>
                            </Form.Group>
                        </Form>



                    </Col>
                    <Col xs={6} md={8} className="col-8">
                       
                    </Col>
                </Row>

            </div>

        );
    }
}

export default Piezas;