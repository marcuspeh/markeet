import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../actions/userAction";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Transaction extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            number: "",
            tax: 0.0
        }
    }

    onSubmit = e => {
        this.props.goBack();
    };

    componentDidMount() {
        this.props.getProfile();
    };

    componentDidUpdate(prevProp) {
        if (prevProp.profile !== this.props.profile) {
            if (this.props.profile) {
                this.setState({
                    name: this.props.profile.profile.name,
                    address: this.props.profile.profile.address,
                    tax: this.props.profile.profile.tax / 100,
                    number: this.props.profile.profile.number
                })
            }
        }
    }

    render() {
        var dateTime = this.props.transaction.date.substring(0, 19).split("T");
        const taxAmount = Math.round((this.props.transaction.total / (1 + this.state.tax) * this.state.tax) * 100) / 100;
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
                    <h3>{this.state.name}</h3>
                    <p>{this.state.address ? "Address: " + this.state.address : ""}</p> 
                    <p>{this.state.number ? "Telephone: " + this.state.number : ""}</p> 
                </div>
                <hr style={{border: "none", borderTop: "3px double #333",height: "5px"}} />
                <p><b>Transaction ID:</b> {this.props.transaction._id}</p>
                <p><b>Date:</b> {dateTime[0]}</p>
                <p><b>Time:</b> {dateTime[1]}</p>
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
                        <td style={{textAlign: "right"}}><b>Subtotal</b>:</td>
                        <td>${Math.round((this.props.transaction.total - taxAmount) * 100) / 100}</td>
                    </tr>
                    <tr style={{border:"none"}}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style={{textAlign: "right", paddingTop: "0px"}}><b>Tax ({Math.round(this.state.tax * 100 *10) / 10}%)</b>:</td>
                        <td style={{paddingTop: "0px"}}>${taxAmount}</td>
                    </tr>
                    <tr style={{border:"none"}}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style={{textAlign: "right", paddingTop: "0px"}}><b>Total:</b></td>
                        <td style={{paddingTop: "0px"}}>${Math.round((this.props.transaction.total) * 100) / 100}</td>
                    </tr>
                    </tbody>
                </table>
            </Container>
            </>
        );
    }
}

Transaction.propTypes = {
    getProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(
    mapStateToProps,
    { getProfile }
)(Transaction);