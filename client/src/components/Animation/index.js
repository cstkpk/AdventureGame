import React from "react";
import { Card, Col } from 'react-bootstrap';
// import Rocket from "./assets/rocket1.gif";

function Animation(props) {

    return (
        <Col md={{span: 6, offset: 1}}>
            <Card>
                {/* <Card.Body> */}
                    {/* <Card.Title className="text-center">This is our animation component! Yay Dan!</Card.Title> */}
                    <Card.Img variant="bottom" src={props.image} alt={props.alt}/> 
                {/* </Card.Body> */}
            </Card>
        </Col>
    );
};

export default Animation;