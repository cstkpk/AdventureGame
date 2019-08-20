import React from "react";
import { Card, Col } from 'react-bootstrap';
import PlanetDetail from "../PlanetDetail";
import MoonDetail from "../MoonDetail";

function SpaceAPI (props) {
    return (
        <Col md={4}>
            <Card heading={props.englishName}>
                {props.isPlanet ? (
                    <PlanetDetail
                    englishName={props.englishName}
                    moons={props.moons}
                    discoveredBy={props.discoveredBy}
                    discoveryDate={props.discoveryDate}
                    gravity={props.gravity}
                    radius={props.radius}
                    />
                ) : (
                    <MoonDetail
                    englishName={props.englishName}
                    // satelliteOf={props.aroundPlanet ? (around) : ("not a satellite")}
                    satelliteOf="Earth"
                    discoveredBy={props.discoveredBy}
                    discoveryDate={props.discoveryDate}
                    gravity={props.gravity}
                    radius={props.radius}
                    />
                )}
            </Card>
        </Col>
    );
};

export default SpaceAPI;