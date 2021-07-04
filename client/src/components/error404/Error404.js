import React, { Component } from "react";

import Button from "react-bootstrap/Button"

class Error404 extends Component {
    render() {
        return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
            <div className="row">
                <div className="col s12 center-align">
                    <h1>404 :( </h1>
                    <p className="flow-text grey-text text-darken-1">
                        It looks like the page doesn't exist.
                    </p>
                    <Button variant="primary" type="submit" style={{width: "150px"}} href="/">
                        Take me home
                    </Button>
                </div>
            </div>
        </div>
        );
    }
}

export default Error404;