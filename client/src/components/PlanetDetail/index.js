import React from "react";
import { Card } from 'react-bootstrap';
const moment = require("moment");

function PlanetDetail (props) {
    if (props.discoveredBy) {
        return (
            <Card.Body>
                <Card.Title>Name: {props.englishName}</Card.Title>
                <Card.Text>
                    <h6>Number of Moons: {props.moons}</h6>
                    <h6>Discovered By: {props.discoveredBy}</h6>
                    <p>{props.englishName} was discovered about {moment(props.discoveryDate, "DD/MM/YYYY").fromNow()} on {moment(props.discoveryDate, "DD/MM/YYYY").format("MMMM Do YYYY")}</p>
                    <h6>Gravity: {props.gravity} m/s<sup>2</sup></h6>
                    <p>If you weighed 100lbs on Earth you would weigh about {parseInt((props.gravity/9.8)*100)}lbs here!</p>
                    <h6>Diameter: {2*(props.radius)} Kilometers</h6>
                    <p>That is about {parseInt(((2*(props.radius))/12742)*100)}% of Earth's diameter!</p>
                </Card.Text>
            </Card.Body>
        );
    } else {
        return (
            <Card.Body>
                <Card.Title>Name: {props.englishName}</Card.Title>
                <Card.Text>
                    <h6>Number of Moons: {props.moons}</h6>
                    <h6>Gravity: {props.gravity} m/s<sup>2</sup></h6>
                    <p>If you weighed 100lbs on Earth you would weigh about {parseInt((props.gravity/9.8)*100)}lbs here!</p>
                    <h6>Diameter: {2*(props.radius)} Kilometers</h6>
                    <p>That is about {parseInt(((2*(props.radius))/12742)*100)}% of Earth's diameter!</p>
                </Card.Text>
            </Card.Body>
        );
    }
};

export default PlanetDetail;