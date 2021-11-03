import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import "./DashboardQ.css";
import ProgressCard from "./ProgressCard";

const DashboardQ = (props) => {
  const location = useLocation();
  const sheet = location.state?.sheetid;
  const [topiclist, setTopicList] = useState([]);

  useEffect(() => {
    let url;
    if (sheet == 1) {
      url = "https://qode-msc.herokuapp.com/api/qode/sheet1";
    } else if (sheet == 2) {
      url = "https://qode-msc.herokuapp.com/api/qode/sheet2";
    } else if (sheet == 3) {
      url = "https://qode-msc.herokuapp.com/api/qode/sheet3";
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setTopicList(json.questions);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  console.log("topic list", topiclist);
  
  return (
    <div
      style={{ overflow: "hidden", paddingBottom: "20px" }}
      className="d-flex flex-nowrap justify-content-flex-start"
    >
      <Row>
        <span className="title-span">Hi, Username</span>
        <div className="d-flex flex-wrap container-fluid">
          <Col lg={3} className="d-inline">
            <Card
              className="sheet-body"
              style={{ width: "18rem", height: "30rem" }}
            >
              <Card.Body>
                <Card.Title className="sheet-title">Sheet Name</Card.Title>
                <Card.Subtitle className="sheet-subtitle mb-4 text-muted">
                  Name
                </Card.Subtitle>

                <Card.Title className="sheet-title">
                  Total No. of Questions
                </Card.Title>
                <Card.Subtitle className="sheet-subtitle mb-4 text-muted">
                  xx Questions
                </Card.Subtitle>

                <Card.Title className="sheet-title">
                  Total No. of Solved Questions
                </Card.Title>
                <Card.Subtitle className="sheet-subtitle mb-4 text-muted">
                  xx Questions (xx % done)
                </Card.Subtitle>

                <Card.Title className="sheet-title">
                  Total No. of Unsolved Questions
                </Card.Title>
                <Card.Subtitle className="sheet-subtitle mb-4 text-muted">
                  xx Questions (xx % left)
                </Card.Subtitle>

                <Card.Title className="sheet-title">Favourites</Card.Title>
                <Card.Subtitle className="sheet-subtitle mb-4 text-muted">
                  xx Questions
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col className="px-0">
            <Row xs={2} md={3} className="mx-0 px-0 g-4 order-2">
              {/* {Array.from({ length: 12 }).map((_, idx) => ( */}
              <ProgressCard key="1" />
              <ProgressCard key="2" />
              <ProgressCard key="3" />
              <ProgressCard key="4" />
              <ProgressCard key="5" />
              <ProgressCard key="6" />
              <ProgressCard key="7" />
              <ProgressCard key="8" />
              <ProgressCard key="9" />
              <ProgressCard key="10" />
              <ProgressCard key="11" />
              <ProgressCard key="12" />

              {/* ))} */}
            </Row>
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default DashboardQ;
