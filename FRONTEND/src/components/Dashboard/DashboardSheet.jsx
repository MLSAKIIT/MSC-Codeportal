import { React, useState } from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import sheetimg from "../About/Images/Learn.svg";

const DashboardSheet = () => {
  //set url
  const [sheet, setsheet] = useState("");

  const sheet1 = () => {
    setsheet(1);
  };
  const sheet2 = () => {
    setsheet(2);
  };
  const sheet3 = () => {
    setsheet(3);
  };

  return (
    <div
      style={{ marginTop: "50px", overflow: "hidden", paddingBottom: "20px" }}
    >
      <Row xs={1} md={3} style={{ marginLeft: "20px" }} className="g-4">
        <Col>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to={{
              pathname: "/dashboard-set/sheet1",
              state: { sheetid: 1 },
            }}
          >
            <Card className="w-75" onClick={sheet1}>
              <Image src={sheetimg} roundedCircle />
              <Card.Body>
                <Card.Title>Striver's Sheet</Card.Title>
                <Card.Text className="px-2">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to={{
              pathname: "/dashboard-set/sheet2",
              state: { sheetid:2 },
            }}
          >
            <Card className="w-75" onClick={sheet2}>
              <Image src={sheetimg} roundedCircle />
              <Card.Body>
                <Card.Title>DSA shhet by Fraz</Card.Title>
                <Card.Text className="px-2">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to={{
              pathname: "/dashboard-set/sheet3",
              state: { sheetid: 3 },
            }}
          >
            <Card className="w-75" onClick={sheet3}>
              <Image src={sheetimg} roundedCircle />
              <Card.Body>
                <Card.Title>450 DSA</Card.Title>
                <Card.Text className="px-2">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardSheet;
