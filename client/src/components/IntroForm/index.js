import React from "react";
import { Button, Form } from 'react-bootstrap';

function IntroForm (props) {
    return (
        <div>
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
            </Form>
            <Button 
            type="submit" 
            onClick={() => props.toggleHidden()}

            >
            Begin
            </Button>
        </div>
    );
};

export default IntroForm;