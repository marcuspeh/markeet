import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { getProduct, editProduct } from "../../actions/inventoryActions";
import DeleteProduct from "./DeleteProduct";

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
            picture: "",
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
                this.setState({ 
                    product: this.props.product,
                    barcode: this.props.product.barcode,
                    title: this.props.product.title,
                    category: this.props.product.category,
                    cost: this.props.product.cost,
                    price: this.props.product.price,
                    quantity: this.props.product.quantity,
                    picture: this.props.product.picture
                });
            }
        }
        if (prevProp.errors !== this.props.errors) {
            if (this.props.errors) {
                this.setState({
                    errors: this.props.errors.errors
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
            quantity: this.state.quantity,
            picture: this.state.picture
            };

        this.props.editProduct(updateProduct, this.props.history, this.props.goBack); 
        
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
                        <div className="input-field col" data-test-id="barcode">
                            <label className="active">Barcode</label>
                            <input onChange={this.onChange} value={this.state.barcode} error={errors.barcode} id="barcode" type="text"
                                    className={classnames("", {
                                        invalid: errors.barcode
                                    })} />
                            <span className="red-text">{errors.barcode}</span>
                        </div>
                        <div className="input-field col" data-test-id="title">
                            <label className="active">Title</label>
                            <input onChange={this.onChange} value={this.state.title} error={errors.title} id="title" type="text"
                            className={classnames("", {
                                    invalid: errors.title
                                })} />
                            <span className="red-text">{errors.title}</span>
                        </div>
                        <div className="input-field col" data-test-id="picture">
                            <label className="active">Picture</label>
                            <input onChange={this.onChange} value={this.state.picture} error={errors.picture} id="picture" type="text"
                            className={classnames("", {
                                    invalid: errors.picture
                                })} />
                            <span className="red-text">{errors.picture}</span>
                        </div>
                        <div className="input-field col" data-test-id="category">
                            <label className="active">Category</label>
                            <input onChange={this.onChange} value={this.state.category} error={errors.category} id="category" type="text"
                            className={classnames("", {
                                    invalid: errors.category
                                })} />
                            <span className="red-text">{errors.category}</span>
                        </div>
                        <div className="input-field col" data-test-id="cost">
                            <label className="active">Cost</label>
                            <input onChange={this.onChange} value={this.state.cost} error={errors.cost} id="cost" type="number"
                            className={classnames("", {
                                    invalid: errors.cost
                                })} />
                            <span className="red-text">{errors.cost}</span>
                        </div>
                        <div className="input-field col" data-test-id="price">
                            <label className="active">Price</label>
                            <input onChange={this.onChange} value={this.state.price} error={errors.price} id="price" type="number"
                            className={classnames("", {
                                    invalid: errors.price
                                })} />
                            <span className="red-text">{errors.price}</span>
                        </div>
                        <div className="input-field col" data-test-id="quantity">
                            <label className="active">Quantity</label>
                            <input onChange={this.onChange} value={this.state.quantity} error={errors.quantity} id="quantity" type="number"
                            className={classnames("", {
                                    invalid: errors.quantity
                                })} />
                            <span className="red-text">{errors.quantity}</span>
                        </div>
                        
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <Button variant="primary" type="submit" style={{width: "150px"}}>
                                Save
                            </Button> {" "}
                            <Button variant="outline-secondary" onClick={this.onClickBack} style={{width: "150px"}}>
                                Cancel
                            </Button>
                        </div>
                        </form>
                    </Col>
                </Row>
                <br />
                <hr />
                <Row className="justify-content-center" data-test-id="deleteSection">
                    <DeleteProduct id={this.state.product._id} goBack={this.props.goBack} />
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