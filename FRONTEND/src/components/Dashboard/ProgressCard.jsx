import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
// import { ThemeContext } from "../../App";

import "./topicCard.css";

export default function ProgressCard({ questionData }) {
  // const dark = useContext(ThemeContext);

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
        // <Fade duration={500 + index * 0.4} key={index}>
        <div className="col mb-4">
          <Link
            to={`/${topic.topicName
              .replace(/[^A-Z0-9]+/gi, "_")
              .toLowerCase()}`}
            style={{ textDecoration: "none" }}
          >
            <Card
              className={`mb-3 inprogress-card animate__slideInDown hvr-grow 
                `}
            >
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title className="topicName">
                      {topic.topicName}
                    </Card.Title>
                  </Col>
                  <Col>
                    <h4>
                      <Badge
                        pill
                        variant="success"
                        className="float-right"
                        style={{ fontWeight: "500", cursor: "pointer" }}
                      >
                        {questionsRemainig === 0 ? "Done 👏🏻" : "Solve Now 🙇🏻‍♂️"}
                      </Badge>
                    </h4>
                  </Col>
                </Row>
                <Card.Text className="totalQuestion">
                  Total Questions {topic.questions.length} <br />
                  {`${questionsRemainig}`} More to go
                </Card.Text>
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
        // </Fade>
      );
    } else {
      return (
        // <Fade duration={500 + index * 50} key={index}>
        <div className="col mb-4">
          <Link
            to={`/${topic.topicName
              .replace(/[^A-Z0-9]+/gi, "_")
              .toLowerCase()}`}
            style={{ textDecoration: "none" }}
          >
            <Card className={`mb-3 notstarted-card hvr-grow `}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title className="topicName"> {topicName} </Card.Title>
                  </Col>
                  <Col>
                    <h4>
                      <Badge
                        pill
                        variant="primary"
                        className="float-right"
                        style={{ fontWeight: "500", cursor: "pointer" }}
                      >
                        Start Now
                      </Badge>
                    </h4>
                  </Col>
                </Row>
                <Card.Text className="totalQuestion">
                  Total Questions {questions.length}
                </Card.Text>
                <p className="percentDone mb-1">
                  <b>
                    <i>Not yet started</i>
                  </b>
                </p>
              </Card.Body>
            </Card>
          </Link>
        </div>
        // </Fade>
      );
    }
  });
  console.log(totalSolved, totalQuestions);
  return (
    <>
      <h4 className="text-center mb-4">
        {/* {totalSolved
          ? `Total Questions Solved : ${totalSolved} (${(
              (totalSolved / totalQuestions) *
              100
            ).toFixed(2)}% Done)`
          : "Start Solving"} */}
        {/* <p className="percentDone container mt-1">
          {totalSolved ? (
            <ProgressBar
              animated={
                ((totalSolved / totalQuestions) * 100).toFixed(2) === "100"
                  ? false
                  : true
              }
              variant="success"
              now={((totalSolved / totalQuestions) * 100).toFixed(2)}
              style={{ margin: "0.2em 5em" }}
            />
          ) : null}
        </p> */}
      </h4>
      {/* <div className="container container-custom">
        <div className="row row-cols-1 row-cols-md-3 mt-3 grids">
          {ProgressCard}
        </div>
      </div> */}
      <div
        style={{ overflow: "hidden", paddingBottom: "20px" }}
        className="d-flex flex-nowrap justify-content-flex-start"
      >
        <Row>
          <span className="title-span">Dashboard</span>
          <div className="d-flex flex-wrap container-fluid">
            <Col
              lg={3}
              className="d-inline"
            >
              <Card
                className="sheet-body"
                style={{
                  width: "18rem",
                  height: "30rem",
                  // backgroundColor: "red",
                  position: "fixed",
                }}
              >
                <Card.Body>
                  <Card.Title className="sheet-title">
                    {/* {sheet == 1
                      ? "Striver's sheet"
                      : sheet == 2
                      ? "DSA Sheet by Fraz"
                      : "450 DSA"} */}
                  </Card.Title>
                  <Card.Subtitle className="sheet-subtitle mb-4 text-muted">
                    Name
                  </Card.Subtitle>

                  <Card.Title className="sheet-title">
                    Total No. of Questions
                  </Card.Title>
                  <Card.Subtitle className="sheet-subtitle mb-4 text-muted">
                    {totalQuestions}
                  </Card.Subtitle>

                  <Card.Title className="sheet-title">
                    Total No. of Solved Questions
                  </Card.Title>
                  <Card.Subtitle className="sheet-subtitle mb-4 text-muted">
                    {totalSolved
                      ? `${totalSolved} (${(
                          (totalSolved / totalQuestions) *
                          100
                        ).toFixed(2)}% Done)`
                      : "0"}
                  </Card.Subtitle>

                  <Card.Title className="sheet-title">
                    Total No. of Unsolved Questions
                  </Card.Title>
                  <Card.Subtitle className="sheet-subtitle mb-4 text-muted">
                    {totalQuestions - totalSolved
                      ? `${totalQuestions - totalSolved} (${(
                          ((totalQuestions - totalSolved) / totalQuestions) *
                          100
                        ).toFixed(2)}% Done)`
                      : "totalQuestions"}
                  </Card.Subtitle>

                  <Card.Title className="sheet-title">Favourites</Card.Title>
                  <Card.Subtitle className="sheet-subtitle mb-4 text-muted">
                    xx Questions
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col className="px-0">
              <Row xs={1} md={3} className="mx-0 px-0 g-3 order-2">
                {ProgressCard}
              </Row>
            </Col>
          </div>
        </Row>
      </div>
    </>
  );
}
