import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { addInventory } from "../../actions/inventoryActions";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class AddInventory extends Component {
    constructor() {
        super();
        this.state = { 
            barcode: "",
            title: "",
            category: "",
            cost: "",
            price: "",
            quantity: "",
            errors: {}
        };
        this.onClickBack = this.onClickBack.bind(this);
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newInventory = {
            barcode: this.state.barcode,
            title: this.state.title,
            category: this.state.category,
            cost: this.state.cost,
            price: this.state.price,
            quantity: this.state.quantity
            };

        this.props.addInventory(newInventory, this.props.history); 
        this.onClickBack();
    };

    onClickBack() {
        this.setState({ 
            barcode: "",
            title: "",
            category: "",
            cost: "",
            price: "",
            quantity: "",
            errors: {},

        });     
        this.props.goBack();
    }

    render() {
        const { errors } = this.state;
        return (
            <>
            <Container>
                <Row>
                    <Col>
                        <div style={{float:"left", margin:"1em"}}>
                        <button type="button"  className="close" onClick={this.onClickBack}>
                            <i className="material-icons left">keyboard_backspace</i> Back to inventory
                        </button>
                        </div>
                                    
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                onChange={this.onChange}
                                value={this.state.barcode}
                                error={errors.barcode}
                                id="barcode"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.barcode
                                })}
                                />
                                <label htmlFor="barcode">Barcode</label>
                                <span className="red-text">{errors.barcode}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                onChange={this.onChange}
                                value={this.state.title}
                                error={errors.title}
                                id="title"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.title
                                })}
                                />
                                <label htmlFor="title">Title</label>
                                <span className="red-text">{errors.title}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                onChange={this.onChange}
                                value={this.state.category}
                                error={errors.category}
                                id="category"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.category
                                })}
                                />
                                <label htmlFor="category">category</label>
                                <span className="red-text">{errors.category}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                onChange={this.onChange}
                                value={this.state.cost}
                                error={errors.cost}
                                id="cost"
                                type="number"
                                className={classnames("", {
                                    invalid: errors.cost
                                })}
                                />
                                <label htmlFor="cost">Cost</label>
                                <span className="red-text">{errors.cost}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                onChange={this.onChange}
                                value={this.state.price}
                                error={errors.price}
                                id="price"
                                type="number"
                                className={classnames("", {
                                    invalid: errors.price
                                })}
                                />
                                <label htmlFor="price">Price</label>
                                <span className="red-text">{errors.price}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                onChange={this.onChange}
                                value={this.state.quantity}
                                error={errors.quantity}
                                id="quantity"
                                type="number"
                                className={classnames("", {
                                    invalid: errors.quantity
                                })}
                                />
                                <label htmlFor="quantity">Quantity</label>
                                <span className="red-text">{errors.quantity}</span>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <Button variant="primary" type="submit" style={{width: "150px"}}>
                                    Save
                                </Button>
                            </div>
                            </form>
                        </Col>
                    </Row>
                    <br />
                    <hr />
                    <Row className="justify-content-center">
                       <Button variant="outline-secondary" onClick={this.onClickBack}>Cancel</Button>
                    </Row>
                </Container>
            </>
        );
    }
}

AddInventory.propTypes = {
    auth: PropTypes.object.isRequired,
    addInventory: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addInventory }
)(withRouter(AddInventory));