import React from "react";
import { Card, Col } from "react-bootstrap";
// import Rocket from "./assets/rocket1.gif";

function Animation(props) {
  return (
    <Col xs={12} md={{ span: 4, offset: 2 }}>
      <Card>
        {/* <Card.Body> */}
        {/* <Card.Title className="text-center">This is our animation component! Yay Dan!</Card.Title> */}
        <Card.Img variant="bottom" src={props.image} alt={props.alt} />
        {/* </Card.Body> */}
      </Card>
    </Col>
  );
}

export default Animation;
