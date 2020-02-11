import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import { Button, Form } from 'react-bootstrap';

class Fecha extends Component {

    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {

        const FechaForm = ({ value, onClick }) => {
            return (
                <Button onClick={onClick} variant='outline-dark' block>
                    {value}
                </Button>
            );
        }

        return (
            <div>
                <DatePicker
                    locale={es}
                    dateFormat='dd/MM/yyyy'
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    customInput={<FechaForm />}
                />
            </div>
        );
    }
}

export default Fecha;