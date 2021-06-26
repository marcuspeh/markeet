import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import { getProfile } from "../../actions/userAction";

import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    
    componentDidMount() {
        this.props.getProfile();
    };

    componentDidUpdate(prevProp) {
        if (prevProp.profile !== this.props.profile) {
            if (this.props.profile) {
                this.setState({
                    name: this.props.profile.profile.name
                })
            }
        }
    }

    render() {
        if (this.props.auth.isAuthenticated) 
            return (
                <NavBar bg="light" expand="sm">
                    <NavBar.Brand href="/dashboard">
                        markeet
                    </NavBar.Brand>
                    <NavBar.Toggle aria-controls="basic-navbar-nav" />
                    <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/cashier">Cashier</Nav.Link>
                        <Nav.Link href="/inventory">Inventory</Nav.Link>
                        <Nav.Link href="/sales">Sales</Nav.Link>
                    </Nav>
                    <div>
                        <span style={{color: 'black', marginRight: "2px"}}>
                            Hello, 
                            <button onClick={ this.onClickProfile } href="/profile" style={{backgroundColor: "rgba(0,0,0,0)"}}>
                                <Link to="/profile" style={{color: "black", fontWeight:"bold"}}>{this.state.name}</Link>
                            </button>
                        </span>
                        <Button onClick={this.onLogoutClick} variant="outline-success">LOGOUT</Button>
                    </div>
                    </NavBar.Collapse>
                </NavBar>
            );
        else 
            return (<></>);
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    getProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(
    mapStateToProps,
    { logoutUser, getProfile }
)(Navbar);