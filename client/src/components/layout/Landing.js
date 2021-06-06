import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo from '../../assets/img/logo.png'

import Button from 'react-bootstrap/Button';

class Landing extends Component {
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
    }
  };

  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <img src={logo} alt="logo"></img>
            <p className="flow-text grey-text text-darken-1">
              A free, open source point of sales system.
            </p>
            <br />
            <Button variant="primary" href="/register" style={{width: "150px"}}>
              REGISTER
            </Button>{' '}
            <Button variant="outline-secondary" href="/login" style={{width: "150px"}}>
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
)(withRouter(Landing));