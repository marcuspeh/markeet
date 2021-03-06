import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser, googleRegister } from "../../actions/authActions";
import classnames from "classnames";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoogleLogin } from 'react-google-login';

class Register extends Component {
    constructor() {
        super();
        this.state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    };

    componentDidUpdate(prevProp) {
        if (prevProp.errors !== this.props.errors) {
            if (this.props.errors) {
                this.setState({
                    errors: this.props.errors
                });
            }
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    googleSuccess = e => {
       
        var profile = e.getBasicProfile();
        const send = {
            googleId: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail().toLowerCase()
        }
        this.props.googleRegister(send, this.props.history);
    }

    googleError = e => {
        const newError = this.state.errors;
        if (e.error === "idpiframe_initialization_failed") {
            newError.google = e.details;
        } else {
            newError.google = e.error;
        }
        this.setState({errors: newError});
    }

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email.toLowerCase(),
            password: this.state.password,
            password2: this.state.password2
            };

        this.props.registerUser(newUser, this.props.history); 
    };

        render() {
            const { errors } = this.state;
            return (
                <Container>
                    <Row>
                    <Col>
                        <Link to="/" className="btn-flat waves-effect">
                        <i className="material-icons left">keyboard_backspace</i>Back to
                        home
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <h4>
                            <b>Register</b> below
                        </h4>
                        <p className="grey-text text-darken-1">
                            Already have an account? <Link to="/login">Log in</Link>
                        </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-field col s12">
                            <input
                            onChange={this.onChange}
                            value={this.state.name}
                            error={errors.name}
                            id="name"
                            type="text"
                            className={classnames("", {
                                invalid: errors.name
                            })}
                            />
                            <label htmlFor="name">Name</label>
                            <span className="red-text">{errors.name}</span>
                        </div>
                        <div className="input-field col s12">
                            <input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            className={classnames("", {
                                invalid: errors.email
                            })}
                            />
                            <label htmlFor="email">Email</label>
                            <span className="red-text">{errors.email}</span>
                        </div>
                        <div className="input-field col s12">
                            <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            className={classnames("", {
                                invalid: errors.password
                            })}
                            />
                            <label htmlFor="password">Password</label>
                            <span className="red-text">{errors.password}</span>
                        </div>
                        <div className="input-field col s12">
                            <input
                            onChange={this.onChange}
                            value={this.state.password2}
                            error={errors.password2}
                            id="password2"
                            type="password"
                            className={classnames("", {
                                invalid: errors.password2
                            })}
                            />
                            <label htmlFor="password2">Confirm Password</label>
                            <span className="red-text">{errors.password2}</span>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <Button variant="primary" type="submit" style={{width: "150px"}}>
                            REGISTER
                        </Button>
                        </div>
                        </form>
                    </Col>
                    </Row>
                    <br />
                    <hr />
                    <Row className="justify-content-center">
                        <GoogleLogin
                                clientId="369551078404-f1kpvn7qs91f9k7go6b82knstknn0cd1.apps.googleusercontent.com"
                                render={(renderProps) => (
                                <Button  color="primary" onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained">
                                    Sign up with Google
                                </Button>
                                )}
                                onSuccess={this.googleSuccess}
                                onFailure={this.googleError}
                                cookiePolicy="single_host_origin"
                            />
                        <span className="red-text">{errors.google}</span>
                    </Row>
                </Container>
            );
        }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    googleRegister: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser, googleRegister }
)(withRouter(Register));