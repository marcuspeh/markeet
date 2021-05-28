import React, { Component } from "react";
import logo from '../../assets/img/logo.png'

import Button from 'react-bootstrap/Button';

class Landing extends Component {
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
            <Button variant="primary" size="lg" href="/register" style={{width: "150px"}}>
              REGISTER
            </Button>{' '}
            <Button variant="outline-primary" size="lg" href="/login" style={{width: "150px"}}>
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;