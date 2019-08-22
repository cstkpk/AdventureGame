import React, { Component } from "react";
import { Row, Container, Modal, Button } from "react-bootstrap";
import QA from "../data/questions.json";
import QADisplay from "../components/QADisplay";
import Animation from "../components/Animation";
import SpaceAPI from "../components/SpaceAPI";
import IntroForm from "../components/IntroForm";
import * as images from "../components/Animation/assets";
import API from "../utils/API.js";
import "./Home.css";
// import { truncate } from "fs";

class Home extends Component {
  state = {
    QA,
    question: QA[0].question,
    answerChoices: QA[0].choices,
    // chosen: "",
    image: images.rocketLeaveEarth.image,
    alt: images.rocketLeaveEarth.alt,
    result: {},
    isHidden: true,
    isHiddenForm: false,
    playerName: "",
    showModal: false
  };

  close = () => {
    this.setState({
      showModal: false
    });
  };

  open = event => {
    event.preventDefault();
    this.setState({
      showModal: true
    });
  };

  toggleHidden = event => {
    // if (this.state.playerName === "") {
    //     alert("no");
    // } else {
    event.preventDefault();
    this.setState({ isHiddenForm: !this.state.isHiddenForm });
    setTimeout(
      () =>
        this.setState({
          isHidden: !this.state.isHidden
        }),
      3000
    );
    console.log(this.state.playerName);
    API.createPlayer({ playerName: this.state.playerName })
      .then(res => {
        console.log(res.data._id);
        sessionStorage.setItem("playerID", JSON.stringify(res.data._id));
      })
      .catch(err => console.log(err));
    // }
  };

