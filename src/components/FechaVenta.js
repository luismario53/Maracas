import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import { Button, Col } from 'react-bootstrap';
import '../assets/css/example.css'

class Fecha extends Component {

    state = {
        startDate: new Date(),
        endDate: new Date()
    };

    handleStartDate = startDate => {
        this.setState({ startDate: startDate });
    };

    handleEndDate = endDate => {
        this.setState({ endDate: endDate });
    };

    obtenerDate = (startDate, endDate) => {
        this.props.obtenerFecha(startDate, endDate);
    }

    render() {

        const FechaForm = ({ value, onClick }) => {
            return (
                <Button onClick={onClick} variant='outline-info' block>
                    {value}
                </Button>
            );
        }

        return (
            <Col className="form-inline">
                <Col>
                    <label>Fecha Inicio</label>
                    <DatePicker
                        locale={es}
                        dateFormat='dd/MM/yyyy'
                        // onSelect={this.obtenerDate}
                        selected={this.state.startDate}
                        onChange={this.handleStartDate}
                        selectsStart
                        customInput={<FechaForm />}
                        startDate={this.state.startDate}
                    //withPortal
                    />
                </Col>
                <Col>
                <label>Fecha Fin</label>
                    <DatePicker
                        locale={es}
                        dateFormat='dd/MM/yyyy'
                        // onSelect={this.obtenerDate}
                        selected={this.state.endDate}
                        onChange={this.handleEndDate}
                        selectsEnd
                        customInput={<FechaForm />}
                        minDate={this.state.startDate}
                    //withPortal
                    />
                </Col>
            </Col>
        );
    }
}

export default Fecha;