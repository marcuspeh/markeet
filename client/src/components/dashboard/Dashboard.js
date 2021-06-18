import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSales } from "../../actions/salesAction";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = { 
            sales: ""
        }
    }
    componentDidMount() {
        this.props.getSales();
    };
    
    componentDidUpdate(prevProp) {
        if (prevProp.sales !== this.props.sales) {
            if (this.props.sales) {
                this.setState({
                    sales: this.props.sales
                });
            }
        }
        if (prevProp.errors !== this.props.errors) {
            if (this.props.errors) {
                this.setState({
                    errors: this.props.errors
                });
            }
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

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getSales: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    sales: state.sales
});

export default connect(
    mapStateToProps,
    { getSales }
)(withRouter(Dashboard));