  handleInputChange = event => {
    // console.log("event triggerd");
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    nextQuestion = (choices) => {
        // console.log(choices);
        var currentID = JSON.parse(sessionStorage.getItem("playerID"));
        // console.log(currentID);
        API.updatePlayer(currentID, {playerChoices: choices})
            .then(res => {
                console.log(res.data.playerChoices);
            })
            .catch(err => console.log(err));
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
                    // image: images.interiorPowerOn
                });
                API.updatePlayer(currentID, {element1: true})
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => console.log(err));
                break;
            case "Next":
                this.setState({ 
                    question: QA[3].question,
                    answerChoices: QA[3].choices,
                    // image: images.rocketEngine
                    });
                    break;
            case "You completely forgot!":
            case "You never leave home without a sandwich. But it’s missing a little something…":
                this.searchBodies("moon");
                this.setState({ 
                    question: QA[4].question,
                    answerChoices: QA[4].choices,
                    // image: images.moonLanding
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
                API.updatePlayer(currentID, {moon: true})
                .then(res => console.log(res.data.moon))
                .catch(err => console.log(err));
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
                API.updatePlayer(currentID, {mercury: true})
                .then(res => console.log(res.data.mercury))
                .catch(err => console.log(err));
                break;
            case "Your curiosity is too strong! You pull it out of the ground.":
                this.setState({
                    question: QA[13].question,
                    answerChoices: QA[13].choices
                });
                // Set flag in DB here for Box1
                API.updatePlayer(currentID, {box1: true})
                .then(res => {
                    console.log(res.data.box1);
                })
                .catch(err => console.log(err));
                break;
            case "Venus":
                this.searchBodies("venus");
                this.setState({
                    question: QA[14].question,
                    answerChoices: QA[14].choices
                });
                API.updatePlayer(currentID, {venus: true})
                .then(res => console.log(res.data.venus))
                .catch(err => console.log(err));
                break;
            case "Continue to the surface! Any discovery is worth it.":
            case "Yes! Take me to the storm.":
                this.setState({
                    question: QA[15].question,
                    answerChoices: QA[15].choices,
                    // image: images.rocketExplode
                });
                API.updatePlayer(currentID, {shipDestruction: true})
                .then(res => console.log(res.data.shipDestruction))
                .catch(err => console.log(err));
                break;
            case "Mars":
                this.searchBodies("mars");
                this.setState({
                    question: QA[16].question,
                    answerChoices: QA[16].choices
                });
                API.updatePlayer(currentID, {mars: true})
                .then(res => console.log(res.data.mars))
                .catch(err => console.log(err));
                break;
            case "East":
                this.setState({
                    question: QA[17].question,
                    answerChoices: QA[17].choices
                });
                API.updatePlayer(currentID, {dustStorm: true})
                .then(res => console.log(res.data.dustStorm))
                .catch(err => console.log(err));
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
            case "Jupiter":
                this.searchBodies("jupiter");
                this.setState({
                    question: QA[20].question,
                    answerChoices: QA[20].choices
                });
                API.updatePlayer(currentID, {jupiter: true})
                .then(res => console.log(res.data.jupiter))
                .catch(err => console.log(err));
                break;
            case "Head to the surface!":
                this.setState({
                    question: QA[21].question,
                    answerChoices: QA[21].choices
                });
                break;
            case "Stay in the outermost part of the atmosphere.":
            case "Keep exploring Jupiter!":
                this.setState({
                    question: QA[22].question,
                    answerChoices: QA[22].choices
                });
                break;
            case "No way! That seems dangerous.":
                this.setState({
                    question: QA[23].question,
                    answerChoices: QA[23].choices
                });
                break;
            case "Saturn":
                this.searchBodies("saturn");
                this.setState({
                    question: QA[24].question,
                    answerChoices: QA[24].choices
                });
                API.updatePlayer(currentID, {saturn: true})
                .then(res => console.log(res.data.saturn))
                .catch(err => console.log(err));
                break;
            case "Send the ship through the ring system to get a closer look at the atmosphere.":
                this.setState({
                    question: QA[25].question,
                    answerChoices: QA[25].choices
                });
                // Set flag in DB here
                API.updatePlayer(currentID, {box2: true})
                .then(res => {
                    console.log(res.data.box2);
                })
                .catch(err => console.log(err));
                break;
            case "Uranus":
                this.searchBodies("uranus");
                this.setState({
                    question: QA[26].question,
                    answerChoices: QA[26].choices
                });
                API.updatePlayer(currentID, {uranus: true})
                .then(res => console.log(res.data.uranus))
                .catch(err => console.log(err));
                break;
            case "Absolutely! Take me to the surface!":
                this.setState({
                    question: QA[27].question,
                    answerChoices: QA[27].choices
                });
                API.updatePlayer(currentID, {freeze: true})
                .then(res => console.log(res.data.freeze))
                .catch(err => console.log(err));
                break;
            case "Hooray!":
            case "Observe from a distance.":
            case "Now your curiosity is really kicking into gear. Who has sent you on this mission?":
            case "We’re so far from home… and I don’t think that’s safe.":
                this.setState({
                    question: QA[28].question,
                    answerChoices: QA[28].choices
                });
                break;
            case "'I still have to complete my mission.'":
                this.setState({
                    question: QA[29].question,
                    answerChoices: QA[29].choices
                });
                break;
            case "Neptune":
                this.setState({
                    question: QA[30].question,
                    answerChoices: QA[30].choices
                });
                API.updatePlayer(currentID, {neptune: true})
                .then(res => console.log(res.data.neptune))
                .catch(err => console.log(err));
                break;
            case "Pluto":
                this.setState({
                    question: QA[31].question,
                    answerChoices: QA[31].choices
                });
                API.updatePlayer(currentID, {pluto: true})
                .then(res => console.log(res.data.pluto))
                .catch(err => console.log(err));
                break;
            case "Land nearby and check it out.":
                this.setState({
                    question: QA[32].question,
                    answerChoices: QA[32].choices
                });
                API.updatePlayer(currentID, {land: true})
                .then(res => console.log(res.data.land))
                .catch(err => console.log(err));
                break;
            case "Yes! You have exactly what they need.":
            case "You’re not sure what they’re talking about…":
                API.getPlayer(currentID)
                .then(res => {
                    if (res.data.box1 || res.data.box2) {
                        this.setState({
                            question: QA[34].question,
                            answerChoices: QA[34].choices
                        });
                    }
                    else {
                        this.setState({
                            question: QA[33].question,
                            answerChoices: QA[33].choices
                        });
                    }
                })
                .catch(err => console.log(err));
                break;
            case "Maybe we take you to the results page now?":
            case "There's no place like home!":
            case "This was great, but please take me home!":
            case "Get out of there while you still have your skin.":
                window.location.href = window.location + "results";
                break;
            case "I’m ready for more!":
                API.updatePlayer(currentID, {deepSpace: true})
                .then(res => console.log(res.data.deepSpace))
                .catch(err => console.log(err));    
                window.location.href = window.location + "results";
                break;
            default:
                console.log("ERRRROROROROR");
                alert("Whoops! Looks like I didn't add a case for that one...")
        }
    }

    componentDidMount() {
        this.searchBodies("earth");
    };

  searchBodies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid={true}>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <Row>
          {!this.state.isHidden && (
            <Animation image={this.state.image} alt={this.state.alt} />
          )}
          {!this.state.isHidden && (
            <SpaceAPI
              englishName={this.state.result.englishName}
              isPlanet={this.state.result.isPlanet}
              moons={
                this.state.result.moons
                  ? this.state.result.moons.length
                  : "No Moons"
              }
              discoveredBy={this.state.result.discoveredBy}
              discoveryDate={this.state.result.discoveryDate}
              gravity={this.state.result.gravity}
              radius={this.state.result.equaRadius}
              satelliteOf="Earth"
            />
          )}
        </Row>
        {!this.state.isHidden && (
          <Row>
            <QADisplay
              question={this.state.question}
              choices={this.state.answerChoices}
              nextQuestion={this.nextQuestion}
            />
          </Row>
        )}
        {!this.state.isHiddenForm && (
          <IntroForm
            toggleHidden={
              this.state.playerName === ""
                ? this.open
                : this.toggleHidden.bind(this)
            }
            value={this.state.playerName}
            name="playerName"
            onChange={this.handleInputChange}
            // id="intro-form"
          />
        )}
        <Modal id="modal-style" show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
            <h4>Please Enter Your Name</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default Home;
