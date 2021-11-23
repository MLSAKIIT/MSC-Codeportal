import React, { Component, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";
import { Pie, Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import Aos from "aos";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import profile from "./images/Profile.jpeg";
import ScrollButton from "react-scroll-button";
import "aos/dist/aos.css";
import "./topicCard.css";
import { Switch } from "@mui/material";

export default function ProgressCard({ questionData }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // This component takes all the topicsData(here questionData ) and renders a TopicCard Component

  // Utility func() to find the progress in percentage
  const findPercentage = (doneQuestions, totalQuestions) => {
    return Math.round((doneQuestions / totalQuestions) * 100);
  };

  let totalSolved = 0;
  let totalQuestions = 0;

  // Mapping questionData to topicCard array
  let ProgressCard = questionData.map((topic, index) => {
    let { topicName, doneQuestions, questions, started } = topic;
    let percentDone = findPercentage(doneQuestions, questions.length);
    let questionsRemainig = questions.length - doneQuestions;

    //adding solved questions of every topic to totalSolved
    totalSolved += doneQuestions;
    totalQuestions += questions.length;

    if (started) {
      return (
        <Fade duration={500 + index * 0.4} key={index}>
          <div
            className="col mb-6"

            // style={{ backgroundColor: "yellow" }}
          >
            <Link
              to={`/sheet1/${topic.topicName
                .replace(/[^A-Z0-9]+/gi, "_")
                .toLowerCase()}
                `}
              style={{ textDecoration: "none" }}
            >
              <Card
                className={`mb-4 inprogress-card animate__slideInDown hvr-grow 
                `}
              >
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title className="topicName">
                        {topic.topicName}
                      </Card.Title>
                    </Col>
                  </Row>

                  <Card.Text className="totalQuestion">
                    Total Questions {topic.questions.length} <br />
                    {`${questionsRemainig}`} More to go
                  </Card.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "15px",
                    }}
                  >
                    <h4>
                      <Badge
                        pill
                        variant="success"
                        className="float-right btn"
                        style={{ fontWeight: "500", cursor: "pointer" }}
                      >
                        {questionsRemainig === 0 ? "Done 👏🏻" : "Solve Now 👩🏻‍💻"}
                      </Badge>
                    </h4>
                  </div>
                  <p className="percentDone mb-1">
                    <b>{percentDone}% Done</b>
                  </p>
                  <ProgressBar
                    animated={percentDone === 100 ? false : true}
                    variant="success"
                    now={percentDone}
                  />
                </Card.Body>
              </Card>
            </Link>
          </div>
        </Fade>
      );
    } else {
      return (
        <Fade duration={500 + index * 50} key={index}>
          <div className="col mb-6">
            <Link
              to={`/sheet1/${topic.topicName
                .replace(/[^A-Z0-9]+/gi, "_")
                .toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <Card className={`mb-3 notstarted-card hvr-grow `}>
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title className="topicName float-left">
                        {" "}
                        {topicName}{" "}
                      </Card.Title>
                    </Col>
                  </Row>

                  <Card.Text className="totalQuestion">
                    Total Questions {questions.length}
                  </Card.Text>
                  <p
                    className="percentDone mb-1"
                    style={{ textAlign: "center" }}
                  >
                    <b>
                      <i className="not-started">Not yet started</i>
                    </b>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "15px",
                    }}
                  >
                    <h4>
                      <Badge
                        pill
                        className="float-right btn"
                        style={{ fontWeight: "500", cursor: "pointer" }}
                      >
                        Start Now 🚀
                      </Badge>
                    </h4>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
        </Fade>
      );
    }
  });
  console.log(totalSolved, totalQuestions);

  const data = {
    labels: ["Unsolved", "Solved"],
    datasets: [
      {
        label: "progress",
        data: [totalQuestions - totalSolved, totalSolved],
        backgroundColor: ["#e022013f", "#6dcb6369"],
        borderColor: ["#E02401", "#6ECB63"],
        borderWidth: 2,
      },
    ],
    borderRadius: "2px",
  };

  return (
    <>
      <div style={{ backgroundColor: "#e0e5ec" }}>
        <div className="header-background" id="target">
          <div className="header-title" data-aos="zoom-in-down">
            <h1 className="sheet-heading">DSA sheet by Fraz.</h1>
          </div>
        </div>
        <Container className="hero">
          <Row className="dashboard-container ">
            {/* <div className="dashboard-container "> */}
            <Col
              lg={4}
              md={12}
              sm={12}
              className="progress-update"
              style={{
                // backgroundColor: "yellow",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Card className="boxes-1">
                <div className="circle">
                  <img src={profile} alt="" className="circle-img" />
                </div>
                <div className="intro">
                  <h6 style={{ fontWeight: "600" }}>Welcome back,</h6>
                  <h4 style={{ fontWeight: "600" }}>Medhavi Basera</h4>
                </div>
              </Card>
              <Card className="boxes-2">
                <Card.Body>
                  <>
                    <div className="header">
                      <p className="title">Progress</p>
                    </div>
                    <Doughnut data={data} />
                  </>

                  {/* <PieChart data={(totalSolved, totalQuestions - totalSolved)} /> */}
                </Card.Body>
              </Card>
              <Card className="boxes-3">
                <Card.Body>
                  <div className="ques-data">
                    <p>Total questions </p>
                    <p> {totalQuestions}</p>
                  </div>
                  <div className="ques-data">
                    <p>Solved questions </p>
                    <p> {totalSolved}</p>
                  </div>
                  <div className="ques-data">
                    <p>Unsolved questions </p>
                    <p> {totalQuestions - totalSolved}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              lg={8}
              md={12}
              sm={12}
              className="card-col"
              // style={{ backgroundColor: "red" }}
              id="style-1"
            >
              <ScrollButton
                behavior={"smooth"}
                buttonBackgroundColor={"#acb6e5"}
                iconType={"arrow-up"}
                style={{ fontSize: "24px" }}
                targetId={"target"}
              />
              <Row xs={1} md={2} className="mx-5 px-0 g-2 order-2">
                {ProgressCard}
              </Row>
            </Col>
          </Row>
          {/* </div> */}
        </Container>
      </div>
    </>
  );
}
