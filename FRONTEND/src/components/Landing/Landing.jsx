import React from "react";
// import Lottie from "react-lottie";
// import animationData from "./lottie/final.json";
//Importing CSS
// import "../Landing/Landing.css";
import "../Landing/parallax.css";

//Importing the Image of The Landing Page
import { ReactComponent as Code2SVG } from "./Images/Code2.svg";
import { ReactComponent as Qode } from "./Images/qode_white.svg";

import qode_white from "./Images/qode_white.png";

//Importing the React-BootStrap Components
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Features() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  const alignCenter = { display: 'flex', alignItems: 'center' }

  return (
    <div className="landing">
      {/* NavBar of The Landing Page */}
      <div className="background" />
      <Parallax pages={6} style={{ top: '0', left: '0' }}>

        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className="scrollText">Practice Compete Qode.</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className="parallax-card sticky">
            <p style={{ fontSize: '6rem' }}>Qode</p>
            <p style={{ fontSize: '3rem' }}>by MSC KIIT</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="parallax-card parallax purple">
            <p style={{ fontSize: '5rem' }}>Code</p>
            <p>
              <ul>
                <li>Full Fledged IDE with C++, Java, Python and more support!</li>
                <li>VS-Code key binds supported out of the box</li>
              </ul>
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.1} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="parallax-card parallax blue">
            <p style={{ fontSize: '5rem' }}>Practice</p>
            <p>
              <ul>
                <li>Over 1000+ questions of Data Structures and Algorithms</li>
                <li>From LeetCode, GeeksForGeeks, CodeChef, CodeForces, SPOJ, AtCoder and more!</li>
                <li>Curated by industry experts - and trusted by hundreds of thousands.</li>
              </ul>
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.1} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className="parallax-card parallax orange">
            <p style={{ fontSize: '5rem' }}>Compete</p>
            <p>Compete with hundreds of other coders at our home-brewed hackathons.</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={3} factor={5} className="glassmorphic" />

        <ParallaxLayer
          offset={4}
          speed={0.5}
          pages={2}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <p className="scrollText overhead">We got you covered 💪</p>

          <Container>
            <Row className="para-why">
              <Col xs={12} md={6}>
                <div>
                  <p style={{ fontSize: '4rem' }}>User Centric Dashboard</p>
                  <p style={{ fontSize: '1.5rem' }}>Track your progress efiiciently in one place. ⭐</p>
                  <p style={{ fontSize: '1.5rem' }}>Overall Progress + Topic Wise Progress + Total Progress Graph 🚀</p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <img className="landingImg" src="https://user-images.githubusercontent.com/60937304/141608542-16c5242f-aa57-4778-bfed-dc01aa58e235.png" />
              </Col>
            </Row>

            <Row className="para-why">
              <Col xs={12} md={6}>
                <img className="landingImg" src="https://user-images.githubusercontent.com/60937304/141608542-16c5242f-aa57-4778-bfed-dc01aa58e235.png" />
              </Col>
              <Col xs={12} md={6}>
                <div>
                  <p style={{ fontSize: '4rem' }}>User Centric Dashboard</p>
                  <p style={{ fontSize: '1.5rem' }}>Track your progress efiiciently in one place. ⭐</p>
                  <p style={{ fontSize: '1.5rem' }}>Overall Progress + Topic Wise Progress + Total Progress Graph 🚀</p>
                </div>
              </Col>
            </Row>

            <Row className="para-why">
              <Col xs={12} md={6}>
                <div>
                  <p style={{ fontSize: '4rem' }}>User Centric Dashboard</p>
                  <p style={{ fontSize: '1.5rem' }}>Track your progress efiiciently in one place. ⭐</p>
                  <p style={{ fontSize: '1.5rem' }}>Overall Progress + Topic Wise Progress + Total Progress Graph 🚀</p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <img className="landingImg" src="https://user-images.githubusercontent.com/60937304/141608542-16c5242f-aa57-4778-bfed-dc01aa58e235.png" />
              </Col>
            </Row>
          </Container>
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={6}
          speed={0.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <div className="parallax-card blue">
            <p style={{ fontSize: '6rem' }}>Qode</p>
            <p style={{ fontSize: '3rem' }}>by MSC KIIT</p>
          </div>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}
