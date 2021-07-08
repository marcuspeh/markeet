import React, { Component } from "react";

import Card from "react-bootstrap/Card";

class SalesCard extends Component {
    render() {
        if (this.props.item && this.props.item.length !== 0)
            return (
                <Card style={{width: "30%", margin:"1%"}}>
                    <Card.Img variant="top" src={this.props.item[1][0]} />
                    <Card.Body style={{textAlign: "center"}}>
                        <Card.Title>{this.props.item[0]}</Card.Title>
                        <Card.Text><b>{this.props.item[1][1]}</b></Card.Text>
                    </Card.Body>
                    </Card> 
            )
        else 
            return (
                <Card style={{width: "30%", margin:"1%"}}>
                    <Card.Body style={{textAlign: "center"}}>
                        <Card.Title><b>?</b></Card.Title>
                    </Card.Body>
                    </Card> 
            )
    }
}

export default SalesCard