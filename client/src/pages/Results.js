import React, { Component } from "react";
import API from "../utils/API";

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
            <div>
                <p>This might be a results page?</p>
                <p>{this.state.user.element1 ? "true" : "false"}</p>
            </div>
        );
    };

}

export default Results;