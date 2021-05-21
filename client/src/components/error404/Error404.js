import React, { Component } from "react";
import { Link } from "react-router-dom";

class Error404 extends Component {
    render() {
        return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
            <div className="row">
                <div className="col s12 center-align">
                    <h1>404</h1>
                    <p className="flow-text grey-text text-darken-1">
                        It looks like the page doesn't exist :( 
                        <br/>
                        Please check the URL and try again
                    </p>
                    <Link to="/"
                        style={{
                        width: "180px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px"
                        }} className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                        Take me home
                    </Link>
                </div>
            </div>
        </div>
        );
    }
}

export default Error404;