import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Transaction extends Component {
    constructor() {
        super();
    }

    onSubmit = e => {
        this.props.goBack();
    };


    render() {
        return (
            <>
            <Container>
                <Row>
                    <Col>
                        <div style={{float:"left", margin:"1em"}}>
                        <button type="button"  className="close" onClick={this.onSubmit}>
                            <i className="material-icons left">keyboard_backspace</i> Back to dashboard
                        </button>
                        </div>
                        <br />            
                        <p>asfjk</p>
                    </Col>
                </Row>
                    <br />
                    <hr />
                    <Button onClick={this.onSubmit}>Go back</Button>
            </Container>
            </>
        );
    }
}

export default Transaction;