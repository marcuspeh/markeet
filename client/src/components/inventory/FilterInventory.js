import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SORT } from "./Types";

import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class EditInventory extends Component {
    
    constructor() {
        super();
        this.state = {
            barcode: "",
            title: "",
            category: "",
            minPrice: "",
            maxPrice: "",
            minCost: "",
            maxCost: "",
            minStock: "",
            maxStock: "",
            sort: SORT.NONE
        };
        
        this.onClickBack = this.onClickBack.bind(this);
        this.onClickReset = this.onClickReset.bind(this);
    }

    componentDidMount() {
        if (this.props.filt) {
            this.setState({
                barcode: this.props.filt.barcode ? this.props.filt.barcode : "",
                title: this.props.filt.title ? this.props.filt.title : "",
                category: this.props.filt.category ? this.props.filt.category : "",
                minPrice: this.props.filt.minPrice ? this.props.filt.minPrice : "",
                maxPrice: this.props.filt.maxPrice ? this.props.filt.maxPrice : "",
                minCost: this.props.filt.minCost ? this.props.filt.minCost : "",
                maxCost: this.props.filt.maxCost ? this.props.filt.maxCost : "",
                minStock: this.props.filt.minStock ? this.props.filt.minStock : "",
                maxStock: this.props.filt.maxStock ? this.props.filt.maxStock : ""
            })
        }
        this.setState({sort: this.props.sort});
    };

    onClickBack() {
        this.props.goBack();       
    }

    onClickReset() {
        this.props.searchInput({});
        this.props.goBack();
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const filt = {
            barcode: this.state.barcode,
            title: this.state.title,
            category: this.state.category
        }

        if (this.state.minPrice) 
            filt.minPrice = this.state.minPrice;
        if (this.state.maxPrice) 
            filt.maxPrice = this.state.maxPrice;
        if (this.state.minCost)
            filt.minCost = this.state.minCost;
        if (this.state.maxCost) 
            filt.maxCost = this.state.maxCost;
        if (this.state.minStock)
            filt.minStock = this.state.minStock;
        if (this.state.maxStock)
            filt.maxStock = this.state.maxStock;
        
        this.props.searchInput(filt, this.state.sort);
        this.props.goBack();
    };

    render() {
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
                            <div className="col">
                                <h5>Sort</h5>
                                <Button variant="outline-secondary" style={{marginBottom: "0.5rem"}} onClick={() => this.setState({sort: SORT.BARCODEUP})}>Barcode - Ascending</Button> {" "}
                                <Button variant="outline-secondary" style={{marginBottom: "0.5rem"}} onClick={() => this.setState({sort: SORT.BARCODEDOWN})}>Barcode - Descending</Button> <br />
                                <Button variant="outline-secondary" style={{marginBottom: "0.5rem"}} onClick={() => this.setState({sort: SORT.TITLEUP})}>Title - Ascending</Button> {" "}
                                <Button variant="outline-secondary" style={{marginBottom: "0.5rem"}} onClick={() => this.setState({sort: SORT.TITLEDOWN})}>Title - Descending</Button> <br />
                                <Button variant="outline-secondary" style={{marginBottom: "0.5rem"}} onClick={() => this.setState({sort: SORT.CATEGORYUP})}>Category - Ascending</Button> {" "}
                                <Button variant="outline-secondary" style={{marginBottom: "0.5rem"}} onClick={() => this.setState({sort: SORT.CATEGORYDOWN})}>Category - Descending</Button> <br />
                                <Button variant="outline-secondary" style={{marginBottom: "0.5rem"}} onClick={() => this.setState({sort: SORT.COSTUP})}>Cost - Ascending</Button> {" "}
                                <Button variant="outline-secondary" style={{marginBottom: "0.5rem"}} onClick={() => this.setState({sort: SORT.COSTDOWN})}>Cost - Descending</Button> <br />
                                <Button variant="outline-secondary" style={{marginBottom: "0.5rem"}} onClick={() => this.setState({sort: SORT.PRICEUP})}>Price - Ascending</Button> {" "}
                                <Button variant="outline-secondary" style={{marginBottom: "0.5rem"}} onClick={() => this.setState({sort: SORT.PRICEDOWN})}>Price - Descending</Button> <br />
                                <Button variant="outline-secondary" style={{marginBottom: "1rem"}} onClick={() => this.setState({sort: SORT.QUANTITYUP})}>Quantity - Ascending</Button> {" "}
                                <Button variant="outline-secondary" style={{marginBottom: "1rem"}} onClick={() => this.setState({sort: SORT.QUANTITYDOWN})}>Quantity - Descending</Button> 
                            </div>

                            <div className="col">
                                <h5>Barcode</h5>    
                                <div className="input-field col" style={{marginTop: "0rem"}}>
                                    <input onChange={this.onChange} value={this.state.barcode} placeholder="Search Barcode" id="barcode" type="text" />
                                </div>
                            </div>

                            <div className="col">
                                <h5>Title</h5>    
                                <div className="input-field col" style={{marginTop: "0rem"}}>
                                    <input onChange={this.onChange} value={this.state.title} placeholder="Search Title" id="title" type="text" />
                                </div>
                            </div>

                            <div className="col">
                                <h5>Category</h5>    
                                <div className="input-field col" style={{marginTop: "0rem"}}>
                                    <input onChange={this.onChange} value={this.state.category} placeholder="Search Category" id="category" type="text" />
                                </div>
                            </div>

                            <div className="col">
                                <h5>Price</h5>    
                                <div className="input-field col">
                                    <label className="active">Min Value</label>
                                    <input onChange={this.onChange} value={this.state.minPrice} placeholder="Set a price" id="minPrice" type="number" />
                                </div>
                                <div className="input-field col">
                                    <label className="active">Max Value</label>
                                    <input onChange={this.onChange} value={this.state.maxPrice} placeholder="Set a price" id="maxPrice" type="number"/>
                                </div>         
                            </div>
                                            
                            
                            <div className="col">
                                <h5>Cost</h5>
                                <div className="input-field col">
                                    <label className="active">Min Cost</label>
                                    <input onChange={this.onChange} value={this.state.minCost} placeholder="Set a cost" id="minCost" type="number"/>
                                </div>
                                <div className="input-field col">
                                    <label className="active">Max Cost</label>
                                    <input onChange={this.onChange} value={this.state.maxCost} placeholder="Set a cost" id="maxCost" type="number" />
                                </div>
                            </div>

                            <div className="col">
                                <h5>Stock</h5>
                                <div className="input-field col">
                                    <label className="active">Min Stock</label>
                                    <input onChange={this.onChange} value={this.state.minStock} placeholder="Set stock quantity" id="minStock" type="number" />
                                </div>
                                <div className="input-field col">
                                    <label className="active">Max Stock</label>
                                    <input onChange={this.onChange} value={this.state.maxStock} placeholder="Set stock quantity" id="maxStock" type="number" />
                                </div>
                            </div>
                            
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <Button variant="primary" type="submit" style={{width: "150px"}}>
                                    Save
                                </Button> {" "}
                                <Button variant="outline-secondary" onClick={this.onClickReset} style={{width: "150px"}}>
                                    Reset
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
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
});


export default connect(
    mapStateToProps,
)(withRouter(EditInventory));