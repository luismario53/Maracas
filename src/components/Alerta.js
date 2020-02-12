import React, { Component, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

class Alerta extends Component {

    state = {
        show: false,
    };

    render() {

        const handleClose = () => {
            this.setState({ show: false });
        }

        const handleShow = () => {
            this.setState({ show: true });
        }

        return (
            <div>
                <Button onClick={handleShow}>Lanzar
                </Button>
                <Modal show={this.state.show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Agregado Exitosamente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Se ha agregado el auto exitosamente
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='success' onClick={handleClose}>Aceptar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Alerta;