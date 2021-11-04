import { React, useEffect, useState } from "react";
import { Card, Col, ProgressBar, Button } from "react-bootstrap";
import "./DashboardQ.css";
import { Link } from "react-router-dom";

export default function ProgressCard(props) {
  const [Topic, setTopic] = useState([]);
  const [api, setApi] = useState([]);
  useEffect(() => {
    const url = "https://qode-msc.herokuapp.com/api/qode/sheet1?topic=Array";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setApi(url);
        setTopic(json.questions[0].topic);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  console.log("Topic : ", Topic);
  const progress = 70;

  let guess = "default";
  let btnText = "Start Now";
  let guessBtn = "outline-primary";
  let cardsSubtitle = "Not started yet";
  let x = 8;

  if (progress <= 0) {
    guess = "primary";
    btnText = "Start Now";
    guessBtn = "outline-primary";
    cardsSubtitle = "Not started yet";
  } else if (progress >= 1 && progress <= 99) {
    guess = "warning";
    btnText = "Continue";
    guessBtn = "outline-warning";
    cardsSubtitle = x + " more questions left";
  } else if (progress >= 100) {
    guess = "success";
    btnText = "Completed";
    guessBtn = "outline-success";
    cardsSubtitle = "No questions left";
  }
  return (
    <>
      <Col className="px-auto" key={props.ke}>
        <Card className="card-temp" style={{ width: "20rem", height: "14rem" }}>
          <Card.Body>
            <Card.Title className="sheet-title mb-3">{Topic}</Card.Title>
            <Card.Subtitle className="sheet-subtitle mb-3 text-muted">
              Total Questions: xx
            </Card.Subtitle>
            <Card.Subtitle className="sheet-subtitle mb-4 text-muted">
              {cardsSubtitle}
            </Card.Subtitle>
            <ProgressBar
              className="mb-2"
              now={progress}
              variant={guess}
              label={`${progress}%`}
            />
            <div className="d-flex justify-content-end">
              <Link
                to={{
                  pathname: "/questions",
                  state: { api },
                }}
              >
                <Button
                  className="h3 border-0 mx-2 my-2 font-weight-medium"
                  variant={guessBtn}
                >
                  <strong>{btnText}</strong>
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
