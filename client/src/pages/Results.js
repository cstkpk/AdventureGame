import React, { Component } from "react";
import API from "../utils/API";

class Results extends Component {
    state = {
        element1: ""
    }

    componentDidMount() {
        var currentID = JSON.parse(sessionStorage.getItem("playerID"));
        API.getPlayer(currentID)
            .then(res => {
                this.setState({
                    element1: res.data.playerChoices[0]
                })
            })
            .catch(err => console.log(err));
    }


    render() {
        return(
            <div>
                <p>This might be a results page?</p>
                <p>{this.state.element1}</p>
            </div>
        );
    };

}

export default Results;