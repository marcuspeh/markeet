import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class Navbar extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        if (this.props.auth.isAuthenticated) 
            return (
                <NavBar bg="light" expand="sm">
                    <NavBar.Brand href="/">
                        markeet
                    </NavBar.Brand>
                    <NavBar.Toggle aria-controls="basic-navbar-nav" />
                    <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/cashier">Cashier</Nav.Link>
                        <Nav.Link href="/inventory">Inventory</Nav.Link>
                        <Nav.Link href="/sales">Sales</Nav.Link>
                    </Nav>
                    <div>
                        <span style={{color: 'black', marginRight: "2px"}}>Hello, {this.props.auth.user.name.split(" ")[0]} </span>
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
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Navbar);