import React from "react";
import { Card, Col } from "react-bootstrap";
import PlanetDetail from "../PlanetDetail";
import MoonDetail from "../MoonDetail";

function SpaceAPI(props) {
  if (props.englishName === "Earth") {
    return (
      <Col md={{ span: 4 }}>
        <Card>
          <Card.Body>
            <Card.Title>Earth</Card.Title>
            <ul className="list-unstyled">
              <li>
                <strong>Number of Moons: </strong>1
              </li>
              <li>
                <strong>Gravity: </strong>9.8 m/s<sup>2</sup>
              </li>
              <li>
                <strong>Diameter: </strong>12,742 Kilometers
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    );
  } else {
    return (
      <Col md={{ span: 4 }}>
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
  }
}

export default SpaceAPI;
