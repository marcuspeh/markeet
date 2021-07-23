import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import logo from '../../assets/img/logo.png'
import coins from '../../assets/img/coins.png'
import clipboard from '../../assets/img/clipboard.png'
import telegram from '../../assets/img/telegram.png'
import barChart from '../../assets/img/barChart.png'

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';

class Landing extends Component {
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
    }
  };

  render() {
    return (
      <div>
        <Navbar bg="light" expand="sm" fixed="top">
          <Container>
            <Navbar.Brand href="#home"><img src={logo} alt="logo" height="50"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#aboutUs">About Us</Nav.Link>
                <NavDropdown title="Use Us" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                  <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div id="home" className="valign-wrapper" style={{height:'100vh'}}>
          <div className="col s12 center-align" style={{paddingBottom:'20%'}}>
            <img src={logo} alt="logo"></img>
            <p className="flow-text grey-text text-darken-1">
              A free-to-use, web-based Point of Sale system.
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

        <div id="features" className="valign-wrapper" style={{height:'100vh', backgroundColor:'#f2f2f2'}}>
          <div className="col s12 center-align">
            <h1>Features</h1>
            <Container>
              <Row>
                <Col xs={4}>
                  <Card style={{maxWidth:'18rem'}}>
                    <Card.Img variant="top" src={coins} style={{padding: "2rem"}}/>
                    <Card.Body>
                      <Card.Title><b>Real-time information</b></Card.Title>
                      <Card.Text>
                        View detailed sales report and inventory count to help your company grow.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={4}>
                <Card style={{maxWidth:'18rem'}}>
                  <Card.Img variant="top" src={telegram} style={{padding: "2rem"}}/>
                  <Card.Body>
                    <Card.Title><b>Telegram Bot integration</b></Card.Title>
                    <Card.Text>
                      Want to save your staff from the unneccesary work of helping users check for stock? 
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
                <Col xs={4}>
                <Card style={{maxWidth:'18rem'}}>
                  <Card.Img variant="top" src={clipboard} style={{padding: "2rem"}}/>
                  <Card.Body>
                    <Card.Title><b>Reliable inventory management</b></Card.Title>
                    <Card.Text>
                      Our robust inventory management will ensure your inventory records are safe and secure.
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div id="aboutUs" className="valign-wrapper" style={{height:'100vh'}}>
          <div className="col s12 center-align">
            <h1>About us</h1>
            <br />
            <br />
            <Container>
              <Row>
                <Col xs={6}>
                  <p className="flow-text grey-text text-darken-1" >
                  markeet is a point of sales system designed with both the business and consumers interest at heart. <br /> It incoperates a online web system to help store manage their sales and inventory as well as a telegram bot to help users check for stock in stores.
                  </p>
                </Col>
                <Col xs={6}>
                  <img src={barChart} alt="barChart" height="60%"></img>
                </Col>
                <Col xs={12}>
                  
            <p className="flow-text grey-text text-darken-1">Visit the telegram bot: <b>@markeetOrbitalBot</b></p>
                </Col>
              </Row>
            </Container>
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