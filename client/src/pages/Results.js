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
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <p>{`${this.state.user.playerName}:`}</p>
                            <p>{story[0].text}</p>
                            <p>{this.state.user.moon ? "Here's a story and some facts about your time on the moon!" : `${story[1].text}`}</p>
                            <p>{this.state.user.mercury ? this.state.user.box1 ? "Mercury facts + BOX 1!" : "Mercury facts" : ""}</p>
                            <p>{this.state.user.venus? this.state.user.shipDestruction ? "Venus facts and death" : "Venus facts" : ""}</p>
                            <p>{this.state.user.mars ? this.state.user.dustStorm ? "Mars facts and death" : "Mars facts and ice" : ""}</p>
                            <p>{this.state.user.jupiter ? this.state.user.shipDestruction ? "Jupiter facts and death" : "Jupiter facts" : ""}</p>
                            <p>{this.state.user.saturn ? this.state.user.box2 ? "Saturn facts + BOX 2!" : "Saturn facts" : ""}</p>
                            <p>{this.state.user.uranus ? this.state.user.freeze ? "Uranus facts and death" : "Uranus facts" : ""}</p>
                            <p>{this.state.user.neptune ? "Neptune facts and fly home": ""}</p>
                            <p>{this.state.user.pluto ? this.state.user.land ? this.state.user.box1 || this.state.user.box2 ? "Pluto facts and landing with the aliens and boxes" : "Pluto facts and landing with the aliens" : "Pluto facts and fly home" : ""}</p>
                            {/* <p>{this.state.user.box1 || this.state.user.box2 ? "YOU FOUND THE BOXES yeehaw" : "You found NOTHING."}</p> */}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        );
    };

}

export default Results;