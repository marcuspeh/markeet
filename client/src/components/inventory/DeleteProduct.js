import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProduct } from "../../actions/inventoryActions";

import Button from 'react-bootstrap/Button';

class DeleteProduct extends Component {
    constructor() {
        super();
        this.state = {
            delete: false
        };
        
        this.onClickDelete = this.onClickDelete.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onClickCancel = this.onClickCancel.bind(this);
    }

    onClickDelete() {
        this.setState({delete: true});
    }

    onDelete() {
        this.props.deleteProduct({id: this.props.id}, this.props.history); 
        this.props.goBack();
    }

    onClickCancel() {
        this.setState({delete: false});
    }

        render() {
            if (this.state.delete) {
                return (
                    <div>
                        <Button variant="danger" onClick={this.onDelete}>Delete</Button> 
                        {" "}
                        <Button variant="outline-secondary" onClick={this.onClickCancel}>Cancel</Button>
                    </div>
                );
            } else {
                return (
                    <Button variant="outline-warning" onClick={this.onClickDelete}>Delete item?</Button>
                );
            }
        }
}

DeleteProduct.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    deleteProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(
    mapStateToProps,
    { deleteProduct }
)(withRouter(DeleteProduct));
