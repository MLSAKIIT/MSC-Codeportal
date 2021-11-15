import { React, useEffect } from "react";
import "../Landing/parallax.css";
import Aos from "aos";
import landingimg from "./Images/Vector.svg";
import ide from "./Images/ide.png";
import dashboard from "./Images/dashboard.png";
import questions from "./Images/questions.png";
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Features() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div className="landing">
      <div className="background" />
      <Parallax pages={7} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1.3}
          className="layer-1"
          style={{
            ...alignCenter,
            justifyContent: "center",
          }}
        >
          <img
            style={{
              position: "absolute",
              zIndex: "-1",
            }}
            src={landingimg}
            alt=""
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              // backgroundColor: "yellow",
              paddingTop: "5%",
            }}
          >
            <p
              style={
                {
                  // backgroundColor: "blue",
                }
              }
              className="scrollText"
              data-aos="zoom-in-down"
            >
              Practice Compete Qode.
            </p>
            <div
              style={{
                // backgroundColor: "green",
                width: "100%",
                padding: "50px 0px",
              }}
            >
              <Button variant="dark" className="cta-btn" href="/getstarted">
                Get started
              </Button>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1.2, end: 3.2 }}
          style={{
            ...alignCenter,
            justifyContent: "flex-start",
            // backgroundColor: "yellow",
          }}
        >
          <div className="parallax-card sticky">
            <p style={{ fontSize: "6rem" }}>Qode</p>
            <p style={{ fontSize: "3rem" }}>by MSC KIIT</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={0.1}
          style={{
            ...alignCenter,
            justifyContent: "flex-end",
          }}
        >
          <div className="parallax-card parallax purple">
            <p style={{ fontSize: "5rem" }}>Code</p>
            <p>
              <ul>
                <li>
                  Full Fledged IDE with C++, Java, Python and more support!
                </li>
                <li>VS-Code key binds supported out of the box</li>
              </ul>
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.2}
          speed={0.1}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="parallax-card parallax blue">
            <p style={{ fontSize: "5rem" }}>Practice</p>
            <p>
              <ul>
                <li>Over 1000+ questions of Data Structures and Algorithms</li>
                <li>
                  From LeetCode, GeeksForGeeks, CodeChef, CodeForces, SPOJ,
                  AtCoder and more!
                </li>
                <li>
                  Curated by industry experts - and trusted by hundreds of
                  thousands.
                </li>
              </ul>
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.2}
          speed={0.1}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="parallax-card parallax orange">
            <p style={{ fontSize: "5rem" }}>Compete</p>
            <p>
              Compete with hundreds of other coders at our home-brewed
              hackathons.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={3}
          factor={6}
          className="glassmorphic"
        />

        <ParallaxLayer
          offset={4.2}
          speed={0.5}
          pages={1}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="scrollText overhead">We got you covered 💪</p>

          <Container
          // style={{ backgroundColor: "#191A19" }}
          >
            <Row className="para-why">
              <Col xs={12} md={6}>
                <div>
                  <p style={{ fontSize: "4rem", color: "#fff" }}>
                    User Centric Dashboard
                  </p>
                  <p style={{ fontSize: "1.5rem", color: "#525252" }}>
                    Track your progress efficiently in one place. ⭐
                  </p>
                  <p style={{ fontSize: "1.5rem", color: "#525252" }}>
                    Overall Progress + Topic Wise Progress + Total Progress
                    Graph 🚀
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <img className="landingImg" src={dashboard} />
              </Col>
            </Row>

            <Row className="para-why">
              <Col xs={12} md={6}>
                <img className="landingImg-1" src={questions} />
              </Col>
              <Col xs={12} md={6}>
                <div>
                  <p
                    style={{
                      fontSize: "4rem",
                      color: "#fff",
                      textAlign: "right",
                    }}
                  >
                    Organized tables
                  </p>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      color: "#525252",
                      textAlign: "right",
                    }}
                  >
                    Keep a track of solved/unsolved questions efficiently 📑
                  </p>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      color: "#525252",
                      textAlign: "right",
                    }}
                  >
                    Visit the topic related questions in one click ✌🏻
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="para-why">
              <Col xs={12} md={6}>
                <div>
                  <p style={{ fontSize: "4rem", color: "#fff" }}>Online IDE</p>
                  <p style={{ fontSize: "1.4rem", color: "#525252" }}>
                    Supports languages like C, C++, Python, Java 👩🏻‍💻
                  </p>
                  <p style={{ fontSize: "1.4rem", color: "#525252" }}>
                    Code and compete at one place 🔥
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <img className="landingImg" src={ide} />
              </Col>
            </Row>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={0.1}
          pages={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="lastpage"
        >
          <h1 style={{ color: "#000", textAlign: "center" }}>
            Hi, if you are able to read this, it means you suck at coding :"){" "}
            <br />
            So start now !!
          </h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
