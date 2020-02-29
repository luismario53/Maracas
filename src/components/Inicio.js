import React, { Component } from 'react';
import firebase from 'firebase';
import { Row, Col } from "react-bootstrap";

import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import ReactLoading from 'react-loading';
import * as legoData from "./legoloading.json";
import * as doneData from "./doneloading.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

class Inicio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            done: undefined
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: true });
            setTimeout(() => {
                this.setState({ done: true });
            }, 500);
        }, 500);
    }

    render() {
        return (
            <div>
                {!this.state.done ? (
                    <FadeIn>
                        <div className="d-flex justify-content-center align-items-center">
                            {!this.state.loading ? (
                                <Lottie options={defaultOptions} height={400} width={400} />
                            ) : (
                                    <Lottie options={defaultOptions2} height={400} width={400} />
                                )}
                        </div>
                    </FadeIn>
                ) : (
                        <h1></h1>

                    )}
            </div>
        );
    }
}

export default Inicio;