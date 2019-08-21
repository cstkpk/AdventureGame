import React from "react";
import { Card } from 'react-bootstrap';
const moment = require("moment");

function MoonDetail(props) {
    if (props.discoveredBy) {
        return (
            <Card.Body>
                <Card.Title>Name: {props.englishName}</Card.Title>
                <ul className="list-unstyled">
                    <li><strong>Satellite of: </strong>{props.satelliteOf}</li>
                    <li><strong>Discovered By: </strong>{props.discoveredBy}</li>
                    <li>{props.englishName} was discovered about {moment(props.discoveryDate, "DD/MM/YYYY").fromNow()} on {moment(props.discoveryDate, "DD/MM/YYYY").format("MMMM Do YYYY")}</li>        
                    <li><strong>Gravity: </strong>{props.gravity} m/s<sup>2</sup></li>
                    <li>If you weighed 100lbs on Earth you would weigh about {parseInt((props.gravity/9.8)*100)}lbs here!</li>
                    <li><strong>Diameter: </strong>{2*(props.radius)} Kilometers</li>
                    <li>That is about {parseInt(((2*(props.radius))/12742)*100)}% of Earth's diameter!</li>
                </ul>
            </Card.Body>
        );
    } else {
        return (
            <Card.Body>
                <Card.Title>Name: {props.englishName}</Card.Title>
                <ul className="list-unstyled">
                    <li><strong>Satellite of: </strong>{props.satelliteOf}</li>
                    <li><strong>Gravity: </strong>{props.gravity} m/s<sup>2</sup></li>
                    <li>If you weighed 100lbs on Earth you would weigh about {parseInt((props.gravity/9.8)*100)}lbs here!</li>
                    <li><strong>Diameter: </strong>{2*(props.radius)} Kilometers</li>
                    <li>That is about {parseInt(((2*(props.radius))/12742)*100)}% of Earth's diameter!</li>
                </ul>
            </Card.Body>
        );
    }
}

export default MoonDetail;
