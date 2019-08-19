import React, { Component } from "react";
import { Row, Container } from 'react-bootstrap';
import QA from "../data/questions.json";
import Images from "../data/animations.json";
import QADisplay from "../components/QADisplay";
import Animation from "../components/Animation";
import SpaceAPI from "../components/SpaceAPI";
// import rocket1 from "../components/Animation/assets/rocket1.gif";
import * as images from "../components/Animation/assets"

class Home extends Component {

    state = {
        QA,
        question: QA[0].question,
        answerChoices: QA[0].choices,
        chosen: "",
        image: images[0],
        alt: Images[0].alt
    };

    nextQuestion = (choices) => {
        switch (choices) {
            case "Immediately report it to the police?": 
                this.setState({ 
                    question: QA[1].question,
                    answerChoices: QA[1].choices
                });
                break;
            case "Open it?":
                this.setState({ 
                    question: QA[2].question,
                    answerChoices: QA[2].choices
                });
                break;
            case "Back to the beginning!":
                this.setState({ 
                    question: QA[0].question,
                    answerChoices: QA[0].choices
                    });
                    break;
            case "Next":
                this.setState({ 
                    question: QA[3].question,
                    answerChoices: QA[3].choices
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
                    <Animation 
                    image={this.state.image}
                    alt={this.state.alt}
                    />
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