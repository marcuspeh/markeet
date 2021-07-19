import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { getProfile, updateEmail, updateName, updatePassword, updateNumber, updateAddress } from "../../actions/userAction";

import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            name: "",
            email: "",
            oldPassword: "",
            password: "",
            password2: "",
            address: "",
            errors: {},
            number: "",
            updated: {}
        };
    }

    componentDidMount() {
        this.props.getProfile();
    };

    componentDidUpdate(prevProp) {
        if (prevProp.userprofile !== this.props.userprofile) {
            if (this.props.userprofile && this.state.name === "" && this.state.email === "" && this.state.address === "") {
                this.setState({
                    name: this.props.userprofile.profile.name,
                    email: this.props.userprofile.profile.email,
                    address: this.props.userprofile.profile.address || "",
                    number: this.props.userprofile.profile.number || ""
                })
            }
            if (this.props.userprofile && this.props.userprofile.updated) {
                var newUpdated = this.state.updated || {};
                var newError = this.state.errors || {};
                for (var key in this.props.userprofile.updated) {
                    newUpdated[key] = this.props.userprofile.updated[key];
                    newError[key] = "";
                }
                this.setState({
                    updated: newUpdated,
                    errors: newError
                })
            }
        }
        if (prevProp.errors !== this.props.errors) {
            if (this.props.errors) {
                var newUpdated2 = this.state.updated || {};
                var newError2 = this.state.errors || {};
                for (var key2 in this.props.errors) {
                    newError2[key2] = this.props.errors[key2];
                    newUpdated2[key2] = "";
                }
                this.setState({
                    updated: newUpdated2,
                    errors: newError2
                })
            }
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmitName = e => {
        const updatedName = {name: this.state.name};
        this.props.updateName(updatedName, this.props.history);
    }

    onSubmitEmail = e => {
        const updatedEmail = {email: this.state.email};
        this.props.updateEmail(updatedEmail, this.props.history);
    }

    onSubmitNumber = e => {
        const updatedNumber = {number: this.state.number};
        this.props.updateNumber(updatedNumber, this.props.history);
    }

    onSubmitAddress = e => {
        const updatedAddress = {address: this.state.address};
        this.props.updateAddress(updatedAddress, this.props.history);
    }

    onSubmit = e => {
        e.preventDefault();

        const updatedPassword = {
            oldPassword: this.state.oldPassword,
            password: this.state.password,
            password2: this.state.password2
            };
        
        this.props.updatePassword(updatedPassword, this.props.history); 
    };

    render() {
        const { errors, updated } = this.state;
        return (
            <Container style={{marginTop:"1rem"}}>
                <Row>
                    <Col>                        
                        
                        <div className="col">
                            <h5>Name</h5>
                            <div style={{marginLeft: "1rem"}}>
                                <InputGroup className="mb-3">
                                    <FormControl onChange={this.onChange} value={this.state.name} id="name"/>
                                    <InputGroup.Append>
                                        <button style={{border: "0", paddingLeft:"1rem", paddingRight:"1rem", borderRadius: "0px 8px 8px 0px"}} onClick={this.onSubmitName}>Update</button>
                                    </InputGroup.Append>
                                </InputGroup>
                                <span className="red-text">{errors.name}</span>
                                <span className="green-text">{updated.name}</span>
                            </div>
                        </div>

                        <div className="col">
                            <h5>Address</h5>
                            <div style={{marginLeft: "1rem"}}>
                                <InputGroup className="mb-3">
                                    <FormControl onChange={this.onChange} value={this.state.address} id="address"/>
                                    <InputGroup.Append>
                                        <button style={{border: "0", paddingLeft:"1rem", paddingRight:"1rem", borderRadius: "0px 8px 8px 0px"}} onClick={this.onSubmitAddress}>Update</button>
                                    </InputGroup.Append>
                                </InputGroup>
                                <span className="red-text">{errors.address}</span>
                                <span className="green-text">{updated.address}</span>
                            </div>
                        </div>

                        <div className="col">
                            <h5>Email</h5>
                            <div style={{marginLeft: "1rem"}}>
                                <InputGroup className="mb-3">
                                    <FormControl onChange={this.onChange}  value={this.state.email} id="email"/>
                                    <InputGroup.Append>
                                    <button style={{border: "0", paddingLeft:"1rem", paddingRight:"1rem", borderRadius: "0px 8px 8px 0px"}} onClick={this.onSubmitEmail}>Update</button>
                                    </InputGroup.Append>
                                </InputGroup>
                                <span className="red-text">{errors.email}</span>
                                <span className="green-text">{updated.email}</span>
                            </div>
                        </div>

                        <div className="col">
                            <h5>Number</h5>
                            <div style={{marginLeft: "1rem"}}>
                                <InputGroup className="mb-3">
                                    <FormControl onChange={this.onChange} value={this.state.number} id="number"/>
                                    <InputGroup.Append>
                                        <button style={{border: "0", paddingLeft:"1rem", paddingRight:"1rem", borderRadius: "0px 8px 8px 0px"}} onClick={this.onSubmitNumber}>Update</button>
                                    </InputGroup.Append>
                                </InputGroup>
                                <span className="red-text">{errors.number}</span>
                                <span className="green-text">{updated.number}</span>
                            </div>
                        </div>

                        <form noValidate onSubmit={this.onSubmit}>
                        <div className="col">
                            <h5>Change Password</h5>
                            <div className="input-field col">
                                <input onChange={this.onChange} value={this.state.oldPassword} error={errors.oldPassword} id="oldPassword" type="password"
                                className={classnames("", {
                                        invalid: errors.oldPassword
                                    })} />
                                <label>Enter original password</label>
                                <span className="red-text">{errors.oldPassword}</span>
                                <span className="green-text">{updated.password}</span>
                            </div>
                            <div className="input-field col">
                                <input onChange={this.onChange} value={this.state.password} error={errors.password} id="password" type="password"
                                className={classnames("", {
                                        invalid: errors.password
                                    })} />
                                <label>Enter new password</label>
                                <span className="red-text">{errors.password}</span>
                            </div>
                            <div className="input-field col">
                                <input onChange={this.onChange} value={this.state.password2} error={errors.password2} id="password2" type="password"
                                className={classnames("", {
                                        invalid: errors.password2
                                    })} />
                                <label>Enter new password again</label>
                                <span className="red-text">{errors.password2}</span>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <Button variant="primary" type="submit" style={{width: "150px"}}>
                                    Save
                                </Button>
                            </div>
                        </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

Profile.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    userprofile: PropTypes.object.isRequired,
    getProfile: PropTypes.func.isRequired,
    updateName: PropTypes.func.isRequired,
    updateEmail: PropTypes.func.isRequired,
    updatePassword: PropTypes.func.isRequired,
    updateAddress: PropTypes.func.isRequired,
    updateNumber: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    userprofile: state.profile,
    updated: state.updated
});


export default connect(
    mapStateToProps,
    { getProfile, updateEmail, updateName, updatePassword, updateAddress, updateNumber }
)(withRouter(Profile));