import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getProfile } from "../../actions/userAction";

import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

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
        if (this.props.auth.isAuthenticated) {
            if (!this.state.name) this.props.getProfile();
            return (
                <NavBar bg="light" expand="sm" style={{color:"black"}}>
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
                       
                        <Dropdown as={ButtonGroup}>
                            <Button style={{backgroundColor: "transparent", boxShadow: "none", color:"black", border: "none"}}>Hello <b>{this.state.name}</b></Button>
                            <Dropdown.Toggle split variant="dark" data-test-id="dropdown"/>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/profile">Edit Profile</Dropdown.Item>
                                <Dropdown.Item onClick={this.onLogoutClick}>LOGOUT</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    </NavBar.Collapse>
                </NavBar>
            );
        }
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