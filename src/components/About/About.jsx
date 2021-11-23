import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

import { Card, CardGroup, Container } from "react-bootstrap";

export default function About() {
  return (
    <div id="about" className="About about-cont">
      <Container>
        {/* The Text Description Section */}
        <h1 className="header-about">Lorem Ipsum</h1>
        <p className="head-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Card Section */}
        <CardGroup className="group-card">
          <Card>
            <Card.Img className="Image img1" />
            <Card.Body>
              <Card.Title className="card-title">Lorem Ipsum</Card.Title>
              <Card.Text className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc
                hendrerit neque nec urna lobortis.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img className="Image img2" />
            <Card.Body>
              <Card.Title className="card-title">Lorem Ipsum</Card.Title>
              <Card.Text className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc
                hendrerit neque nec urna lobortis.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img className="Image img3" />
            <Card.Body>
              <Card.Title className="card-title">Lorem Ipsum</Card.Title>
              <Card.Text className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc
                hendrerit neque nec urna lobortis.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}
