import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getInventory } from "../../actions/inventoryActions";
import EditInventory from "./EditInventory";

import AddInventory from "./AddInventory";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const PAGE = {
    VIEW: "VIEW",
    ADD: "ADD",
    EDIT: "EDIT"
}

class Inventory extends Component {
    constructor() {
        super();
        this.state = { 
            inventory: [],
            id: "",
            show: PAGE.VIEW,
            search: ""
        };
        this.onClickEdit = this.onClickEdit.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.exitEdit = this.exitEdit.bind(this);
        this.exitAdd = this.exitAdd.bind(this);
        this.searchInput = this.searchInput.bind(this);
    }


    componentDidMount() {
        this.props.getInventory();
    };

    onClickAdd() {
        this.setState({
            show: PAGE.ADD
        })
    }

    exitAdd() {
        this.setState({
            show: PAGE.VIEW
        })
    }

    onClickEdit(e) {
        this.setState({
            id: e,
            show: PAGE.EDIT
        })

    }

    exitEdit() {
        this.setState({
            id: "",
            show: PAGE.VIEW
        })
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    searchInput() {
        console.log(this.state.search)
    }

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
        if (this.state.show === PAGE.EDIT) {
            return ( <EditInventory id = {this.state.id} goBack = {this.exitEdit} /> );
        } else if (this.state.show === PAGE.ADD) {
            return ( <AddInventory goBack = {this.exitAdd} /> );
        } else {
            return (
                <>
                    <Container> 
                        <Row>
                            <Col> 
                                <div style={{marginTop:"0.7em"}}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <i className="material-icons">
                                                search
                                            </i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder=" Search title/barcode/category here"
                                        onChange={this.onChange}
                                        value={this.state.search}
                                        id="search"
                                    />
                                </InputGroup>
                                </div>
                            </Col>
                            <Col >
                                <div style={{float: "right"}} >
                                <Button variant="primary" onClick={this.onClickAdd} style={{marginTop:"1em"}}>
                                    Add Inventory
                                </Button>
                                </div>
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
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.inventory && this.state.inventory.length ? Array.from(this.state.inventory)
                            .filter(product =>  product.title.includes(this.state.search)   || 
                                                product.barcode.includes(this.state.search) ||
                                                product.category.includes(this.state.search)
                                                )
                            .map(item => 
                                <tr key={item._id}>
                                    <td>{item.barcode}</td>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td>{item.cost}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <Button onClick={() => this.onClickEdit(item._id)}>
                                            <i className="material-icons">edit</i>
                                        </Button>
                                    </td>
                                </tr>
                            ) : <tr>
                                <td colSpan="7">No inventory :(</td>
                                </tr> }
                        </tbody>
                    </Table>
                </>
            );
        }
    }
}

Inventory.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    inventory: PropTypes.object.isRequired,
    getInventory: PropTypes.func.isRequired
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
