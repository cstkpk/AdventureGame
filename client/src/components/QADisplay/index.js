import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./style.css";

function QADisplay(props) {
  return (
    <Col md={{ span: 8, offset: 2 }}>
      <Card className="mt-4" text="white" bg="transparent">
        <Card.Body>
          <Card.Text>
            {props.question.map(paragraphs => (
              <p key={paragraphs}>{paragraphs}</p>
            ))}
          </Card.Text>
          <Card.Text>
            {props.choices.map(choices => (
              <Button
                variant="outline-light"
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
}

export default QADisplay;
