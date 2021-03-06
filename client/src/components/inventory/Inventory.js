import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getInventory } from "../../actions/inventoryActions";
import EditInventory from "./EditInventory";
import FilterInventory from "./FilterInventory"
import {PAGE, SORT} from "./Types";

import AddInventory from "./AddInventory";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

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
        this.onClickFilter = this.onClickFilter.bind(this);
        this.exitEdit = this.exitEdit.bind(this);
        this.exitAdd = this.exitAdd.bind(this);
        this.searchInput = this.searchInput.bind(this);
        this.filterFunction = this.filterFunction.bind(this);
        this.sortFunction = this.sortFunction.bind(this);
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

    onClickFilter() {
        this.setState({
            show: PAGE.FILTER
        })
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    searchInput(filt, sort) {
        this.setState({
            filt: filt
        })
        if (this.state.inventory) {
            this.setState({
                inventory: this.state.inventory.sort((a, b) => this.sortFunction(a, b, sort))
            });
        }
    }

    filterFunction(product) {
        var result = product.title.toLowerCase().includes(this.state.search.toLowerCase())   || 
                    product.barcode.toLowerCase().includes(this.state.search.toLowerCase())  ||
                    product.category.toLowerCase().includes(this.state.search.toLowerCase());
        if (this.state.filt) {
            result = this.state.filt.barcode ? result && product.barcode.toLowerCase().includes(this.state.filt.barcode.toLowerCase()) : result;
            result = this.state.filt.title ? result && product.title.toLowerCase().includes(this.state.filt.title.toLowerCase()) : result;
            result = this.state.filt.category ? result && product.category.toLowerCase().includes(this.state.filt.category.toLowerCase()) : result;
            result = this.state.filt.minPrice ? result && product.price >= this.state.filt.minPrice : result;
            result = this.state.filt.maxPrice ? result && product.price <= this.state.filt.maxPrice : result;
            result = this.state.filt.minCost ? result && product.cost >= this.state.filt.minCost : result;
            result = this.state.filt.maxCost ? result && product.cost <= this.state.filt.maxCost : result;
            result = this.state.filt.minStock ? result && product.quantity >= this.state.filt.minStock : result;
            result = this.state.filt.maxStock ? result && product.quantity <= this.state.filt.maxStock : result;
        }
        return result;               
    }

    sortFunction(a, b, sort) {
        switch(sort) {
            case SORT.BARCODEUP:
                return a.barcode > b.barcode ? 1 : -1;
            case SORT.BARCODEDOWN:
                return a.barcode > b.barcode ? -1 : 1;

            case SORT.TITLEUP:
                return a.title > b.title ? 1 : -1;
            case SORT.TITLEDOWN:
                return a.title > b.title ? -1 : 1;
            
            case SORT.CATEGORYUP:
                return a.category > b.category ? 1 : -1;
            case SORT.CATEGORYDOWN:
                return a.category > b.category ? -1 : 1;

            case SORT.COSTUP:
                return a.cost > b.cost ? 1 : -1;
            case SORT.COSTDOWN:
                return a.cost > b.cost ? -1 : 1;

            case SORT.PRICEUP:
                return a.price > b.price ? 1 : -1;
            case SORT.PRICEDOWN:
                return a.price > b.price ? -1 : 1;

            case SORT.QUANTITYUP:
                return a.quantity > b.quantity ? 1 : -1;
            case SORT.QUANTITYDOWN:
                return a.quantity > b.quantity ? -1 : 1;

            default: 
                return 0;
        }
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
        } else if (this.state.show === PAGE.FILTER) {
            return (<FilterInventory searchInput = {this.searchInput } goBack = {this.exitAdd} filt = {this.state.filt} sort = {this.state.sort} /> )
        } else {
            return (
                <>
                    <Container> 
                        <Row>
                            <Col> 
                                <InputGroup className="mb-3" style={{marginTop:"1rem"}}>
                                    <InputGroup.Prepend>
                                        <button style={{border: "0", paddingLeft:"1rem", paddingRight:"1rem", borderRadius: "8px 0px 0px 8px"}} onClick={this.onClickFilter} data-test-id='advanceSearch'>
                                            <i className="tiny material-icons">
                                                tune
                                            </i>
                                        </button>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Search title/barcode/category here"
                                        onChange={this.onChange}
                                        value={this.state.search}
                                        id="search"
                                        style={{paddingLeft: "0.5em", marginBottom: "0px"}}
                                        data-test-id='search'
                                    />
                                </InputGroup>
                            </Col>
                            <Col >
                                <div style={{float: "right"}} >
                                <Button variant="primary" onClick={this.onClickAdd} style={{marginTop:"1em"}} data-test-id='addInventory'>
                                    Add Inventory
                                </Button>
                                </div>
                            </Col>
                        </Row>
                    

                        <Table className="table">
                            <thead>
                                <tr>
                                    <th>Barcode</th>
                                    <th>Title</th>
                                    <th>Picture</th>
                                    <th>Category</th>
                                    <th>Cost</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.inventory && this.state.inventory.length ? Array.from(this.state.inventory)
                                .filter(this.filterFunction)
                                .map(item => 
                                    <tr key={item._id} data-test-id={item.title}>
                                        <td>{item.barcode}</td>
                                        <td>{item.title}</td>
                                        <td><a href={item.picture} target="_blank" rel="noreferrer" style={{color: "grey"}}><i className="material-icons">image</i></a></td>
                                        <td>{item.category}</td>
                                        <td>{item.cost}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            <Button variant="outline-dark" style={{height: "2em", paddingTop:"0", paddingLeft: "5px", paddingRight: "5px"}} onClick={() => this.onClickEdit(item._id)}>
                                                <i className="material-icons">edit</i>
                                            </Button>
                                        </td>
                                    </tr>
                                ) : <tr>
                                    <td colSpan="7">No inventory :(</td>
                                    </tr> }
                            </tbody>
                        </Table>
                    </Container>
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
