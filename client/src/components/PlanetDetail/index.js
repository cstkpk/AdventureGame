import React from "react";
import { Card } from 'react-bootstrap';
const moment = require("moment");

function PlanetDetail (props) {
    if (props.discoveredBy) {
        return (
            <Card.Body>
                <Card.Title>{props.englishName}</Card.Title>
                <ul className="list-unstyled">
                    <li><strong>Number of Moons: </strong>{props.moons}</li>
                    <li><strong>Discovered By: </strong>{props.discoveredBy}</li>
                    <li>{props.englishName} was discovered about {moment(props.discoveryDate, "DD/MM/YYYY").fromNow()} on {moment(props.discoveryDate, "DD/MM/YYYY").format("MMMM Do YYYY")}</li>
                    <li><strong>Gravity: </strong>{props.gravity} m/s<sup>2</sup></li>
                    <li>If you weighed 100lbs on Earth you would weigh about {parseInt((props.gravity/9.8)*100)}lbs here!</li>
                    <li><strong>Diameter: </strong>{parseInt(2*(props.radius)).toLocaleString()} Kilometers</li>
                    <li>That is about {parseInt(((2*(props.radius))/12742)*100).toLocaleString()}% of Earth's diameter!</li>
                </ul>
            </Card.Body>
        );
    } else {
        return (
            <Card.Body>
                <Card.Title>{props.englishName}</Card.Title>
                <ul className="list-unstyled">
                    <li><strong>Number of Moons: </strong>{props.moons}</li>
                    <li><strong>Gravity: </strong>{props.gravity} m/s<sup>2</sup></li>
                    <li>If you weighed 100lbs on Earth you would weigh about {parseInt((props.gravity/9.8)*100)}lbs here!</li>
                    <li><strong>Diameter: </strong>{parseInt(2*(props.radius)).toLocaleString()} Kilometers</li>
                    <li>That is about {parseInt(((2*(props.radius))/12742)*100).toLocaleString()}% of Earth's diameter!</li>
                </ul>
            </Card.Body>
        );
    }
};

export default PlanetDetail;