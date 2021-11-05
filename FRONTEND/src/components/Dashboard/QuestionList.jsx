import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "../Dashboard/QuestionList.css";
import Rows from "./Rows";
import { Container, Row, Col, Table } from "react-bootstrap";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export default function QuestionList(props) {
  const location = useLocation();
  const sheet = location.state?.api;
  const [queslist, setQuesList] = useState([]);

  useEffect(() => {
    // const url = "https://qode-msc.herokuapp.com/api/qode/problems";
    const fetchData = async () => {
      try {
        const response = await fetch(sheet);
        const json = await response.json();
        setQuesList(json.questions);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  // console.log(queslist);
  return (
    <>
      <Container className="question-list">
        <Row className="rows">
          <div className="topic">Topic Name</div>
          <div className="ques-progress">
            Total Question : XX, X more questions left (xyz% done)
          </div>
          <Table bordered className="Ques-Table">
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
              {queslist.map((obj) => (
                <Rows
                  no={obj.question_id}
                  problem={obj.problem_statement}
                  link={obj.link}
                />
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}
