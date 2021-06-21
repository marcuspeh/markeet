import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, googleLogin } from "../../actions/authActions";
import classnames from "classnames";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GoogleLogin } from 'react-google-login';

class Login extends Component {
    constructor() {
        super();
        this.state = {
        email: "",
        password: "",
        errors: {},
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    };

    componentDidUpdate(prevProp) {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
        if (prevProp.errors !== this.props.errors)
            if (this.props.errors) {
                this.setState({
                    errors: this.props.errors
                });
            }
    }
    
    googleSuccess = e => {
        var profile = e.getBasicProfile();
        const send = {
            googleId: profile.getId(),
            email: profile.getEmail().toLowerCase()
        }
        this.props.googleLogin(send);
    }

    googleError = e => {
        const newError = this.state.errors;
        newError.google = e.error;
        this.setState({errors: newError});
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email.toLowerCase(),
            password: this.state.password
            };
        this.props.loginUser(userData);
    }

    
    render() {
        const { errors } = this.state;
        return (
            <Container>
                <Row style={{ marginTop: "4rem" }}>
                <Col>
                    <Link to="/" className="btn-flat waves-effect">
                    <i className="material-icons left">keyboard_backspace</i> Back to
                    home
                    </Link>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <h4>
                        <b>Login</b> below
                    </h4>
                    <p className="grey-text text-darken-1">
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                    <div className="input-field col s12">
                        <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("", {
                            invalid: errors.email || errors.emailnotfound
                        })}
                        />
                        <label htmlFor="email">Email</label>
                        <span className="red-text">
                        {errors.email}
                        {errors.emailnotfound}
                        </span>
                    </div>
                    <div className="input-field col s12">
                        <input
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        className={classnames("", {
                            invalid: errors.password || errors.passwordincorrect
                        })}
                        />
                        <label htmlFor="password">Password</label>
                        <span className="red-text">
                        {errors.password}
                        {errors.passwordincorrect}
                        </span>
                    </div>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <Button variant="primary" type="submit" style={{width: "150px"}}>
                        LOGIN
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
                                <>
                                <Button  color="primary" onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained">
                                    Sign In With Google
                                </Button>
                                </>
                                )}
                            onSuccess={this.googleSuccess}
                            onFailure={this.googleError}
                            cookiePolicy="single_host_origin"
                        />
                    <span className="red-text">
                        {errors.google}
                        {errors.googleNotFound}
                    </span>
                </Row>
            </Container>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    googleLogin: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser, googleLogin }
)(Login);