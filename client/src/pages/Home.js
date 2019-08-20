import React, { Component } from "react";
import { Row, Container } from 'react-bootstrap';
import QA from "../data/questions.json";
import QADisplay from "../components/QADisplay";
import Animation from "../components/Animation";
import SpaceAPI from "../components/SpaceAPI";
import * as images from "../components/Animation/assets"
import API from "../utils/API.js";

class Home extends Component {

    state = {
        QA,
        question: QA[0].question,
        answerChoices: QA[0].choices,
        chosen: "",
        image: images.rocketEngine,
        result: {}
    };

    nextQuestion = (choices) => {
        switch (choices) {
            case "Back to the beginning!":
                this.setState({ 
                    question: QA[0].question,
                    answerChoices: QA[0].choices
                    });
                    break;
            case "Immediately report it to the police?": 
                this.setState({ 
                    question: QA[1].question,
                    answerChoices: QA[1].choices
                });
                break;
            case "Open it?":
                this.setState({ 
                    question: QA[2].question,
                    answerChoices: QA[2].choices,
                    image: images.interiorPowerOn
                });
                break;
            case "Next":
                this.setState({ 
                    question: QA[3].question,
                    answerChoices: QA[3].choices,
                    image: images.rocketEngine
                    });
                    break;
            case "You completely forgot!":
            case "You never leave home without a sandwich. But it’s missing a little something…":
                this.setState({ 
                    question: QA[4].question,
                    answerChoices: QA[4].choices,
                    image: images.moonLanding
                    });
                    break;
            case "The moon isn’t made out of cheese!":
                this.setState({ 
                    question: QA[5].question,
                    answerChoices: QA[5].choices
                    });
                    break;
            case "No thank you. I only want to go if there’s cheese.":
                this.setState({ 
                    question: QA[6].question,
                    answerChoices: QA[6].choices
                    });
                    break;
            case "Can we please land? I’ve always wanted to moonwalk!":
            case "I do wish there were cheese… but let’s go!":
                this.setState({ 
                    question: QA[7].question,
                    answerChoices: QA[7].choices
                    });
                    break;
            case "Call your parents to tell them about this amazing adventure!":
                this.setState({
                    question: QA[8].question,
                    answerChoices: QA[8].choices
                });
                break;
            case "Grab your sandwich so you can enjoy a nice picnic.":
            case "Let’s try that again, shall we?":
                this.setState({ 
                    question: QA[9].question,
                    answerChoices: QA[9].choices
                    });
                    break;
            case "You ignore the warning and go outside anyway.":
                this.setState({
                    question: QA[10].question,
                    answerChoices: QA[10].choices
                });
                break;
            case "Put on a space suit.":
            case "Thanks Mom, thanks Dad!":
            case "Thanks for the warning! You put on the space suit before going outside.":
                this.setState({
                    question: QA[11].question,
                    answerChoices: QA[11].choices
                });
                break;
            case "Mercury":
                this.searchBodies("mercury");
                this.setState({
                    question: QA[12].question,
                    answerChoices: QA[12].choices
                });
                break;
            case "Your curiosity is too strong! You pull it out of the ground.":
                this.setState({
                    question: QA[13].question,
                    answerChoices: QA[13].choices
                });
                break;
            case "Venus":
                this.searchBodies("venus");
                this.setState({
                    question: QA[14].question,
                    answerChoices: QA[14].choices
                });
                break;
            case "Continue to the surface! Any discovery is worth it.":
                this.setState({
                    question: QA[15].question,
                    answerChoices: QA[15].choices,
                    image: images.rocketExplode
                });
                break;
            case "Mars":
                this.searchBodies("mars");
                this.setState({
                    question: QA[16].question,
                    answerChoices: QA[16].choices
                });
                break;
            case "East":
                this.setState({
                    question: QA[17].question,
                    answerChoices: QA[17].choices
                });
                break;
            case "West":
                this.setState({
                    question: QA[18].question,
                    answerChoices: QA[18].choices
                });
                break;
            case "You have no idea what could be lurking beneath the surface. Best leave that alone.":
            case "You head back to the ship and continue onward.":
            case "Get out of there before the ship breaks apart!":
            case "It’s starting to get cold, so you head back to the ship.":
                this.setState({
                    question: QA[19].question,
                    answerChoices: QA[19].choices
                });
                break;
            case "":
                this.setState({
                    question: QA[0].question,
                    answerChoices: QA[0].choices
                });
                break;
            default:
                console.log("ERRRROROROROR");
                alert("Whoops! Looks like I didn't add a case for that one...")
        }
    }

    componentDidMount() {
        this.searchBodies("moon");
    };

    searchBodies = query => {
        API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    };
    
    render() {
        return(
            <Container className="container-fluid">
                <Row>
                    <Animation 
                    image={this.state.image}
                    alt={this.state.alt}
                    />
                    <SpaceAPI
                        englishName={this.state.result.englishName}
                        isPlanet={this.state.result.isPlanet}
                        moons={this.state.result.moons ? (this.state.result.moons.length):("No Moons")}
                        discoveredBy={this.state.result.discoveredBy}
                        discoveryDate={this.state.result.discoveryDate}
                        gravity={this.state.result.gravity}
                        radius={this.state.result.equaRadius}
                        satelliteOf="Earth"
                    />
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