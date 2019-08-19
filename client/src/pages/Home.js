import React, { Component } from "react";
import { Row, Container } from 'react-bootstrap';
import QA from "../data/questions.json";
import QADisplay from "../components/QADisplay";
import Animation from "../components/Animation";
import SpaceAPI from "../components/SpaceAPI";

class Home extends Component {

    state = {
        QA,
        question: QA[0].question,
        answerChoices: QA[0].choices,
        chosen: ""
    };

    nextQuestion = (choices) => {
        switch (choices) {
            case "A": 
                this.setState({ 
                    question: QA[1].question,
                    answerChoices: QA[1].choices
                });
                break;
            case "B":
                this.setState({ 
                    question: QA[2].question,
                    answerChoices: QA[2].choices
                });
                break;
            case "C":
                this.setState({ 
                    question: QA[3].question,
                    answerChoices: QA[3].choices
                    });
                    break;
            case "D":
                this.setState({ 
                    question: QA[0].question,
                    answerChoices: QA[0].choices
                    });
                    break;
            case "E":
                this.setState({ 
                    question: QA[2].question,
                    answerChoices: QA[2].choices
                    });
                    break;
            case "F":
                this.setState({ 
                    question: QA[3].question,
                    answerChoices: QA[3].choices
                    });
                    break;
            case "G":
                this.setState({ 
                    question: QA[0].question,
                    answerChoices: QA[0].choices
                    });
                    break;
            case "H":
                this.setState({ 
                    question: QA[1].question,
                    answerChoices: QA[1].choices
                    });
                    break;
            case "I":
                this.setState({ 
                    question: QA[3].question,
                    answerChoices: QA[3].choices
                    });
                    break;
            default:
                console.log("ERRRROROROROR");
                alert("Whoops! Looks like I didn't add a case for that one...")
        }
    }
    
    render() {
        return(
            <Container className="container-fluid">
                <Row>
                    <Animation />
                    <SpaceAPI />
                </Row>
                <Row>
                    <QADisplay
                    question={this.state.question}
                    choices={this.state.answerChoices}
                    nextQuestion={this.nextQuestion}
                    />
                </Row>
            </Container>
        );
    }

};

export default Home;