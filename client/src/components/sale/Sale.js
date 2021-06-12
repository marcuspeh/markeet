import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Sales extends Component {
    render() {
        return (
            <Container style={{marginTop:"1rem"}}>
                <Row>
                    <Col xs={9} style={{height: "60vh"}}>
                        <Row>
                            <Col xs={12} xs={12} style={{height: "30vh"}}>
                                <h5>Chart</h5>
                                <p>Use chart.js to generate graph</p>
                            </Col>
                            <Col xs={4} style={{height: "30vh"}}>
                                <h5>Revenue</h5>
                                <p>Use chart.js to generate graph</p>
                            </Col>
                            <Col xs={4} style={{height: "30vh"}}>
                                <h5>Revenue per month</h5>
                                <p>Use chart.js to generate graph</p>
                            </Col>
                            <Col xs={4} style={{height: "30vh"}}>
                                <h5>Sales per day</h5>
                                <p>Use chart.js to generate graph</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={3} style={{height: "60vh"}}>
                        <Row style={{height: "20vh"}}>
                            <Col xs={12}>
                                <span style={{fontSize:"1.5em"}}>$0</span>
                                <p>Revenue (all time)</p>
                                <span style={{fontSize:"1.5em"}}>$0</span>
                                <p>Profit (all time)</p>
                            </Col>
                        </Row>
                        
                        <Row style={{height: "20vh"}}>
                            <Col xs={12}>
                                <span style={{fontSize:"1.5em"}}>$0</span>
                                <p>Revenue (year to date)</p>
                                <span style={{fontSize:"1.5em"}}>$0</span>
                                <p>Revenue (year to date)</p>
                            </Col>
                        </Row>
                        
                        <Row style={{height: "20vh"}}>
                            <Col xs={12}>
                                <span style={{fontSize:"1.5em"}}>$0</span>
                                <p>Revenue(monthly)</p>
                                <span style={{fontSize:"1.5em"}}>$0</span>
                                <p>Profit (monthly)</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} style={{height: "30vh"}}>
                        <h5>Top sales</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis libero vel magna porta, quis luctus purus sagittis. In bibendum tincidunt bibendum. In accumsan risus justo, at ullamcorper felis commodo sit amet. </p>
                    </Col>
                    <Col xs={6} style={{height: "30vh"}}>
                        <h5>Worse sale</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis libero vel magna porta, quis luctus purus sagittis. In bibendum tincidunt bibendum. In accumsan risus justo, at ullamcorper felis commodo sit amet.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Sales;