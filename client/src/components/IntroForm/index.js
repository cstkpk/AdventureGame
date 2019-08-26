import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import "./style.css";

function IntroForm(props) {
  return (
    <Container>
      <Form id="name-form">
        <Form.Group>
          <Form.Label>Enter your name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="E.g. Marvin the Martian"
            autoComplete="off"
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        </Form.Group>
        <Button
          className="btn-block intro-btn"
          variant="outline-success"
          type="submit"
          onClick={event => props.toggleHidden(event)}
        >
          Begin
        </Button>
      </Form>
    </Container>
  );
}

export default IntroForm;
