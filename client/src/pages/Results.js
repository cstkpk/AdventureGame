import React, { Component } from "react";
import API from "../utils/API";
import { Container, Card } from 'react-bootstrap';
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
                            <p>{this.state.user.element1 ? "true" : "false"}</p>
                            <p>{this.state.user.box1 || this.state.user.box2 ? "YOU FOUND THE BOXES yeehaw" : "You found NOTHING."}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        );
    };

}

export default Results;