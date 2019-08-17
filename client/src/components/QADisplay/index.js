import React from "react";
import { Button, Card } from 'react-bootstrap';

function QADisplay(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Question: {props.question}</Card.Title>
                <Card.Text>
                    {props.answers.map(answers => (
                    <Button 
                    className="btn-info btn-block"
                    key={answers}
                    >
                    {answers}
                    </Button>
                    ))}
                </Card.Text>
            </Card.Body>
        </Card>
        
    );
};

export default QADisplay;