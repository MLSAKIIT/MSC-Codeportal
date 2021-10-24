import React from "react";
import {
  Card,
  CardGroup,
  Image,
  Row,
  Col,
  ProgressBar,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const DashboardSheet = () => {
  return (
    <div
      style={{ marginTop: "50px", overflow: "hidden", paddingBottom: "20px" }}
    >
      <Row xs={1} md={3} style={{ marginLeft: "20px" }} className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col>
            <Link to="/dashboard-set" style={{textDecoration:"none",color:"#000"}}>
              <Card className="w-75">
                <Image
                  src="/FRONTEND/src/components/About/Images/Learn.svg/50px20"
                  roundedCircle
                />
                <Card.Body>
                  <Card.Title>Sheet Name</Card.Title>
                  <Card.Text className="px-2">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DashboardSheet;
