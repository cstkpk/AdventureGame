import React from "react";
import { Card, Col } from 'react-bootstrap';

function Animation(props) {
    return (
        <Col md={8}>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">This is our animation component! Yay Dan!</Card.Title>
                    <Card.Img variant="bottom" src="https://media1.giphy.com/media/k0CJuMw9h7m3S/giphy.gif?cid=790b76115cb615cf013e2344efac31ee2bdeac3805e27dfc&rid=giphy.gif"/> 
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Animation;