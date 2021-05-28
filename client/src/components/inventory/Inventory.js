import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getInventory } from "../../actions/inventoryActions";

import Table from "react-bootstrap/Table";

class Inventory extends Component {
    componentDidMount() {
        this.props.getInventory();
    };

    componentDidUpdate(prevProp) {
        if (prevProp.inventory !== this.props.inventory) {
            if (this.props.inventory) {
                this.setState({
                    inventory: this.props.inventory
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
        const { errors } = this.props;
        return (
            <>
                <h1>Inventory</h1>
                <span className="red-text">
                    {errors.message}
                </span>
                <Table className="table">
                    <thead>
                        <tr>
                            <th>Barcode</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Cost</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.inventory.inventory && this.props.inventory.inventory.length ? Array.from(this.props.inventory.inventory).map(item => 
                            <tr key={item._id}>
                                <td>{item.barcode}</td>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>{item.cost}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ) : <tr>
                            <td colSpan="6">No inventory :(</td>
                            </tr> }
                    </tbody>
                
                </Table>
            </>
        );
    }
}

Inventory.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    inventory: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    inventory: state.inventory
});

export default connect(
    mapStateToProps,
    { getInventory }
)(withRouter(Inventory));