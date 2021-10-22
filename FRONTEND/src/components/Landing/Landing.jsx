import React from "react";
import Lottie from "react-lottie";
import animationData from "./lottie/final.json";
//Importing CSS
import "../Landing/Landing.css";

//Importing the Image of The Landing Page
import { ReactComponent as Code2SVG } from "./Images/Code2.svg";
import { ReactComponent as Qode } from "./Images/qode_white.svg";

import qode_white from "./Images/qode_white.png";

//Importing the React-BootStrap Components
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";

export default function Features() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      {/* NavBar of The Landing Page */}

      <div className="Landing-desc d-flex" id="home">
        <Container className="d-flex">
          <Row className="justify-content-center">
            <Col md={{ span: 5, order: "last" }} className="mx-auto my-auto">
              {/* <Code2SVG width="80%" /> */}
              <Lottie
                style={{ pointerEvents: "none" }}
                options={defaultOptions}
                height={400}
                width={400}
              />
            </Col>
            <Col md={{ span: 7, order: "first" }} className="mx-auto my-auto">
              <span className="desc-text">
                Your one stop online portal to code, practice and learn from
                zero to expert.
              </span>
              <br />
              <Button
                href="/dashboard"
                size="lg"
                variant="primary"
                className="btn-xs-block w-4 py-3 land-button"
              >
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
