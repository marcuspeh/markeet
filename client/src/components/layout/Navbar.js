import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Navbar extends Component {
    render() {
        if (this.props.auth.isAuthenticated) 
            return (
                <div className="navbar-fixed">
                    <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link
                        to="/"
                        style={{
                            fontFamily: "monospace"
                        }}
                        className="col s5 brand-logo center black-text"
                        >
                        <i className="material-icons">code</i>
                        MERN
                        </Link>
                    </div>
                    </nav>
                </div>
            );
        else 
            return <></>;
    }
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Navbar);