import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSales } from "../../actions/salesAction";
import { PAGE } from "./Types";

import Transaction from "./Transaction"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = { 
            show: [],
            transaction: "",
            sales: PAGE.VIEW
        }
        this.onClickTransaction = this.onClickTransaction.bind(this);
        this.exitTransaction = this.exitTransaction.bind(this);
    }
    componentDidMount() {
        this.props.getSales();
    };
    
    componentDidUpdate(prevProp) {
        if (prevProp.sales !== this.props.sales) {
            if (this.props.sales) {
                this.setState({
                    sales: this.props.sales.sales
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

    exitTransaction() {
        this.setState({
            transaction: "",
            show: PAGE.VIEW
        })
    }

    onClickTransaction(e) {
        this.setState({
            transaction: e,
            show: PAGE.TRANSACTION
        })

    }

    render() {
        if (this.state.show == PAGE.TRANSACTION)
            return (<Transaction goBack = {this.exitTransaction}/>);
        else
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
                    <h5>Transaction</h5>
                    <div
                            className="table-wrapper-scroll-y"
                            style={{
                            position: "relative",
                            height: "30vh",
                            overflow: "auto"
                            }}
                        >
                            <Table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Date and Time</th>
                                        <th>Items</th>
                                        <th>Total</th>
                                        <th>Receipt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.sales  && this.state.sales.length ? Array.from(this.state.sales)
                                    .map((transaction) => {
                                        var temp = transaction.date.substring(0, 19).split("T");
                                        return (
                                        <tr key={transaction._id}>
                                            <td>{transaction._id}</td>
                                            <td>{temp[0]} {temp[1]}</td>
                                            <td>{transaction.cartItems[0].title}</td>
                                            <td>{transaction.total}</td>
                                            <td>
                                                <Button variant="outline-dark" onClick={() => this.onClickTransaction(transaction)}>
                                                    <i className="material-icons">edit</i>
                                                </Button>
                                            </td>
                                        </tr>
                                    )}): (
                                    <tr>
                                        <td colSpan="4">Nothing Here :)</td>
                                    </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                </Container>
            );
    }
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    sales: PropTypes.object.isRequired,
    getSales: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    sales: state.cart
});

export default connect(
    mapStateToProps,
    { getSales }
)(withRouter(Dashboard));