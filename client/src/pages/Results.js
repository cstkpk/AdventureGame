import React, { Component } from "react";
import API from "../utils/API";
import { Container } from 'react-bootstrap';
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
                <p>This might be a results page?</p>
                <p>{this.state.user.element1 ? "true" : "false"}</p>
            </Container>
        );
    };

}

export default Results;