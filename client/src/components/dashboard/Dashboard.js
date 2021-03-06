import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSales } from "../../actions/salesAction";
import { getInventory } from "../../actions/inventoryActions";
import { PAGE } from "./Types";

import Transaction from "./Transaction";

import {Line} from 'react-chartjs-2';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = { 
            show: PAGE.VIEW,
            transaction: "",
            totalRevenue: 0,
            averageRevenue: 0,
            dailyRevenue: 0,
            head: [],
            point: [],
            sales: [],
            inventory: []
        }
        this.onClickTransaction = this.onClickTransaction.bind(this);
        this.exitTransaction = this.exitTransaction.bind(this);
    }
    componentDidMount() {
        this.props.getSales();
        this.props.getInventory();
    };
    
    componentDidUpdate(prevProp) {
        if (prevProp.inventory !== this.props.inventory) {
            if (this.props.inventory) {
                this.setState({
                    inventory: this.props.inventory.inventory
                });
            }
        }
        if (prevProp.sales !== this.props.sales) {
            if (this.props.sales) {
                var totalRevenue = 0;
                var days = 0;
                var prevDate = "";
                var dailyRevenue = 0;
                var head = [];
                var point = [];
                var index = this.props.sales.sales.length - 1;
                var todayDate = new Date().toJSON().split("T")[0];
                
                for (; index >=0; index--) {
                    totalRevenue += this.props.sales.sales[index].total;
                    var date = this.props.sales.sales[index].date.split("T")[0];

                    if (head.length < 7  || head[head.length - 1] === date) {
                        if (head[head.length - 1] !== date) {
                            head.push(date);
                            point.push(this.props.sales.sales[index].total);
                        } else {
                            point[point.length-1] += this.props.sales.sales[index].total;
                        }
                    }

                    if (prevDate !== date) {
                        days++;
                        prevDate = date
                    }          

                    if (todayDate === date) {
                        dailyRevenue += this.props.sales.sales[index].total;
                    }
                }
                totalRevenue = (Math.round(totalRevenue * 100) / 100).toFixed(2);
                var averageRevenue = Math.round(totalRevenue / days * 100) / 100 || 0;
                averageRevenue = (Math.round(averageRevenue * 100) / 100).toFixed(2);
                dailyRevenue = (Math.round(dailyRevenue * 100) / 100).toFixed(2);

                this.setState({
                    sales: this.props.sales.sales,
                    totalRevenue: totalRevenue,
                    averageRevenue: averageRevenue,
                    dailyRevenue: dailyRevenue,
                    head: head.reverse(),
                    point: point.reverse()
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

    filterFunction(product) {
        return product.quantity < 5
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
        if (this.state.show === PAGE.TRANSACTION)
            return (<Transaction goBack = {this.exitTransaction} transaction = {this.state.transaction}/>);
        else{ 
            var point = this.state.point;
            var head = this.state.head;
            var notificationStocks = Array.from(this.state.inventory).filter(this.filterFunction)
            return (
                <Container style={{marginTop:"1rem"}}>
                    <Row>
                        <Col xs={2} style={{textAlign:"center"}}>
                            <h5>Total Revenue</h5>
                        </Col>
                        <Col xs={2} style={{textAlign:"center"}}>
                            <h5>Average Revenue</h5>
                        </Col>
                        <Col xs={2} style={{textAlign:"center"}}>
                            <h5>Daily Revenue</h5>
                        </Col>
                        <Col xs={6} >
                            <h5>Notification</h5>
                        </Col>
                        
                        <Col xs={2} style={{textAlign:"center", height: "15vh"}}>
                            <p style={{marginTop: "1rem", fontStyle: "italic"}}>${this.state.totalRevenue}</p>
                        </Col>
                        <Col xs={2} style={{textAlign:"center", height: "15vh"}}>
                            <p style={{marginTop: "1rem", fontStyle: "italic"}}>${this.state.averageRevenue}</p>
                        </Col>
                        <Col xs={2} style={{textAlign:"center", height: "15vh"}}>
                            <p style={{marginTop: "1rem", fontStyle: "italic"}}>${this.state.dailyRevenue}</p>
                        </Col>
                        <Col xs={6} style={{height: "15vh",
                            position: "relative",
                            overflow: "auto"
                            }}>
                            {notificationStocks && notificationStocks.length > 0 ? 
                                (<ul>
                                    {notificationStocks
                                        .map(item => 
                                            <li key={item._id}><i>Warning:</i> {item.title} has {item.quantity} in stock left.</li>
                                        )}
                                </ul>)
                            : 
                            (<p>No notification available</p>)
                        }
                        </Col>
                    </Row>
                    <h5>Revenue</h5>
                    <Line data={{
                            labels: head,
                            datasets: [{
                                label: "Revenue",
                                fill: false,
                                lineTension: 0.5,
                                backgroundColor: 'rgba(75,192,192,1)',
                                borderColor: 'rgba(0,0,0,1)',
                                borderWidth: 1,
                                data: point
                            }]
                    }} />
                    <h5>Transaction</h5>
                    <div style={{position: "relative", height: "30vh", overflow: "auto"}}>
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
                                .reverse()
                                .map((transaction) => {
                                    var temp = transaction.date.substring(0, 19).split("T");
                                    if (transaction.cartItems && transaction.cartItems.length > 0)
                                        return (
                                        <tr key={transaction._id}>
                                            <td>{transaction._id}</td>
                                            <td>{temp[0]} {temp[1]}</td>
                                            <td>{transaction.cartItems.length}</td>
                                            <td>{transaction.total}</td>
                                            <td>
                                                <Button variant="outline-dark" style={{height: "2em", paddingTop:"0", paddingLeft: "5px", paddingRight: "5px"}} onClick={() => this.onClickTransaction(transaction)}>
                                                    <i className="material-icons">receipt</i>
                                                </Button>
                                            </td>
                                        </tr>)
                                    else 
                                        return (<tr key={transaction._id}></tr>);
                                }): (
                                <tr>
                                    <td colSpan="4">Nothing Here :)</td>
                                </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                    <br />
                    <br />
                </Container>
            );
        }
    }
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    sales: PropTypes.object.isRequired,
    getSales: PropTypes.func.isRequired,
    getInventory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    sales: state.cart,
    inventory: state.inventory
});

export default connect(
    mapStateToProps,
    { getSales, getInventory }
)(withRouter(Dashboard));