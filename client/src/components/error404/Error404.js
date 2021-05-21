import React, { Component } from "react";
import { Link } from "react-router-dom";

class Error404 extends Component {
    render() {
        return (
            <div className="center">
                <h1>404</h1>
                <p>It looks like the page doesn't exist - please check the URL and try again.</p>
                <Link to="/"
                style={{
                  width: "180px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }} className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                    Take me home
                </Link>
            </div>
        );
    }
}

export default Error404;