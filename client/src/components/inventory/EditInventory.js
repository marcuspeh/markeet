import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { getProduct, editProduct } from "../../actions/inventoryActions";

import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class EditInventory extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            barcode: "",
            title: "",
            category: "",
            cost: "",
            price: "",
            quantity: "",
            errors: {},
            product: ""
        };
        
        this.onClickBack = this.onClickBack.bind(this);
    }

    componentDidMount() {
        this.props.getProduct({id: this.props.id});
    };

    componentDidUpdate(prevProp) {
        if (prevProp.product !== this.props.product) {
            if (this.props.product) {
                this.setState({ product: this.props.product});
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

    onClickBack() {
        this.props.goBack();
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const updateProduct = {
            id: this.state.product._id,
            barcode: this.state.barcode,
            title: this.state.title,
            category: this.state.category,
            cost: this.state.cost,
            price: this.state.price,
            quantity: this.state.quantity
            };

        this.props.editProduct(updateProduct, this.props.history); 
        this.props.goBack();
    };

        render() {
            const { errors } = this.state;
            return (
                <Container>
                    <Row>
                        <Col>
                            <div style={{float:"left", margin:"1em"}}>
                            <button type="button"  className="close" onClick={this.onClickBack}>
                                <i className="material-icons left">keyboard_backspace</i> Back to inventory
                            </button>
                            </div>
                            
                            <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group col">
                                <label htmlFor="barcode">Barcode</label>
                                <input onChange={this.onChange} placeholder={this.state.product.barcode} value={this.state.barcode} error={errors.barcode} id="barcode" type="text"
                                        className={classnames("", {
                                            invalid: errors.barcode
                                        })} />
                                <span className="red-text">{errors.barcode}</span>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="title">Title</label>
                                <input onChange={this.onChange} placeholder={this.state.product.title} value={this.state.title} error={errors.title} id="title" type="text"
                                className={classnames("", {
                                        invalid: errors.title
                                    })} />
                                <span className="red-text">{errors.title}</span>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="category">Category</label>
                                <input onChange={this.onChange} placeholder={this.state.product.category} value={this.state.category} error={errors.category} id="category" type="text"
                                className={classnames("", {
                                        invalid: errors.category
                                    })} />
                                <span className="red-text">{errors.category}</span>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="cost">Cost</label>
                                <input onChange={this.onChange} placeholder={this.state.product.cost} value={this.state.cost} error={errors.cost} id="cost" type="number"
                                className={classnames("", {
                                        invalid: errors.cost
                                    })} />
                                <span className="red-text">{errors.cost}</span>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="price">Price</label>
                                <input onChange={this.onChange} placeholder={this.state.product.price} value={this.state.price} error={errors.price} id="price" type="number"
                                className={classnames("", {
                                        invalid: errors.price
                                    })} />
                                <span className="red-text">{errors.price}</span>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="quantity">Quantity</label>
                                <input onChange={this.onChange} placeholder={this.state.product.quantity} value={this.state.quantity} error={errors.quantity} id="quantity" type="number"
                                className={classnames("", {
                                        invalid: errors.quantity
                                    })} />
                                <span className="red-text">{errors.quantity}</span>
                            </div>
                            
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <Button variant="primary" size="lg" type="submit" style={{width: "150px"}}>
                                    Save
                                </Button>
                            </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            );
        }
}

EditInventory.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired,
    editProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    product: state.inventory.product
});


export default connect(
    mapStateToProps,
    { getProduct, editProduct }
)(withRouter(EditInventory));