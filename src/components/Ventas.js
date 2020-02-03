import React, { Component } from "react";
import { Table, Form, Row, Col, Button, Card } from "react-bootstrap";
import "../assets/css/Ventas.css";

class Ventas extends Component {
  render() {
    return (
      <div className="ventas">
        <Row>
          <Col xs={6} md={4}>
            <Table className="tabla-busqueda" striped bordered hover>
              <thead>
                <th>
                  <Form.Control type="text" placeholder="Busqueda" />
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>Autos</td>
                </tr>
              </tbody>
            </Table>
            <Card body>
              <Form.Control type="text" placeholder="Nombre de la pieza" />
              <br />
              <Form.Control type="text" placeholder="Cantidad" />
              <br />
              <Row>
                <Col>
                  <Button variant="warning">
                    <i class="fas fa-eraser">Limpiar</i>
                  </Button>
                </Col>
                <Col>
                  <Button variant="success">
                    <i class="fas fa-plus-circle">Agregar</i>
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col xs={12} md={8}>
            <Table striped bordered hover>
              <thead>
                <th>Auto</th>
                <th>Pieza</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Opciones</th>
              </thead>
              <tbody>
                <tr>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>..</td>
                  <td>...</td>
                </tr>
              </tbody>
            </Table>
            <Form>
              <Form.Group>
                  <Form.Row>
                <Form.Label>
                  Total:
                </Form.Label>
                <Col sm="2">
                  <Form.Control type="text" placeholder="Total" />
                </Col>
                <Col sm="2">
                  <Button variant="outline-success">Pagar</Button>
                </Col>
                </Form.Row>
                <br />
                <Form.Row>
                <Col sm="4">
                <Form.Control type="text" placeholder="Contraseña" />
                </Col>
                </Form.Row>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Ventas;
