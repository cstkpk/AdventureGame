import React, { Component } from "react";
import API from "../utils/API";
import { Container, Card } from 'react-bootstrap';
import story from "../data/results.json";
import "./Home.css";

class Results extends Component {
    constructor() {
        super()
        this.state = {
            user: {

            }
        }
    }
    // state = {
    //     element1: ""
    // }

    componentDidMount() {
        var currentID = JSON.parse(sessionStorage.getItem("playerID"));
        API.getPlayer(currentID)
            .then(res => {
                this.setState({
                    user: res.data
                    // element1: res.data.element1
                })
                console.log(this.state.user);
            })
            .catch(err => console.log(err));
    }

    

    render() {
        return(
            <Container fluid={true}>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <Card id="results-text" className="mt-3">
                    <Card.Body>
                        {/* <Card.Text> */}
                            <p>{`${this.state.user.playerName}:`}</p>
                            <p>{this.state.user.hufflepuff ? "Sorry, we heard you were in Hufflepuff?" : ""}</p>
                            <p>{this.state.user.hufflepuff === false ? story[0].text : ""}</p>
                            <p>{this.state.user.hufflepuff === false ? this.state.user.moon ? `${story[2].text}` : `${story[1].text}` : ""}</p>
                            <p>{this.state.user.mercury ? this.state.user.box1 ? `${story[3].text} ${story[4].text}` : `${story[3].text}` : ""}</p>
                            <p>{this.state.user.venus? this.state.user.shipDestruction ? `${story[6].text}` : `${story[5].text}` : ""}</p>
                            <p>{this.state.user.mars ? this.state.user.dustStorm ? `${story[8].text}` : `${story[7].text}` : ""}</p>
                            <p>{this.state.user.jupiter ? this.state.user.shipDestruction ? `${story[10].text}` : `${story[9].text}` : ""}</p>
                            <p>{this.state.user.saturn ? this.state.user.box2 ? `${story[11].text} ${story[12].text}` : `${story[11].text}` : ""}</p>
                            <p>{this.state.user.uranus ? this.state.user.freeze ? `${story[13].text} ${story[14].text}` : `${story[13].text}` : ""}</p>
                            <p>{this.state.user.neptune ? `${story[15].text}`: ""}</p>
                            <p>{this.state.user.pluto ? this.state.user.land ? this.state.user.box1 || this.state.user.box2 ? `${story[18].text}` : `${story[17].text}` : `${story[16].text}` : ""}</p>
                            <p>{this.state.user.moon ? this.state.user.deepSpace ? `${story[20].text}` : `${story[19].text}`: ""}</p>
                        {/* </Card.Text> */}
                    </Card.Body>
                </Card>
            </Container>
        );
    };

}

export default Results;