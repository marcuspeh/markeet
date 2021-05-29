import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getInventory } from "../../actions/inventoryActions";

import AddInventory from "./AddInventory";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"


class Inventory extends Component {
    constructor() {
        super();
        this.state = { 
            inventory: []
        };
    }

    updateInventory = (newProduct) => {
        this.setState({inventory: [...this.state.inventory, newProduct]});
    };

    componentDidMount() {
        this.props.getInventory();
        this.setState({inventory: this.props.inventory.inventory});
    };

    componentDidUpdate(prevProp) {
        if (prevProp.inventory !== this.props.inventory) {
            if (this.props.inventory) {
                this.setState({
                    inventory: this.props.inventory.inventory
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
        var counter = 0;
        return (
            <>
                <Container> 
                    <Row>
                        <Col>
                            <h1>Inventory</h1>
                        </Col>
                        <Col >
                            <AddInventory updateInventory = {this.updateInventory}/>
                        </Col>
                    </Row>
                </Container>
                

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
                        {this.state.inventory && this.state.inventory.length ? Array.from(this.state.inventory).map(item => 
                            <tr key={counter++}>
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