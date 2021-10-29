import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cardsheet from "./Cardsheet";

const DashboardSheet = () => {
  return (
    <div
      style={{ marginTop: "50px", overflow: "hidden", paddingBottom: "20px" }}
    >
      <Row xs={1} md={3} style={{ marginLeft: "20px" }} className="g-4">
        <Cardsheet title="Striver's Sheet"/>
        <Cardsheet title="Dsa sheet by Fraz"/>
        <Cardsheet title="450 Dsa sheet"/>

      </Row>
    </div>
  );
};

export default DashboardSheet;
