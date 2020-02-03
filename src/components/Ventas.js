import React, { Component } from 'react';
import { Form, Card, Col, Row, Table, ListGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import '../assets/css/example.css'
import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCbzcGkbOuWa_cMKCdtWWRsICMV-Zh6B2A",
    authDomain: "marabe-2b660.firebaseapp.com",
    databaseURL: "https://marabe-2b660.firebaseio.com",
    projectId: "marabe-2b660",
    storageBucket: "marabe-2b660.appspot.com",
    messagingSenderId: "154115401178",
    appId: "1:154115401178:web:307b5dfa491a8105c14ce3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Ventas extends Component {

    constructor(props) {
        super(props);

        this.state = {
            autos: []
        };
    }

    componentDidMount() {
        var aux = [];
        firebase.database().ref('Autos/').on('value', snap => {
            aux = snap.val();
            console.log(aux);        
        });
    }

    render() {

        const { autos } = this.state;
        const listaAutos = autos.map(auto => {
            return <ListGroup.Item>{auto.marca_modelo_anho}</ListGroup.Item>
        });
        return (
            <div>
                <Row className="mt-4 col-12 ml-1 estilo">
                    <Col xs={12} md={4}>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Buscar Auto"></FormControl>
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Buscar</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <Card>
                            <ListGroup className="properties-autos" variant="flush">
                                <ListGroup.Item>Ford Focus 2008</ListGroup.Item>
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
                                <Form.Control type="textarea" placeholder="Descripción"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control className="properties" as="textarea" rows="3" placeholder="Cantidad"></Form.Control>
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
