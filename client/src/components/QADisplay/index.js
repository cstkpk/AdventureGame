import React from "react";
import { Button, Card, Col } from 'react-bootstrap';

function QADisplay(props) {
    return (
        <Col md={12}>
            <Card>
                <Card.Body>
                    <Card.Title>{props.question}</Card.Title>
                    <Card.Text>
                        {props.choices.map(choices => (
                        <Button 
                        variant="outline-dark"
                        className="btn-block"
                        key={choices}
                        val={choices}
                        onClick={() => props.nextQuestion(choices)}
                        >
                        {choices}
                        </Button>
                        ))}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        
    );
};

export default QADisplay;