import React from "react";
import { Card, Col } from 'react-bootstrap';

function SpaceAPI (props) {
    return (
        <Col md={4}>
            <Card>
                <Card.Body>
                    <Card.Title>This is where our space facts will go. Yay Sam!</Card.Title>
                    <Card.Text>
                        This is where we'll put all of our fun facts from the API.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SpaceAPI;