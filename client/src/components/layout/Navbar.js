import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        if (this.props.auth.isAuthenticated) 
            return (
                <nav className="navbar white">
                    <ul>
                        <li>
                            <Link to="/" className="black-text">
                                markeet
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className="black-text">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/cashier" className="black-text">
                                Cashier     
                            </Link>
                        </li>
                        <li>
                            <Link to="/inventory" className="black-text">
                                Inventory   
                            </Link>
                        </li>
                        <li>
                            <Link to="/sales" className="black-text">
                                Sales   
                            </Link>
                        </li>
                    </ul>
                    <div style={{float: 'right', marginRight:'1rem'}}>
                        <button onClick={this.onLogoutClick} style={{borderRadius: "3px", letterSpacing: "1.5px"}} className="btn waves-effect waves-light hoverable blue accent-3">
                            Logout
                        </button>
                    </div>
                </nav>
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