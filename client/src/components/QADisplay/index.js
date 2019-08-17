import React from "react";
import { Button, Card } from 'react-bootstrap';

function QADisplay(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Question: {props.question}</Card.Title>
                <Card.Text>
                    {props.choices.map(choices => (
                    <Button 
                    className="btn-info btn-block"
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
        
    );
};

export default QADisplay;