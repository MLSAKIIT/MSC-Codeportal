import React from "react";
import "../Dashboard/QuestionList.css";
import Rows from "./Rows";
import { Container, Row, Col, Table } from "react-bootstrap";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export default function QuestionList() {
  return (
    <>
      <Container className="question-list">
        <Row className="rows">
          <div className="topic">Topic Name</div>
          <div className="ques-progress">
            Total Question : XX, X more questions left (xyz% done)
          </div>
          <Table striped bordered hover className="Ques-Table">
            <thead>
              <tr>
                <th className="table-head-1">
                  <CheckBoxOutlineBlankIcon />
                </th>

                <th className="table-head-1">
                  <BookmarkIcon />
                </th>
                <th className="table-head">Number</th>
                <th className="table-head">Questions</th>
              </tr>
            </thead>
            <tbody>
              <Rows />
              <Rows />
              <Rows />
              <Rows />
              <Rows />
              <Rows />
              <Rows />
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}
