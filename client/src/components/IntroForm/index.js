import React from "react";
import { Button, Form } from 'react-bootstrap';

function IntroForm (props) {
    return (
        <div id={props.id}>
            <Form>
                <Form.Group>
                    <Form.Label>Enter your name:</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Your name"
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    />
                </Form.Group>
            <Button 
            type="submit" 
            onClick={(event) => props.toggleHidden(event)}
            >
            Begin
            </Button>
            </Form>
        </div>
    );
};

export default IntroForm;