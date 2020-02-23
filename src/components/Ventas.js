import React, { Component } from 'react';
import { Form, Card, Col, Row, Table, ListGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import '../assets/css/example.css'
import firebase from 'firebase';

class Ventas extends Component {

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

    buscarAuto = (e) => {
        console.log(this.state.autos);
    }

    render() {

        const { autos } = this.state;
        const listaAutos = autos.map(auto => {
            return <ListGroup.Item key={auto.id}>{auto.auto.marca_modelo_anho}</ListGroup.Item>
        });
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
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>Ford Focus 2008</td>
                                    <td>Bugia radiador</td>
                                    <td>3</td>
                                    <td>500</td>
                                    <td><Button variant="outline-danger">Eliminar</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                
                <Row className="mt-4 col-12 ml-1">
                    <Col xs={12} md={4}>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Nombre de la pieza"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="number" placeholder="Cantidad"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control className="properties" as="textarea" rows="3" placeholder="Descripción"></Form.Control>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} className="mt-1">
                                    <Button variant="warning">Limpiar Campos</Button>
                                </Form.Group>
                                <Form.Group as={Col} className="mt-1">
                                    <Button variant="success">Agregar Pieza</Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Col>
                    <Col xs={6} md={8} className="col-8">
                        <Form className="properties-pagar">
                            <Form.Group>
                                <Form.Control type="number" placeholder="Total" readOnly></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="password" placeholder="Contraseña"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Button className="properties-button" variant="success">Pagar</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Ventas;