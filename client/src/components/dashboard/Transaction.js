import React, { Component } from "react";

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
        console.log(this.props.transaction);
        var dateTime = this.props.transaction.date.substring(0, 19).split("T");
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
                    </Col>
                </Row>
                <br />
                <div style={{textAlign: "center"}}>
                    <h3>Name</h3>
                    <span>Address: ... <br /> Telephone: ...</span>
                </div>
                <hr style={{border: "none", borderTop: "3px double #333",height: "5px"}} />
                <p>Transaction ID: {this.props.transaction._id}</p>
                <p>Date: {dateTime[0]}</p>
                <p>Time: {dateTime[1]}</p>
                <hr style={{border: "none", borderTop: "3px double #333",height: "5px"}} />
                
                <table>
                    <thead>
                        <tr>
                            <th>Barcode</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.transaction && this.props.transaction.cartItems.length ? Array.from(this.props.transaction.cartItems)
                        .map((transaction) => (
                            <tr key={transaction._id}>
                                <td>{transaction.barcode}</td>
                                <td>{transaction.title}</td>
                                <td>{transaction.quantity}</td>
                                <td>${transaction.price}</td>
                                <td>${transaction.price * transaction.quantity}</td>
                            </tr>
                        )): (
                        <tr>
                            <td colSpan="5">Nothing Here :)</td>
                        </tr>
                        )}
                    <tr style={{border:"none"}}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style={{textAlign: "right"}}><b>Total</b>:</td>
                        <td>${this.props.transaction.total}</td>
                    </tr>
                    <tr style={{border:"none"}}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style={{textAlign: "right", paddingTop: "0px"}}><b>Tax(7%)</b>:</td>
                        <td style={{paddingTop: "0px"}}>${Math.round(this.props.transaction.total / 1.07 * 0.07 * 100) / 100}</td>
                    </tr>
                    </tbody>
                </table>
            </Container>
            </>
        );
    }
}

export default Transaction;