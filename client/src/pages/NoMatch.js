import React from "react";
import { Container } from "react-bootstrap";
import "./NoMatch.css";

function NoMatch () {
    return (
        <Container fluid={true}>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className="jumbotron bg-transparent text-light text-center">
                <h1 className="noMatch-text noMatch">404 Page Not Found</h1>
                <h3 className="noMatch-text">Oh no! You seem to have gotten lost on your journey.</h3>
                <h5 className="noMatch-text">Follow this path to find your way back.</h5>
                <a href="/" className="btn btn-light text-dark mt-3 noMatch-text">Home</a>
            </div> 
        </Container>
    );
};

export default NoMatch;