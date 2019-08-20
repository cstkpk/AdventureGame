import React from "react";
import { Button, Card, Col } from 'react-bootstrap';

function QADisplay(props) {
    return (
        <Col md={12}>
            <Card>
                <Card.Body>
                    <Card.Text>
                    {props.question.map(paragraphs => (
                        <p
                        key={paragraphs}
                        >{paragraphs}</p>
                    ))}
                    </Card.Text>
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