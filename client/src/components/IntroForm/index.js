import React from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css";

function IntroForm(props) {
  return (
    <div className="container" id={props.id}>
      <Form id="name-form">
        <Form.Group>
          <Form.Label text="white">Enter your name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name"
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        </Form.Group>
        <Button type="submit" onClick={event => props.toggleHidden(event)}>
          Begin
        </Button>
      </Form>
    </div>
  );
}

export default IntroForm;
