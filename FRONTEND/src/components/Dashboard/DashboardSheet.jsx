import { React, useState } from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import sheetimg from "../About/Images";
import DashboardOverview from "./DashboardOverview";

const DashboardSheet = () => {
  const data = [
    {
      id: 1,
      title: "Striver's Sheet",
      content:
        "Curated SDE sheet 180 questions, which comes up with video editorials, comprising of 180+ ques",
    },
    {
      id: 2,
      title: "DSA Sheet \n by Fraz",
      content: "Curated SDE sheet 180 questions, which comes up with video editorials, comprising of 180+ ques",
    },
    {
      id: 3,
      title: "450 DSA",
      content: "Curated SDE sheet 180 questions, which comes up with video editorials, comprising of 180+ ques",
    },
  ];
  //setting sheet id
  const [sheet, setsheet] = useState("");

  //onClick sheet functions
  const sheet1 = () => {
    setsheet(1);
  };
  const sheet2 = () => {
    setsheet(2);
  };
  const sheet3 = () => {
    setsheet(3);
  };

  const dataList = data.map((d) => <DashboardOverview d={d} />);

  return (
    <>
      <CardsIndexContainer xs={1} md={3} className="g-4">
        <Col>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to={{
              pathname: "/dashboard-set/sheet1",
              state: { sheetid: 1 },
            }}
          >
            <CardContainer onClick={sheet1}>
              <CardWrapper>{dataList[0]}</CardWrapper>
            </CardContainer>
          </Link>
        </Col>
        <Col>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to={{
              pathname: "/dashboard-set/sheet2",
              state: { sheetid: 2 },
            }}
          >
            <CardContainer onClick={sheet2}>
              <CardWrapper style={{alignItems: 'center'}}>{dataList[1]}</CardWrapper>
            </CardContainer>
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
            <CardContainer onClick={sheet3}>
              <CardWrapper>{dataList[2]}</CardWrapper>
            </CardContainer>
          </Link>
        </Col>
      </CardsIndexContainer>
    </>
  );
};

export default DashboardSheet;

const CardsIndexContainer = styled(Row)`
  height: 100%;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-decoration: none;
`;

const CardContainer = styled(Col)`
  width: 320px;
  height: 580px;
  margin: 0 auto;
  margin-top: 40px;
  background-color: #d9e4f5;
  background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
  border-radius: 28px;
  box-shadow: 0px 0px 12px 1px rgba(15, 15, 15, 0.05);
  position: relative;
`;

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  oevrflow: hidden;
  border-radius: 28px;
  padding-top: 50px;
`;
