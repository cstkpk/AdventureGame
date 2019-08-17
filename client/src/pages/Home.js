import React, { Component } from "react";
import QA from "../data/questions.json";
import QADisplay from "../components/QADisplay"

class Home extends Component {

    state = {
        QA,
        question: QA[0].question,
        // answerChoices: [],
        answerChoices: QA[0].choices,
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
                <QADisplay
                question={this.state.question}
                answers={this.state.answerChoices}
                />
            </div>
        );
    }

};

export default Home;