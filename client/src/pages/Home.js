import React, { Component } from "react";
import QA from "../data/questions.json";

class Home extends Component {

    state = {
        QA,
        question: QA[0].question,
        answersChoices: [],
        chosen: ""
    };

    chooseQuestion = () => {
        let QA = [...this.state.QA];
        this.setState({ question: QA[0].question })
    }
    
    render() {
        return(
            <div>
                <p>Testing 1 2 3!</p>
                <p>Question one: {this.state.question}</p>
            </div>
        );
    }

};

export default Home;