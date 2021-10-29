import React from "react";
import { Card, Image, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import sheetimg from "../About/Images/Learn.svg";
const Cardsheet = (props) => {
  return (
    <Col>
      <Link
        to="/dashboard-set"
        style={{ textDecoration: "none", color: "#000" }}
      >
        <Card className="w-75">
          <Image
            src={sheetimg}
            roundedCircle
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className="px-2">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Cardsheet;
