import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = { 
            Sales: ""
        }
    }

    render() {
        return (
            <Container style={{marginTop:"1rem"}}>
                <Row>
                    <Col xs={2} style={{textAlign:"center"}}>
                        <h5>Total Revenue</h5>
                    </Col>
                    <Col xs={2} style={{textAlign:"center"}}>
                        <h5>Daily Revenue</h5>
                    </Col>
                    <Col xs={2} style={{textAlign:"center"}}>
                        <h5>Average sold</h5>
                    </Col>
                    <Col xs={6} >
                        <h5>Notification</h5>
                    </Col>
                    
                    <Col xs={2} style={{textAlign:"center", height: "20vh"}}>
                        <p style={{marginTop: "1rem", fontStyle: "italic"}}>$0</p>
                    </Col>
                    <Col xs={2} style={{textAlign:"center", height: "20vh"}}>
                        <p style={{marginTop: "1rem", fontStyle: "italic"}}>$0</p>
                    </Col>
                    <Col xs={2} style={{textAlign:"center", height: "20vh"}}>
                        <p style={{marginTop: "1rem", fontStyle: "italic"}}>$0</p>
                    </Col>
                    <Col xs={6} style={{height: "20vh"}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis libero vel magna porta, quis luctus purus sagittis. In bibendum tincidunt bibendum. In accumsan risus justo, at ullamcorper felis commodo sit amet. Sed risus metus, aliquam at sem interdum, cursus vulputate lectus. Orci varius natoque penatibus et magnis dis parturient.</p>
                    </Col>
                </Row>
                <Row style={{height: "30vh"}}>
                    <Col xs={12}>
                        <h5>Chart</h5>
                        <p>Use chart.js to plot graph</p>
                    </Col>
                </Row>
                <Row style={{height: "30vh"}}>
                    <Col xs={12}>
                        <h5>Transaction</h5>
                        <p>Just print out a table of Transaction</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard;