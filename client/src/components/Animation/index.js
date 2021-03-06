import React from "react";
import { Card, Col } from "react-bootstrap";

function Animation(props) {
  return (
    <Col xs={12} md={{ span: 4, offset: 2 }}>
      <Card>
        <Card.Img variant="bottom" src={props.image} alt={props.alt} />
      </Card>
    </Col>
  );
}

export default Animation;
